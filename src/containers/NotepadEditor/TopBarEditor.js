import React, { Component } from 'react';
import { View, Button, Text, TextInput, AsyncStorage, TouchableNativeFeedback, Image, TouchableHighlight, Picker, Modal, TouchableWithoutFeedback } from 'react-native';
import { styles } from './style';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as editorActions from './actions';
import * as notepadActions from '../Notepad/actions';

import ModalDropdown from 'react-native-modal-dropdown';
import ColorPicker from './ColorPicker';


class TopBarEditor extends Component {
  constructor(props) {
    super(props);
    this._saveData = this._saveData.bind(this);
    this._onHeaderChange = this._onHeaderChange.bind(this);
    this._onEditModeChange = this._onEditModeChange.bind(this);
    this._dropdown_renderRow = this._dropdown_renderRow.bind(this);
    this._deleteNote = this._deleteNote.bind(this);
  }
  _saveData() {
    //this.props.editorActions.saveNote(this.props.note);
    let noteState = this.props.note;
    let {key} = noteState;
    if (!key) key = ''+Date.now();
    let data = {header: (noteState.header ? noteState.header : noteState.text), text: noteState.text, lastChange: Date.now(), color: noteState.color};
    //try {
    AsyncStorage.setItem(key, JSON.stringify(data), () => {
      this.props.notepadActions.getDataSource();
      this.props.navigation.goBack();
    });
  }
  _onEditModeChange() {
    this.props.editorActions.changeMode();
  }
  _onHeaderChange(text) {
    this.props.editorActions.changeHeader(text);
  }
  _deleteNote() {
    let noteState = this.props.note;
    let {key} = noteState;

    if (!key) {alert('A new note can not be deleted'); return;}
    // let data = {header: (noteState.header ? noteState.header : noteState.text), text: noteState.text};
    //try {
    AsyncStorage.removeItem(key, () => {
      this.props.notepadActions.getDataSource();
      this.props.navigation.goBack();
    });
  }
  render() {
    const MENU_ITEMS = [
      {header: 'Delete', icon: require('../../../img/ic_cancel_black_36dp.png'), action: this._deleteNote},
      {header: 'Close', icon: require('../../../img/ic_check_black_36dp.png'), action: undefined}
    ];

    let headerElement, editModeButton;
    if (this.props.note.editMode) {
      headerElement = (
        <TextInput
          style={[styles.defaultText, {flex: 1}]}
          value={this.props.note.header}
          onChangeText={this._onHeaderChange}
          autoFocus={this.props.note.editMode}
        />
      );
      editModeButton = (
        <View style={{flexDirection: 'row'}}>
          <TouchableNativeFeedback
            onPress={this._saveData}
            background={TouchableNativeFeedback.SelectableBackgroundBorderless()}
          >
            <View>
              <Image source={require('../../../img/ic_save_black_36dp.png')} />
            </View>
          </TouchableNativeFeedback>
          <ColorPicker />
        </View>
      );
    }
    else {
      headerElement = (
        <Text style={[styles.defaultText, {flex: 1}]}>
          {this.props.note.header}
        </Text>
      );
      editModeButton = (
        <TouchableNativeFeedback
          onPress={this._onEditModeChange}
          background={TouchableNativeFeedback.SelectableBackgroundBorderless()}
        >
          <View>
            <Image source={require('../../../img/ic_edit_black_36dp.png')} />
          </View>
        </TouchableNativeFeedback>
      );
    }

    return (
      <View style={{flexDirection: 'row', alignItems: 'center', height: 50, padding: 5, backgroundColor: 'white'}}>
        <View style={{flex: 7}}>
          {headerElement}
        </View>
        <View style={{flex: 3, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end'}}>
          {editModeButton}




          <ModalDropdown
            options={MENU_ITEMS}
            renderRow={this._dropdown_renderRow}
            onSelect={(ind, value) => {if (value.action) value.action()}}
          >
            <Image source={require('../../../img/ic_more_vert_black_36dp.png')} />
          </ModalDropdown>


        </View>
      </View>
    );
  }


  _dropdown_renderRow(rowData, rowID, highlighted) {
    //let icon = highlighted ? require('../../../img/ic_add_circle_black_36dp.png') : require('../../../img/ic_search_black_36dp.png');
    // let evenRow = rowID % 2;
    return (
      <TouchableHighlight onPress={() => (alert(rowData.header))}>
        <View style={{width: 150, flexDirection: 'row', alignItems: 'center'}}>
          <Image source={rowData.icon} />
          <Text style={styles.defaultText}>
            {rowData.header}
          </Text>
        </View>
      </TouchableHighlight>
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
    editorActions: bindActionCreators(editorActions, dispatch),
    notepadActions: bindActionCreators(notepadActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopBarEditor);
