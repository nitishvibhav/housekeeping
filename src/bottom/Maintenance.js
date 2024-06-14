import {StyleSheet, Text, View, TextInput, Image, Button} from 'react-native';
import React from 'react';
import CustomButton from '../components/CustomButton';

const Maintenance = () => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.lablelView}>
          <Text>Select Room Number</Text>
        </View>
        <TextInput placeholder="Room Number" style={styles.input} />
        <View style={styles.lablelView}>
          <Text>Select Department</Text>
        </View>
        <TextInput placeholder="Select Department" style={styles.input} />
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
      <CustomButton title="Submit" width="95%" />
    </View>
  )
}

export default Maintenance

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