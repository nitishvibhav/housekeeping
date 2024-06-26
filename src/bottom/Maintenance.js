import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, TextInput, Alert} from 'react-native';
import CustomButton from '../components/CustomButton';
import {
  getMaintenanceDetails,
  postMaintenanceDetails,
  updateMaintenanceDetails,
} from '../redux/maintenance/action';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation, useRoute} from '@react-navigation/native';
import {get} from 'lodash';

const Maintenance = () => {
  const [data, setData] = useState({
    roomNumber: '',
    department: '',
    description: '',
  });
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleChange = (name, value) => {
    setData({
      ...data,
      [name]: value,
    });
  };

  const {user} = useSelector(state => state.loginReducer);

  const route = useRoute();
  const item = route.params?.item || null;
  const isEditMode = !!item;

  useEffect(() => {
    if (isEditMode) {
      setData({
        hotelId: 'hotelIdhere5111',
        roomId: '4545f4s54f5s',
        userId: user.result._id,
        roomNumber: item.roomNumber,
        category: item.department,
        description: item.description,
        status: 'OPEN',
      });
    }
  }, [isEditMode, item]);

  const handleEdit = async () => {
    console.log('Update Data:', data);
    req = {
      hotelId: 'hotelIdhere5111',
      roomId: '4545f4s54f5s',
      userId: user.result._id,
      roomNumber: data.roomNumber,
      category: data.department,
      description: data.description,
      status: 'OPEN',
    };
    try {
      const res = await dispatch(updateMaintenanceDetails(item._id, req));
      const status = get(res, 'value.status', res.status);
      console.log('Response:', res);
      if (status === 200) {
        Alert.alert('Success', 'Data updated successfully.');
        dispatch(getMaintenanceDetails());
        navigation.navigate('Home');
      } else {
        console.error('Failed response data:', res);
      }
    } catch (error) {
      console.error('Error response:', error.response);
    }
  };

  const handlePost = async () => {
    console.log('Form Data:', data);
    req = {
      hotelId: 'hotelIdhere5111',
      roomId: '4545f4s54f5s',
      userId: user.result._id,
      roomNumber: data.roomNumber,
      category: data.department,
      description: data.description,
      status: 'OPEN',
    };
    try {
      const res = await dispatch(postMaintenanceDetails(req));
      const status = get(res, 'value.status', res.status);
      console.log('Response:', res);
      if (status === 200) {
        Alert.alert('Success', 'Data submitted successfully.');
        dispatch(getMaintenanceDetails());
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
        <TextInput
          placeholder="Room Number"
          style={styles.input}
          value={data.roomNumber}
          onChangeText={text => handleChange('roomNumber', text)}
        />
        <View style={styles.labelView}>
          <Text>Select Department</Text>
        </View>
        <TextInput
          placeholder="Select Department"
          style={styles.input}
          value={data.department}
          onChangeText={text => handleChange('department', text)}
        />

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
        <View style={styles.labelView}>
          <Text>Upload Images here</Text>
        </View>
        <TextInput
          placeholder="Upload Photo here"
          style={styles.input}
          multiline
          numberOfLines={6}
          textAlignVertical="top"
        />
      </View>
      <CustomButton
        title={isEditMode ? 'Update' : 'Add'}
        width="95%"
        onPress={isEditMode ? handleEdit : handlePost}
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
    elevation: 5,
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
