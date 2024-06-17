import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import BottomNavigator from './src/bottom/BottomNavigator';
import ToDoPage from './src/screens/ToDoPage';
import Login from './src/screens/Login';
import { getUser } from './utils';

// Creating stack navigators for Auth and Main
const AuthStack = createNativeStackNavigator();
const MainStack = createNativeStackNavigator();

const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
    </AuthStack.Navigator>
  );
};

const MainStackNavigator = () => {
  return (
    <MainStack.Navigator>
     
      <MainStack.Screen
        name="BottomNavigator"
        component={BottomNavigator}
        options={{ headerShown: false }}
      />
      <MainStack.Screen
      name="Home"
      component={Home}
      options={{ headerShown: false }}
    />
      <MainStack.Screen
        name="ToDoPage"
        component={ToDoPage}
        options={{ headerShown: true, title: 'Details' }}
      />
    </MainStack.Navigator>
  );
};

const AppNavigator = () => {
  const isLoggedIn = false; // Replace with your actual authentication logic

  return (
    <NavigationContainer>
      {getUser ? <MainStackNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigator;
