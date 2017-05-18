import React, { Component } from 'react';
import {View, Text} from 'react-native';

export default class DetailsScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    title: 'jhh'//navigation.state.params.data
  });
  render() {
    //const {params} = this.props.navigation.state;
    return (
      <View>
        <Text style={{fontSize:30}}>details...</Text>
        
      </View>
    );
  }
}
