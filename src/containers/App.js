
import React, { Component } from 'react';
import {
  DrawerNavigator
} from 'react-navigation';
import {MainTabNavigator} from '../screens/MainTabNavigator';
import CalculatorScreen from '../screens/CalculatorScreen';
import NotepadScreen from '../screens/NotepadScreen';
import DetailsTab from '../screens/DetailsTab';
import PizzaTranslator from '../screens/TranslatorScreen';

export const App = DrawerNavigator({
  Notepad: {screen: NotepadScreen},
  Calculator: {screen: CalculatorScreen},
  Animation: {screen: MainTabNavigator},
  PizzaTranslator: {screen: PizzaTranslator},
  Details: {screen: DetailsTab},
});
