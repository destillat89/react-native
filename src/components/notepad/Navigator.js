import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import MainScreen from './Notepad';
import TextEditor from './TextEditor';
import ListEditor from './ListEditor';

export const NotepadNavigator = StackNavigator({
  MainScreen: {screen: MainScreen},
  TextEditor: {screen: TextEditor},
  ListEditor: {screen: ListEditor}
});
