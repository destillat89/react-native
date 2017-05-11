
import React, { Component } from 'react';
import {
  DrawerNavigator
} from 'react-navigation';
import {MainTabNavigator} from '../screens/MainTabNavigator';
import CalculatorScreen from '../screens/CalculatorScreen';
import DetailsTab from '../screens/DetailsTab';
import PizzaTranslator from '../screens/TranslatorScreen';

export const App = DrawerNavigator({
  Calculator: {screen: CalculatorScreen},
  Animation: {screen: MainTabNavigator},
  PizzaTranslator: {screen: PizzaTranslator},
  Details: {screen: DetailsTab},
});
