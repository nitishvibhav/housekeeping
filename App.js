
import React, { useEffect } from 'react';
import {Provider} from 'react-redux';
import store from './store'
import AppNavigator from './AppNavigator';
import messaging from '@react-native-firebase/messaging';

const App = () => {
  useEffect(() => {
    // Request permission for notifications
    const requestPermission = async () => {
      try {
        const authStatus = await messaging().requestPermission();
        const enabled =
          authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
          authStatus === messaging.AuthorizationStatus.PROVISIONAL;

        if (enabled) {
          console.log('Authorization status:', authStatus);
        }
      } catch (error) {
        console.error('Permission request error:', error);
      }
    };

    requestPermission();

    // Get the device token
    const getToken = async () => {
      try {
        const token = await messaging().getToken();
        console.log('Device FCM Token:', token);
        // Save the token somewhere in your backend or state management
      } catch (error) {
        console.error('Token retrieval error:', error);
      }
    };

    getToken();

    // Cleanup
    return () => {};
  }, []);
  return (
    <Provider store={store}>
      <AppNavigator/>
    </Provider>
  );
};

export default App;