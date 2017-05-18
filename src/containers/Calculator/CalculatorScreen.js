import React, { Component } from 'react';
//import {View, Text} from 'react-native';
import Calculator from './Calculator';

export default class CalculatorScreen extends Component {
  static navigationOptions = {
    title: 'Calculator'
  };
  render() {
    return (
      <Calculator />
    );
  }
}
