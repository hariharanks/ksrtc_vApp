import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { createStackNavigator} from 'react-navigation';

import GettingStarted from './src/components/GettingStarted/GettingStarted'
import SignIn from './src/components/signin/SignIn'
import Home from './src/components/home/Home'
import HeaderMenu from './src/components/HeaderMenu'

const BasicApp = createStackNavigator({
  Main: {screen: GettingStarted},
  SignIn: {screen: SignIn},
  Home: {screen: Home},
  // SignUpSuccess: {screen: SignUpSuccess},
  // HomePage:{screen:HomePage}
},
  {
   headerMode: "none"
  });

 export default BasicApp;
