import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getRefilListDetails} from '../redux/refilList/action';
import {getToDoDetails} from '../redux/todoList/action';
import {getCleaningDetails} from '../redux/cleaning/action';
import CustomCheckbox from '../components/CustomCheckbox';
import {Dropdown} from 'react-native-element-dropdown';
import CustomButton from '../components/CustomButton';
import {ImagePath} from '../assets/images/imagePath';

const Cleaning = () => {
  const dispatch = useDispatch();
  const [checkboxStates, setCheckboxStates] = useState({});
  const [dropdownValues, setDropdownValues] = useState({});
  const {toDoList} = useSelector(state => state.toDoListReducer);
  const {refilList} = useSelector(state => state.refilListReducer);

  const data = [
    {label: '1', value: '1'},
    {label: '2', value: '2'},
    {label: '3', value: '3'},
    {label: '4', value: '4'},
    {label: '5', value: '5'},
    {label: '6', value: '6'},
    {label: '7', value: '7'},
    {label: '8', value: '8'},
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
        initialDropdownValues[item._id] = null; // or some default value
      });
      setDropdownValues(initialDropdownValues);
    }
  }, [toDoList]);

  useEffect(() => {
    dispatch(getRefilListDetails());
    dispatch(getToDoDetails());
    dispatch(getCleaningDetails());
  }, [dispatch]);

  return (
    <View>
      <View style={styles.miniContainer}>
        <Text>06 Min 24 Seconds</Text>
      </View>
      <View style={styles.miniContainerView}>
        <Image source={ImagePath.cautionMark} style={styles.iconImage} />
        <Text>Cleaning window with special attention</Text>
      </View>
      <View style={styles.miniContainerView}>
        <Image source={ImagePath.roomIcon} style={styles.iconImage} />
        <Text>Room Number : 206</Text>
      </View>
      
      <Text style={styles.headingText}>TO DO LIST</Text>
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
              onChange={value => handleDropdownChange(item._id, value)}
            />
            <Text style={styles.textNormal}>{item.title}</Text>
          </View>
        ))}
      </View>
      <Text style={styles.headingText}>REFIL LIST</Text>
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
      <CustomButton title="Submit" width="95%" />
    </View>
  );
};

export default Cleaning;

const styles = StyleSheet.create({
  miniContainer: {
    width: '95%',
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
    marginLeft: 10,
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
    width: '95%',
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
});
