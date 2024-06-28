import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';

const CustomDropdown = ({ placeholder, data, value, onChange}) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Dropdown
          style={styles.dropdown}
          placeholder={placeholder}
          data={data}
          labelField="label"
          valueField="value"
          value={value}
          onChange={item => onChange(item.value)}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          itemTextStyle={styles.itemTextStyle}
        />
      </View>
    </View>
  );
};

export default CustomDropdown;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#dadada',
    alignItems: 'center',
    backgroundColor: '#eef3ef',
    padding: 10,
    width: '90%',
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  text: {
    fontSize: 11,
    color: 'gray',
  },
  dropdown: {
    backgroundColor: '#eef3ef',
    width: '100%',
  },
  placeholderStyle: {
    fontSize: 14,
    color: 'black',
    fontWeight: '800',
  },
  selectedTextStyle: {
    fontSize: 14,
    color: 'black',
    fontWeight: '700',
  },
  itemTextStyle: {
    fontSize: 14,
    color: 'black',
  },
  arrowIcon: {
    height: 14,
    width: 14,
  },
});
