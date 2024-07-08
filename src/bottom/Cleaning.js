import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getRefilListDetails} from '../redux/refilList/action';
import {getToDoDetails} from '../redux/todoList/action';
import {
  getCleaningDetails,
  postCleaningDetails,
} from '../redux/cleaning/action';
import CustomCheckbox from '../components/CustomCheckbox';
import {Dropdown} from 'react-native-element-dropdown';
import CustomButton from '../components/CustomButton';
import {ImagePath} from '../assets/images/imagePath';
import {useNavigation, useRoute} from '@react-navigation/native';
import get from 'lodash/get';

const Cleaning = () => {
  const dispatch = useDispatch();
  const [checkboxStates, setCheckboxStates] = useState({});
  const [dropdownValues, setDropdownValues] = useState({});
  const {toDoList} = useSelector(state => state.toDoListReducer);
  const {refilList} = useSelector(state => state.refilListReducer);
  const {user} = useSelector(state => state.loginReducer);
  const navigation = useNavigation();

  const [remark, setRemark] = useState('');
  const [cleaningTime, setCleaningTime] = useState('');
  const [serviceStatus, setServiceStatus] = useState('');

  useEffect(() => {
    dispatch(getRefilListDetails());
    dispatch(getToDoDetails());
    dispatch(getCleaningDetails());
  }, [dispatch]);

  const data = [
    {label: '1', value: '1'},
    {label: '2', value: '2'},
    {label: '3', value: '3'},
    {label: '4', value: '4'},
    {label: '5', value: '5'},
  ];

  const statusData = [
    {label: 'Issue', value: 'ISSUE'},
    {label: 'Okay', value: 'OKAY'},
  ];

  const handleCheckboxChange = itemId => {
    setCheckboxStates(prevState => ({
      ...prevState,
      [itemId]: !prevState[itemId],
    }));
  };

  const handleDropdownChange = (itemId, value) => {
    setDropdownValues(prevState => ({
      ...prevState,
      [itemId]: value,
    }));
  };

  const handleChange = (name, value) => {
    if (name === 'remark') setRemark(value);
    else if (name === 'cleaningTime') setCleaningTime(value);
    else if (name === 'serviceStatus') setServiceStatus(value);
  };

  useEffect(() => {
    if (refilList?.result) {
      const initialCheckboxStates = {};
      refilList.result.forEach(item => {
        initialCheckboxStates[item._id] = false;
      });
      setCheckboxStates(initialCheckboxStates);
    }
  }, [refilList]);

  useEffect(() => {
    if (toDoList?.result) {
      const initialDropdownValues = {};
      toDoList.result.forEach(item => {
        initialDropdownValues[item._id] = null;
      });
      setDropdownValues(initialDropdownValues);
    }
  }, [toDoList]);

  const handleSubmit = async () => {
    const req = {
      hotelId: 'hotelIdhere5111',
      userId: user.result._id,
      bookingId: 'fsfs22',
      rooms: [
        {
          _id: '5465465456454dsds',
          roomNumber: '504',
        },
      ],
      remark,
      cleaningTime,
      serviceStatus,
      todoList: toDoList?.result?.map(item => ({
        title: item.title,
        quantity: dropdownValues[item._id] || '0',
      })),
      refillList: refilList?.result?.map(item => ({
        title: item.title,
        required: checkboxStates[item._id] ? 'yes' : 'no',
      })),
    };

    try {
      const res = await dispatch(postCleaningDetails(req));
      console.log(res, 'response data ..................');
      const status = get(res, 'value.status', res.status);
      if (status === 200) {
        Alert.alert('Success', 'Data submitted successfully.');
        navigation.navigate('Home');
      } else {
        console.error('Failed response data:', res);
      }
    } catch (error) {
      console.error('Error response:', error.response);
    }
  };

  const route = useRoute();
  const item = route.params?.item || null;

  console.log(item, 'data from home page................');

  return (
    <ScrollView>
      <View style={styles.miniContainer}>
        <Text>06 Min 24 Seconds</Text>
      </View>
      <View style={styles.miniContainerView}>
        <Image source={ImagePath.cautionMark} style={styles.iconImage} />
        <Text>Cleaning window with special attention</Text>
      </View>
      <View style={styles.miniContainerView}>
        <Image source={ImagePath.roomIcon} style={styles.iconImage} />
        <Text>Room Number : {item.roomNumber}</Text>
      </View>
      <View style={styles.labelView}>
        <Text>Remark</Text>
      </View>
      <TextInput
        placeholder="Remark"
        style={styles.input}
        value={remark}
        onChangeText={text => handleChange('remark', text)}
      />

      <View style={styles.labelView}>
        <Text>Cleaning Time</Text>
      </View>
      <TextInput
        placeholder="Cleaning Time"
        style={styles.input}
        value={cleaningTime}
        onChangeText={text => handleChange('cleaningTime', text)}
      />
      <View style={styles.labelView}>
        <Text style={styles.headingText}>TO DO LIST</Text>
      </View>
      <View style={styles.miniContainer}>
        {toDoList?.result?.map(item => (
          <View
            key={item._id}
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <Dropdown
              style={styles.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              data={data}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder="0"
              value={dropdownValues[item._id]}
              onChange={selectedItem =>
                handleDropdownChange(item._id, selectedItem.value)
              }
            />
            <Text style={styles.textNormal}>{item.title}</Text>
          </View>
        ))}
      </View>
      <View style={styles.labelView}>
        <Text style={styles.headingText}>REFIL LIST</Text>
      </View>
      <View style={styles.miniContainer}>
        {refilList?.result?.map(item => (
          <CustomCheckbox
            key={item._id}
            label={item.title}
            isChecked={checkboxStates[item._id] || false}
            onChange={() => handleCheckboxChange(item._id)}
          />
        ))}
      </View>

      <View style={styles.labelView}>
        <Text>Cleaning status</Text>
      </View>
      <Dropdown
        style={styles.dropdown2}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        data={statusData}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Select Status"
        value={serviceStatus}
        onChange={item => handleChange('serviceStatus', item.value)}
      />
      <CustomButton title="Submit" width="95%" onPress={handleSubmit} />
    </ScrollView>
  );
};

export default Cleaning;

const styles = StyleSheet.create({
  miniContainer: {
    width: '90%',
    backgroundColor: 'white',
    marginTop: 10,
    padding: 10,
    alignSelf: 'center',
    borderRadius: 6,
    elevation: 1,
  },
  timer: {
    fontSize: 16,
    color: 'black',
    fontWeight: '700',
    textAlign: 'center',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  headingText: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: '700',
    color: 'black',
  },
  textNormal: {
    fontSize: 15,
    fontWeight: '500',
    color: 'black',
    marginTop: 10,
  },
  dropdown: {
    marginTop: 10,
    height: 40,
    marginRight: 10,
    width: 64,
    backgroundColor: 'white',
    borderRadius: 6,
    padding: 12,
    borderWidth: 1,
    borderColor: 'black',
  },
  dropdown2: {
    marginTop: 10,
    height: 40,
    marginRight: 10,
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 6,
    padding: 12,
    borderWidth: 1,
    borderColor: 'black',
    alignSelf: 'center',
  },
  item: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  miniContainerView: {
    width: '90%',
    backgroundColor: 'white',
    marginTop: 10,
    padding: 10,
    alignSelf: 'center',
    borderRadius: 6,
    elevation: 1,
    flexDirection: 'row',
  },
  iconImage: {
    height: 20,
    width: 20,
    marginRight: 10,
  },
  labelView: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 15,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 6,
    paddingHorizontal: 10,
    fontSize: 14,
    elevation: 2,
    backgroundColor: 'white',
    marginTop: 5,
  },
});
