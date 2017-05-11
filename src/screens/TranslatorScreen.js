import React, { Component } from 'react';
import PizzaTranslator from '../components/PizzaTranslator';

export default class DetailsScreen extends Component {
  static navigationOptions = {
    title: 'Pizza translator'
  };
  render() {
    return (
      <PizzaTranslator />
    );
  }
}
