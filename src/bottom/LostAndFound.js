import {StyleSheet, Text, View, TextInput, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import CustomButton from '../components/CustomButton';
import {useDispatch, useSelector} from 'react-redux';
import {getLostAndFoundDetails, postLostAndFoundDetails} from '../redux/lostAndFound/action';
import {get} from 'lodash';
import { useNavigation } from '@react-navigation/native';

const LostAndFound = () => {
  const [foundItem, setFoundItem] = useState('');
  const [roomNumber, setRoomNumber] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState('');
  const navigation = useNavigation()

  const dispatch = useDispatch();
  const {user} = useSelector(state => state.loginReducer);
  console.log(user, 'line no...18');
  const handlePost = async () => {
    const req = {
      hotelId: 'hotelIdhere51',
      roomId: '4545f4s54f5',
      userId: user.result._id,
      roomNumber: roomNumber,
      title: foundItem,
      description: description,
      status: 'FOUND',
    };

    try {
      const res = await dispatch(postLostAndFoundDetails(req));
      const status = get(res, 'value.status', res.status);
      console.log('Response:', res);
      if (status === 200) {
        Alert.alert('Success', 'Data submitted successfully.');
        dispatch(getLostAndFoundDetails())
        navigation.navigate('Home')
      } else {
        console.error('Failed response data:', res);
        Alert.alert('Error', 'Failed to submit data.');
      }
    } catch (error) {
      console.error('Error response:', error.response);
      Alert.alert('Error', 'An error occurred while submitting data.');
    }
  };

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.labelView}>
          <Text>Found Items</Text>
        </View>
        <TextInput
          placeholder="Found Item"
          style={styles.input}
          value={foundItem}
          onChangeText={setFoundItem}
        />
        <View style={styles.labelView}>
          <Text>Select Room Number</Text>
        </View>
        <TextInput
          placeholder="Room Number"
          style={styles.input}
          value={roomNumber}
          onChangeText={setRoomNumber}
        />
        <View style={styles.labelView}>
          <Text>Date & Time</Text>
        </View>
        <TextInput
          placeholder="Date & Time"
          style={styles.input}
          value={dateTime}
          onChangeText={setDateTime}
        />
        <View style={styles.labelView}>
          <Text>Description</Text>
        </View>
        <TextInput
          placeholder="Description"
          style={styles.input}
          multiline
          numberOfLines={3}
          textAlignVertical="top"
          value={description}
          onChangeText={setDescription}
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
          value={images}
          onChangeText={setImages}
        />
      </View>
      <CustomButton title="Submit" width="95%" onPress={handlePost} />
    </View>
  );
};

export default LostAndFound;

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
