import React, { Component } from 'react';
import { View, Text, TouchableNativeFeedback } from 'react-native';
import { styles, colors } from './style';
import moment from 'moment';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as notepadActions from './actions';
import * as editorActions from '../NotepadEditor/actions';

class NotepadElement extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { navigate } = this.props.navigation;
    let [key, data] = this.props.data;
    data = JSON.parse(data);
    const dateOptions = {day: 'numeric', month: 'short'};//, weekday: undefined, year: undefined, hour: undefined, minute: undefined, second: undefined};

    let customColor = {};
    if (data.color) {
      customColor.backgroundColor = colors[data.color].back;
      customColor.borderLeftColor = colors[data.color].main;
      customColor.borderLeftWidth = 5;
    }

    return (
      <View style={[styles.element, {borderColor: 'silver'}]}>
        <TouchableNativeFeedback
          onPress={() => navigate('TextEditor', {data: [key, data]} )}
          onLongPress={() => {this.props.editorActions.openNote([key, data]); this.props.notepadActions.setElementMenuVisibility(true)}}
          background={TouchableNativeFeedback.SelectableBackgroundBorderless()}
        >
          <View style={[{flexDirection: 'row', alignItems: 'center', height: 56}, customColor]}>
            <Text style={[styles.defaultText, {flex: 1}, (data.completed ? styles.completedText : {})]}>{data.header}</Text>
            <Text style={{width: 80}}>{moment((data.lastChange) ? data.lastChange : +key).format('MMM Do')}</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
}



function mapDispatchToProps(dispatch){
  return {
    notepadActions: bindActionCreators(notepadActions, dispatch),
    editorActions: bindActionCreators(editorActions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(NotepadElement);
