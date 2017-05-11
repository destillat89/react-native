import React, { Component } from 'react';
import {
  View,
  TextInput,
  Text
} from 'react-native';

export default class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
    this.onTextChange = this.onTextChange.bind(this);
  }
  onTextChange(text) {
    this.setState({text});
  }
  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder='Type your text here'
          onChangeText={this.onTextChange} />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>
    );
  }
}
