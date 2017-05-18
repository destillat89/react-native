import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import { styles } from './style';
import KeyboardButton from './KeyboardButton';

export default class Keyboard extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <View style={styles.keyboard}>
        <View style={styles.keyboardRow}>
          <KeyboardButton text='C' addStyle={styles.operationColor}/>
          <KeyboardButton text='/' addStyle={styles.operationColor} />
          <KeyboardButton text='*' addStyle={styles.operationColor} />
          <KeyboardButton text='<' addStyle={styles.operationColor} />
        </View>
        <View style={styles.keyboardRow}>
          <KeyboardButton text='7' />
          <KeyboardButton text='8' />
          <KeyboardButton text='9' />
          <KeyboardButton text='-' addStyle={styles.operationColor} />
        </View>
        <View style={styles.keyboardRow}>
          <KeyboardButton text='4' />
          <KeyboardButton text='5' />
          <KeyboardButton text='6' />
          <KeyboardButton text='+' addStyle={styles.operationColor} />
        </View>
        <View style={styles.keyboardRow}>
          <KeyboardButton text='1' />
          <KeyboardButton text='2' />
          <KeyboardButton text='3' />
          <KeyboardButton text='()' addStyle={styles.operationColor} />
        </View>
        <View style={styles.keyboardRow}>
          <KeyboardButton text='0' />
          <KeyboardButton text='.' />
          <KeyboardButton text='+-' />
          <KeyboardButton text='=' addStyle={{color: 'green', fontSize: 60}} />
        </View>
      </View>
    );
  }
}
