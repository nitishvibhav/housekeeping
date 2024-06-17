import React, { useState } from 'react';
import { TouchableOpacity, Text, View, StyleSheet, Image } from 'react-native';
import { ImagePath } from '../assets/images/imagePath';

const CustomCheckbox = ({ label, isChecked, onChange }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onChange(!isChecked)}
    >
      <Image
        source={isChecked ? ImagePath.checked : ImagePath.Checkbox}
        tintColor={isChecked ? '#000' : '#000'}
        style={{height:24, width:24}}
      />
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  label: {
    marginLeft: 8,
    fontSize: 16,
  },
});

export default CustomCheckbox;
