import React, { Component } from 'react';
import { View, Text, TouchableNativeFeedback } from 'react-native';
import { styles } from './style';
import moment from 'moment';

export default class NotepadElement extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { navigate } = this.props.navigation;
    let [key, data] = this.props.data;
    data = JSON.parse(data);
    const dateOptions = {day: 'numeric', month: 'short'};//, weekday: undefined, year: undefined, hour: undefined, minute: undefined, second: undefined};

    let customColor = {};
    if (data.color) customColor.backgroundColor = data.color;

    return (
      <View style={[styles.element, customColor]}>
        <TouchableNativeFeedback
          onPress={() => navigate('TextEditor', {data: [key, data]} )}
          background={TouchableNativeFeedback.SelectableBackgroundBorderless()}
        >
          <View style={{flexDirection: 'row', alignItems: 'center', height: 45}}>
            <Text style={[styles.defaultText, {flex: 1}]}>{data.header}</Text>
            <Text style={{width: 80}}>{moment((data.lastChange) ? data.lastChange : +key).format('MMM Do')}</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
}
