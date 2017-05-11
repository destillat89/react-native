import React, { Component } from 'react';
import {
  View,
  TouchableHighlight,
  Text
} from 'react-native';
import { styles } from './style';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as calculatorActions from '../../actions/CalculatorActions';

class KeyboardButton extends Component {
  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
  }
  onPress() {
    //store.dispatch(calculate(this.props.text));
    this.props.calculatorActions.calculate(this.props.text);
  }
  render() {
    const additionalStyles = (this.props.addStyle) ? this.props.addStyle : {};
    return (
        <TouchableHighlight style={styles.keyboardButtonView} onPress={this.onPress} underlayColor='skyblue' activeOpacity={1}>
          <Text style={[styles.text, additionalStyles]}>{this.props.text}</Text>
        </TouchableHighlight>

    );
  }
}

function mapDispatchToProps(dispatch){
  return {
    calculatorActions: bindActionCreators(calculatorActions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(KeyboardButton);
