import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Cleaning = () => {
  const [data, setData] = useState([]);
  const [refil, setRefil] = useState([])

  useEffect(() => {
    axios.get('http://97.74.86.231:3001/api/v1/en/todo-list').then(res => {
      console.log(res.data.result);
      setData(res.data.result);
    });
  }, []);

  
  useEffect(() => {
    axios.get('http://97.74.86.231:3001/api/v1/en/refill-list').then(res => {
      console.log(res.data.result);
      setRefil(res.data.result);
    });
  }, []);
  return (
    <View>
      <View style={styles.miniContainer}>
        <Text>06 Min 24 Seconds</Text>
        <Text>Remarks : Cleaning window with special attention</Text>
        <Text>Room Number : 206</Text>
      </View>

      <View style={styles.miniContainer}>
        <Text>Mark Your Work</Text>
        {data.map(item => (
          <View key={item._id} style={{flexDirection:'row'}}>
            <Text>{item.title}</Text>
            <Text>{item.quantity}</Text>
          </View>
        ))}

        {refil.map(item => (
          <View key={item._id} style={{flexDirection:'row'}}>
            <Text>{item.title}</Text>
            <Text>{item.quantity}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Cleaning;

const styles = StyleSheet.create({
  miniContainer: {
    width: '100%',
    backgroundColor: 'white',
    marginTop: 10,
    padding: 10,
  },
  timer: {
    fontSize: 16,
    color: 'black',
    fontWeight: '700',
    textAlign: 'center',
  },
});
