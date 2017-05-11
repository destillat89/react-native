import React, { Component } from 'react';
import {View, Text} from 'react-native';

export default class DetailsScreen extends Component {
  static navigationOptions = {
    title: 'Information'
  };
  render() {
    return (
      <View>
        <Text style={{fontSize:30}}>Test application by Sergey Kotov</Text>
      </View>
    );
  }
}
