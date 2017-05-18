import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import MainScreen from './MainScreen';
import DetailsTab from './DetailsTab';

export const MainTabNavigator = TabNavigator({
  MainTab: {screen: MainScreen},
  DetailsTab: {screen: DetailsTab}
},
{
  tabBarOptions: {
    labelStyle: {
      fontSize: 12,
      padding: 0,
      margin: 0
    },
    style: {
      backgroundColor: '#AAAAEE'
    },
    activeTintColor: 'black',
    indicatorStyle: {
      backgroundColor: 'orange'
    }
  }
});
MainTabNavigator.navigationOptions = {
  title: 'Animation'
};
