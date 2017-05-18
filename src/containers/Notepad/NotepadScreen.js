import React, { Component } from 'react';
//import {View, Text} from 'react-native';
import { NotepadNavigator } from './Navigator';

export default class NotepadScreen extends Component {
  static navigationOptions = {
    title: 'Notepad'
  };
  render() {
    return (
      <NotepadNavigator />
    );
  }
}
