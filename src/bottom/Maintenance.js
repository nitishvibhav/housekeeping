import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, TextInput, Alert} from 'react-native';
import CustomButton from '../components/CustomButton';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Picker} from '@react-native-picker/picker';
import {getDepartmentDetails} from '../redux/department/action';
import {getRoomsDetails} from '../redux/rooms/action';
import {
  getMaintenanceDetails,
  postMaintenanceDetails,
  updateMaintenanceDetails,
} from '../redux/maintenance/action';
import {get} from 'lodash';

const Maintenance = () => {
  const [data, setData] = useState({
    roomNumber: '',
    roomId: '',
    hotelId: '',
    department: '',
    description: '',
  });

  const {user} = useSelector(state => state.loginReducer);
  const {departmentData} = useSelector(state => state.departmentReducer);
  const {rooms} = useSelector(state => state.roomsReducer);
  const category = departmentData.result || [];
  const roomData = rooms.result || [];

  const route = useRoute();
  const item = route.params?.item || null;
  const isEditMode = !!item;

  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    dispatch(getDepartmentDetails());
    dispatch(getRoomsDetails());
  }, [dispatch]);

  useEffect(() => {
    if (isEditMode && item) {
      setData({
        hotelId: item.hotelId,
        roomId: item.roomId,
        roomNumber: item.roomNumber,
        department: item.department,
        description: item.description,
      });
    }
  }, [isEditMode, item]);

  const handleChange = (name, value) => {
    if (name === 'roomNumber') {
      const selectedRoom = roomData.find(room => room.roomNumber === value);
      setData({
        ...data,
        roomNumber: value,
        roomId: selectedRoom ? selectedRoom._id : '',
        hotelId: selectedRoom ? selectedRoom.hotelID : '',
      });
    } else {
      setData({
        ...data,
        [name]: value,
      });
    }
  };

  const resetForm = () => {
    setData({
      roomNumber: '',
      roomId: '',
      hotelId: '',
      department: '',
      description: '',
    });
  };

  const handleSubmit = async isEdit => {
    const req = {
      hotelId: data.hotelId,
      roomId: data.roomId,
      userId: user.result._id,
      roomNumber: data.roomNumber,
      category: data.department,
      description: data.description,
      status: 'OPEN',
    };

    try {
      const res = isEdit
        ? await dispatch(updateMaintenanceDetails(item._id, req))
        : await dispatch(postMaintenanceDetails(req));
      const status = get(res, 'value.status', res.status);

      if (status === 200) {
        Alert.alert(
          'Success',
          `Data ${isEdit ? 'updated' : 'submitted'} successfully.`,
        );
        dispatch(getMaintenanceDetails());
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
        <View style={styles.labelView}>
          <Text>Select Room Number</Text>
        </View>
        <Picker
          selectedValue={data.roomNumber}
          onValueChange={itemValue => handleChange('roomNumber', itemValue)}
          style={styles.picker}>
          <Picker.Item label="Select Room Number" value="" />
          {roomData.map((item, index) => (
            <Picker.Item
              key={index}
              label={item.roomNumber}
              value={item.roomNumber}
            />
          ))}
        </Picker>
        <View style={styles.labelView}>
          <Text>Select Department</Text>
        </View>
        <Picker
          selectedValue={data.department}
          onValueChange={itemValue => handleChange('department', itemValue)}
          style={styles.picker}>
          <Picker.Item label="Select Department" value="" />
          {category.map((department, index) => (
            <Picker.Item
              key={index}
              label={department.category}
              value={department.category}
            />
          ))}
        </Picker>
        <View style={styles.labelView}>
          <Text>Description</Text>
        </View>
        <TextInput
          placeholder="Description"
          style={styles.input}
          multiline
          numberOfLines={6}
          textAlignVertical="top"
          value={data.description}
          onChangeText={text => handleChange('description', text)}
        />
      </View>
      <CustomButton
        title={isEditMode ? 'Update' : 'Add'}
        width="95%"
        onPress={() => handleSubmit(isEditMode)}
      />
    </View>
  );
};

export default Maintenance;

const styles = StyleSheet.create({
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    width: '95%',
    alignSelf: 'center',
    borderRadius: 6,
    paddingHorizontal: 10,
    fontSize: 14,
    elevation: 2,
    backgroundColor: 'white',
    marginTop: 10,
  },
  picker: {
    borderColor: 'gray',
    borderWidth: 1,
    width: '95%',
    alignSelf: 'center',
    borderRadius: 6,
    fontSize: 14,
    elevation: 2,
    backgroundColor: 'white',
    marginTop: 10,
  },
  container: {
    width: '100%',
    backgroundColor: 'white',
    paddingBottom: 20,
    marginTop: 10,
  },
  labelView: {
    width: '95%',
    alignSelf: 'center',
    marginTop: 15,
  },
});
