import {StyleSheet, Text, View, TextInput, Image, Button,Alert} from 'react-native';
import React, { useState } from 'react';
import CustomButton from '../components/CustomButton';
import {useDispatch} from 'react-redux';
import {postLostAndFoundDetails} from '../redux/lostAndFound/action';
import {get} from 'lodash';

const LostAndFound = () => {
  const dispatch = useDispatch();

  const handlePost = async() => {
    const req = {
      hotelId:"hotelIdhere51",
      roomId:"4545f4s54f5",
      userId:"hkfhakhfkahk",
      roomNumber:"106",
      title:"Found laptop",
      description:"Found the product",
      status:"FOUND"
    };

    try {
      const res = await dispatch(postLostAndFoundDetails(req));
      const status = get(res, 'value.status', res.status); 
      console.log('Response:', res);
      if (status === 200) {
        Alert.alert('Success', 'Data submitted successfully.');
      } else {
        console.error('Failed response data:', res);
        Alert.alert('Error', 'Failed to submit data.');
      }
    } catch (error) {
      console.error('Error response:', error.response);
      console.error('Error message:', error.message);
      Alert.alert('Error', 'An error occurred while submitting data.');
    }
  };
 
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.lablelView}>
          <Text>Found Items</Text>
        </View>
        <TextInput placeholder="Found Item" style={styles.input} />
        <View style={styles.lablelView}>
          <Text>Select Room Number</Text>
        </View>
        <TextInput placeholder="Room Number" style={styles.input} />
        <View style={styles.lablelView}>
          <Text>Date & Time</Text>
        </View>
        <TextInput placeholder="Date & Time" style={styles.input} />
        <View style={styles.lablelView}>
          <Text>Description</Text>
        </View>
        <TextInput
          placeholder="Description"
          style={styles.input}
          multiline
          numberOfLines={3}
          textAlignVertical="top"
        />
        <View style={styles.lablelView}>
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
  lablelView: {
    width: '95%',
    alignSelf: 'center',
    marginTop: 15,
  },
});
