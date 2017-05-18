import React, { Component } from 'react';
import { View, TextInput, Text, AsyncStorage, Button } from 'react-native';
import { styles } from './style';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as editorActions from './actions';

import TopBarEditor from './TopBarEditor';


class ListEditor extends Component {
  static navigationOptions = ({navigation}) => ({
    header: (
    <TopBarEditor navigation={navigation} />
    )
  });

  constructor(props) {
    super(props);
    this._onTextChange = this._onTextChange.bind(this);

  }

  componentDidMount() {
    if (this.props.navigation.state.params.data) {
      this.props.editorActions.openNote(this.props.navigation.state.params.data);
    }
    else {
      this.props.editorActions.createNote();
    }
  }

  _onTextChange(text) {
    //this.setState({text: text});
    this.props.editorActions.changeText(text);
  }
  render() {
    return (
      <View style={[styles.main, {backgroundColor: 'orange'}]}>
          <TextInput
            style={[styles.defaultText, {flex: 10}, {textAlign: 'left', textAlignVertical: 'top', borderBottomWidth: 1}]}
            value={this.props.note.text}
            editable={this.props.note.editMode}
            onChangeText={this._onTextChange}
            multiline={true}
            returnKeyType='none'
          />
      </View>
    );
  }
}

function mapStateToProps(state){
  return {
    note: state.Editor
  };
}

function mapDispatchToProps(dispatch){
  return {
    editorActions: bindActionCreators(editorActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListEditor);
