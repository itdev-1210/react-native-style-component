import React from 'react';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import App from './src';

function Application(){
    return  <NavigationContainer><App/></NavigationContainer>;
}

export default Application;
