import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import { styles } from './style';

import { connect } from 'react-redux';

class Monitor extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <View style={styles.monitor}>
        <Text style={styles.text}>{this.props.calculator.input}</Text>
        <Text style={[styles.text, styles.resultColor]}>{this.props.calculator.output}</Text>
      </View>
    );
  }
}

function mapStateToProps(state){
  return {
    calculator: state.Calculator
  };
}

export default connect(mapStateToProps)(Monitor);
