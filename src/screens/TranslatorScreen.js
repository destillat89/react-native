import React, { Component } from 'react';
import PizzaTranslator from '../components/PizzaTranslator';

export default class TranslatorScreen extends Component {
  static navigationOptions = {
    title: 'Pizza translator'
  };
  render() {
    return (
      <PizzaTranslator />
    );
  }
}
