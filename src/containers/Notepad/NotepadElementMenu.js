import React, { Component } from 'react';
import { Modal, TouchableWithoutFeedback, View, Text, TouchableHighlight, Image, TouchableNativeFeedback} from 'react-native';
import { styles } from './style';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as notepadActions from './actions';
import * as editorActions from '../NotepadEditor/actions';

class NotepadElementMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {modalVisible: false};
    // this.setModalVisible = this.setModalVisible.bind(this);
  }
  // setModalVisible(visible) {
  //   this.setState({modalVisible: visible});
  // }
  componentWillReceiveProps(nextProps) {
    if (!nextProps.note.opened) {
      this.props.notepadActions.setElementMenuVisibility(false);
      this.props.notepadActions.getDataSource();

      // this.setState(modalVisible: false);
      // this.props.notepadActions.getDataSource();
      // this.props.navigation.goBack();
    }
    // if (nextProps.note.completed !== this.props.note.completed) {
    //   this.props.editorActions.saveNote(nextProps.note);
    // }
  }
  render() {
    return (
      <View>
        <Modal
          animationType={"fade"} transparent={true} visible={this.props.elementMenuVisible}
          onRequestClose={() => {this.props.editorActions.closeNote() } }
        >
          <TouchableWithoutFeedback style={{flex: 1, justifyContent: 'center', alignItems: 'stretch'}} onPress={() => { this.props.editorActions.closeNote() }}>
            <View style={{flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)', justifyContent: 'center', alignItems: 'center'}}>
              <View style={styles.noteTypePicker}>
                <View style={[styles.noteTypePickerItem, {borderTopWidth: 0, borderBottomWidth: 2, borderBottomColor: 'skyblue'}]}>
                  <Text style={[styles.defaultText, {color: 'skyblue'}]}>Edit note</Text>
                </View>
                <TouchableNativeFeedback
                  background={TouchableNativeFeedback.SelectableBackground()}
                  onPress={() => { this.props.editorActions.saveNote(Object.assign({}, this.props.note, {completed: !this.props.note.completed}));  }}
                >
                  <View style={[styles.noteTypePickerItem, {borderTopWidth: 0}]}>
                    <Text style={styles.defaultText}>Complete</Text>
                  </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback
                  background={TouchableNativeFeedback.SelectableBackground()}
                  onPress={() => { this.props.editorActions.deleteNote(this.props.note) }}
                >
                  <View style={styles.noteTypePickerItem}>
                    <Text style={styles.defaultText}>Delete</Text>
                  </View>
                </TouchableNativeFeedback>

              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>

      </View>
    );
  }
}

function mapStateToProps(state){
  return {
    elementMenuVisible: state.Notepad.elementMenuVisible,
    note: state.Editor
  };
}

function mapDispatchToProps(dispatch){
  return {
    notepadActions: bindActionCreators(notepadActions, dispatch),
    editorActions: bindActionCreators(editorActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotepadElementMenu);
