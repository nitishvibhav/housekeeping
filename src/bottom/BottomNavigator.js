import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import Inspection from './Inspection';
import LostAndFound from './LostAndFound';
import Maintenance from './Maintenance';
import {ImagePath} from '../assets/images/imagePath';
import Cleaning from './Cleaning';

const Bottom = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Bottom.Navigator screenOptions={{tabBarShowLabel: false}}>
      <Bottom.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center'}}>
              <Image
                source={focused ? ImagePath.homeFocused : ImagePath.home}
                style={{
                  width: 20,
                  height: 20,
                }}
              />
              <Text style={styles.text}>Home</Text>
            </View>
          ),
        }}
      />
      <Bottom.Screen
        name="Inspection"
        component={Inspection}
        options={{
          headerShown: true,
          title:"Inspection Details",
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center'}}>
              <Image
                source={
                  focused ? ImagePath.inspectionFocused : ImagePath.inspection
                }
                style={{
                  width: 22,
                  height: 22,
                  tintColor: 'orange',
                }}
              />
              <Text style={styles.text}>Inspection</Text>
            </View>
          ),
        }}
      />
      <Bottom.Screen
        name="Cleaning"
        component={Cleaning}
        options={{
          headerShown: true,
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center'}}>
              <Image
                source={
                  focused ? ImagePath.cleaningFocused : ImagePath.cleaning
                }
                style={{
                  width: 22,
                  height: 22,
                  tintColor: 'orange',
                }}
              />
              <Text style={styles.text}>Cleaning</Text>
            </View>
          ),
        }}
      />
      <Bottom.Screen
        name="LostAndFound"
        component={LostAndFound}
        options={{
          headerShown: true,
          title: 'Found Items',
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center'}}>
              <Image
                source={focused ? ImagePath.lostFocused : ImagePath.lost}
                style={{
                  width: 24,
                  height: 24,
                  tintColor: 'orange',
                }}
              />
              <Text style={styles.text}>Found</Text>
            </View>
          ),
        }}
      />
      <Bottom.Screen
        name="Maintenance"
        component={Maintenance}
        options={{
          headerShown: true,
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center'}}>
              <Image
                source={
                  focused ? ImagePath.maintenaceFocused : ImagePath.maintenace
                }
                style={{
                  width: 20,
                  height: 20,
                  tintColor: 'orange',
                }}
              />
              <Text style={styles.text}>Maintenance</Text>
            </View>
          ),
        }}
      />
    </Bottom.Navigator>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({
  text: {
    fontSize: 10,
    fontStyle: 'italic',
    color: 'gray',
    fontWeight: '700',
  },
});
