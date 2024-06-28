import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/screens/Home';
import BottomNavigator from './src/bottom/BottomNavigator';
import ToDoPage from './src/screens/ToDoPage';
import Login from './src/screens/Login';
import { getUser } from './utils';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from './src/redux/user/action';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
      name="BottomTabs"
      component={BottomNavigator}
      options={{ headerShown: false }}
    />
     
    </Stack.Navigator>
  );
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>

    
      <Stack.Screen
      name="Home"
      component={Home}
      options={{ headerShown: false }}
    />
      <Stack.Screen
        name="ToDoPage"
        component={ToDoPage}
        options={{ headerShown: true, title: 'Details' }}
      />
      
    </Stack.Navigator>
  );
};


const AppNavigator = () => {

  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  console.log(user, "line no. 56........")

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUser();
        console.log('User data from AsyncStorage:', userData); // Check userData
        if (userData) {
          dispatch(setUser(userData)); // Dispatch action to set user data in Redux store
        }
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
  }, [dispatch]);


  return (
    <NavigationContainer>
    {user && user.token ? <MainStackNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigator;
