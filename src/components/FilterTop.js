import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Filter = ({category, color,backgroundColor}) => {
  return (
    <View style={[styles.container, (backgroundColor={backgroundColor})]}>
      <Text style={[styles.text, (color = {color})]}>{category}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: 'white',
    alignSelf:'center',
    height:24
    
  },
  container: {
    alignItems: 'center',
    borderRadius: 6,
    paddingHorizontal:16,
    paddingVertical:8,
    marginLeft:10,
    backgroundColor:"white",
    justifyContent:'center',
    
  },
});

export default Filter;
