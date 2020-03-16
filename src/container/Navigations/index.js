import React from 'react';
import {isEmpty} from 'lodash';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../auth/login';

import HomeScreen from '../home';

const Stack = createStackNavigator();

const Navigation = (user) => {
  return (
    <Stack.Navigator>
      {isEmpty(user)  ? (
        <Stack.Screen name="LogIn" component={LoginScreen} />
      ) : (
        <Stack.Screen name="Home" component={HomeScreen} />
      )}
    </Stack.Navigator>

  );
};

export default Navigation;
