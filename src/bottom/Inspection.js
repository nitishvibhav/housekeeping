import {StyleSheet, Text, View, Image, TextInput, Alert} from 'react-native';
import React, {useState} from 'react';
import {ImagePath} from '../assets/images/imagePath';
import CustomDropdown from '../components/CustomDropdown';
import CustomButton from '../components/CustomButton';
import {postInspectionDetails} from '../redux/inspection/action';
import {useSelector} from 'react-redux';
import {get} from 'lodash';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

const Inspection = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {user} = useSelector(state => state.loginReducer);
  const [data, setData] = useState({
    remark: '',
    selectedStatus: '',
    inspectionTime: '',
  });

  const handleChange = (name, value) => {
    setData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setData({
      remark: '',
      selectedStatus: '',
      inspectionTime: '',
    });
  };

  const statusOptions = [
    {label: 'Issue', value: 'ISSUE'},
    {label: 'Fine', value: 'FINE'},
  ];

  const handleSubmit = async () => {
    const req = {
      hotelId: 'hotelIdhere5111',
      roomId: '4545f4s54f5s',
      userId: user.result._id,
      roomNumber: '105',
      remark: data.remark,
      inspectionTime: data.inspectionTime,
      resolveStatus: data.selectedStatus,
    };

    try {
      const res = await dispatch(postInspectionDetails(req));
      const status = get(res, 'value.status', res.status);
      if (status === 200) {
        Alert.alert('Success', 'Data submitted successfully.');
        resetForm();
        navigation.navigate('Home');
      } else {
        console.error('Failed response data:', res);
      }
    } catch (error) {
      console.error('Error response:', error.response);
    }
  };

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.miniContainer}>
          <Image
            source={ImagePath.cleaning}
            style={{height: 20, width: 20, marginRight: 15}}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '90%',
            }}>
            <Text>Room Number</Text>
            <Text style={{marginLeft: 20}}>201</Text>
          </View>
        </View>
        <View style={styles.labelView}>
          <Text>Remark</Text>
        </View>
        <TextInput
          placeholder="Remark"
          style={styles.input}
          value={data.remark}
          onChangeText={text => handleChange('remark', text)}
        />
        <View style={styles.labelView}>
          <Text>Inspection Time</Text>
        </View>
        <TextInput
          placeholder="Inspection Time"
          style={styles.input}
          value={data.inspectionTime}
          onChangeText={text => handleChange('inspectionTime', text)}
        />
        <View style={styles.labelView}>
          <Text>Select Status</Text>
        </View>
        <CustomDropdown
          placeholder="Select Status"
          data={statusOptions}
          value={data.selectedStatus}
          onChange={value => handleChange('selectedStatus', value)}
        />
      </View>
      <CustomButton title="Submit" width="90%" onPress={handleSubmit} />
    </View>
  );
};

export default Inspection;

const styles = StyleSheet.create({
  miniContainer: {
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: 10,
    backgroundColor: 'white',
    height: 50,
    alignItems: 'center',
    paddingHorizontal: 15,
    borderRadius: 6,
    borderColor: 'gray',
    borderWidth: 0.5,
  },
  lablelView: {
    width: '95%',
    alignSelf: 'center',
    marginTop: 15,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 0.5,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 6,
    paddingHorizontal: 10,
    fontSize: 14,
    backgroundColor: 'white',
    marginTop: 10,
  },
  dropdown: {
    margin: 16,
    paddingVertical: 6,
    backgroundColor: 'white',
    borderRadius: 12,
    paddingHorizontal: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
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
  container: {
    backgroundColor: 'white',
    marginTop: 10,
    paddingBottom: 10,
  },
  labelView: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 20,
  },
});
