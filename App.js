import 'react-native-gesture-handler'
import { createStackNavigator } from '@react-navigation/stack';
import React, { Component } from 'react'
import TampilanAwal from './src/views/screens/TampilanAwal';

export default class App extends Component {
  render() {
    
    const Stack = createStackNavigator();

    return (
          <TampilanAwal />
    )
  }
}

