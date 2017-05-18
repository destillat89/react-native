import React, { Component } from 'react';
import {
  View,
  TouchableNativeFeedback,
  Text
} from 'react-native';
import { styles } from './style';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as calculatorActions from './actions';

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
        <TouchableNativeFeedback
          onPress={this.onPress}
          background={TouchableNativeFeedback.SelectableBackgroundBorderless()}
        >
          <View style={styles.keyboardButtonView}>
            <Text style={[styles.text, additionalStyles]}>{this.props.text}</Text>
          </View>
        </TouchableNativeFeedback>

    );
  }
}

function mapDispatchToProps(dispatch){
  return {
    calculatorActions: bindActionCreators(calculatorActions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(KeyboardButton);
