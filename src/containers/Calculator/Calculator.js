import React, { Component } from 'react';
import {View} from 'react-native';
import Keyboard from './Keyboard';
import Monitor from './Monitor';
import { styles } from './style';


export default class Calculator extends Component {
  constructor(props){
    super(props);
    //this.state = {input: 'input', output: 'output'};
  }
  render() {
    return (
      <View style={styles.main}>
        <Monitor />
        <Keyboard />
      </View>
    );
  }
}
