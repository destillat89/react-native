import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import MainScreen from './Notepad';
import TextEditor from '../NotepadEditor/TextEditor';
import ListEditor from '../NotepadEditor/ListEditor';

export const NotepadNavigator = StackNavigator({
  MainScreen: {screen: MainScreen},
  TextEditor: {screen: TextEditor},
  ListEditor: {screen: ListEditor}
});
