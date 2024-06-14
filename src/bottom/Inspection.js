import {StyleSheet, Text, View, Image, TextInput, Button} from 'react-native';
import React, {useState} from 'react';
import {ImagePath} from '../assets/images/imagePath';
import {Dropdown} from 'react-native-element-dropdown';
import CustomButton from '../components/CustomButton';

const Inspection = () => {
  const data = [
    {label: 'Everything Fine', value: '1'},
    {label: 'Issue', value: '2'},
  ];

  const [value, setValue] = useState(null);
  return (
    <View>
      <View style={{backgroundColor: 'white', marginTop: 10}}>
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
        <View style={styles.lablelView}>
          <Text>Select Room Status</Text>
        </View>
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          data={data}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder="Select Room Status"
          value={value}
          onChange={item => {
            setValue(item.value);
          }}
        />
      </View>

      {value == 1 && (
        <View>
          <CustomButton title="Complete" width="90%" />
        </View>
      )}
      <View style={{backgroundColor: 'white', marginTop: 10}}>
        {value == 2 && (
          <View>
            <TextInput
              placeholder="Description"
              style={styles.dropdown}
              multiline
              numberOfLines={5}
              textAlignVertical="top"
            />
            <TextInput
              placeholder="Upload Image If Available"
              style={styles.dropdown}
              multiline
              numberOfLines={10}
              textAlignVertical="top"
            />
            <CustomButton title="Problem " width="90%" />
          </View>
        )}
      </View>
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
});
