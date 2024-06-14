import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const HomePageCard = ({text,onPress}) => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.miniDiv}>
        <Text style={styles.miniText}>Grocery Shopping App design</Text>
        <View
          style={{
            height: 18,
            width: 18,
            backgroundColor: 'red',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 3,
            backgroundColor: '#c9b6f2',
          }}>
          <Image
            source={
              text == 'done'
                ? require('../../assets/images/done.png')
                : text == 'To-do'
                ? require('../../assets/images/task.png')
                : require('../../assets/images/information.png')
            }
            style={{
              height: 12,
              width: 12,
              tintColor: '#380ea2',
              resizeMode: 'contain',
            }}
          />
        </View>
      </View>
      <View style={styles.miniDiv}>
        <Text style={styles.text}>Market Research</Text>
      </View>
      <View style={styles.miniDiv}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={require('../../assets/images/time.png')}
            style={{
              height: 12,
              width: 12,
              tintColor: '#7F00FF',
              marginRight: 5,
            }}
          />
          <Text style={{color: '#7F00FF', fontSize: 12, fontWeight: '700'}}>
            10:00 AM
          </Text>
        </View>
        <View
          style={{
            backgroundColor:
              text == 'done'
                ? '#c3a8f9'
                : text == 'To-do'
                ? '#b0cef5'
                : '#ff93b3',
            borderRadius: 10,
            paddingHorizontal: 8,
            paddingVertical: 4,
          }}>
          <Text style={{fontSize: 10, color: '#38167c', fontWeight: '700'}}>
            {text}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HomePageCard;

const styles = StyleSheet.create({
  container: {
    width: '95%',
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    marginTop: 10,
    padding: 10,
  },
  miniDiv: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    marginVertical: 5,
    fontSize: 16,
    color: 'black',
    fontWeight: '800',
  },
  miniText: {
    fontSize: 13,
    color: 'gray',
  },
});
