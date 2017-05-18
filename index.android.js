/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import { App } from './src/containers/App/App';
import { Provider } from 'react-redux';
//import configureStore from './src/store/configureStore';
import { store } from './src/store';

// const App = DrawerNavigator({
//   Calculator: {screen: CalculatorScreen},
//   Animation: {screen: MainTabNavigator},
//   PizzaTranslator: {screen: PizzaTranslator},
//   Details: {screen: DetailsTab},
// });

//export const store=configureStore();

class MainApp extends Component {
    render() {
      return (
        <Provider store={store} >
          <App />
        </Provider>
      );
    }
}

AppRegistry.registerComponent('test', () => MainApp);
