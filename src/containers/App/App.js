
import React, { Component } from 'react';
import {
  DrawerNavigator
} from 'react-navigation';
import {MainTabNavigator} from './MainTabNavigator';
import CalculatorScreen from '../Calculator/CalculatorScreen';
import NotepadScreen from '../Notepad/NotepadScreen';
import DetailsTab from './DetailsTab';
import PizzaTranslator from '../PizzaTranslator/TranslatorScreen';

export const App = DrawerNavigator({
  Notepad: {screen: NotepadScreen},
  Calculator: {screen: CalculatorScreen},
  Animation: {screen: MainTabNavigator},
  PizzaTranslator: {screen: PizzaTranslator},
  Details: {screen: DetailsTab},
});
