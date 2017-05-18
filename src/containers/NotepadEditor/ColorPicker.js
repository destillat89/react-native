import React, { Component } from 'react';
import { Modal, TouchableWithoutFeedback, View, Text, TouchableHighlight} from 'react-native';
import { styles } from './style';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as editorActions from './actions';

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {modalVisible: false};
    this.setModalVisible = this.setModalVisible.bind(this);
  }
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  changeColor(color) {
    this.props.editorActions.changeColor(color);
  }
  render() {
    return (
      <View>
        <Modal
          animationType={"fade"} transparent={true} visible={this.state.modalVisible}
          onRequestClose={() => {this.setModalVisible(false)} }
        >
          <TouchableWithoutFeedback style={{flex: 1, justifyContent: 'center', alignItems: 'stretch'}} onPress={() => { this.setModalVisible(!this.state.modalVisible) }}>
            <View style={{flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)', justifyContent: 'center', alignItems: 'center'}}>
              <View style={styles.colorPicker}>
                <View style={styles.colorPickerRow} >
                  <TouchableHighlight onPress={() => { this.changeColor('red'); this.setModalVisible(!this.state.modalVisible) }}>
                    <View style={[styles.colorPickerItem, {backgroundColor: 'red'}]}></View>
                  </TouchableHighlight>
                  <TouchableHighlight onPress={() => { this.changeColor('orange'); this.setModalVisible(!this.state.modalVisible) }}>
                    <View style={[styles.colorPickerItem, {backgroundColor: 'orange'}]}></View>
                  </TouchableHighlight>
                  <TouchableHighlight onPress={() => { this.changeColor('yellow'); this.setModalVisible(!this.state.modalVisible) }}>
                    <View style={[styles.colorPickerItem, {backgroundColor: 'yellow'}]}></View>
                  </TouchableHighlight>
                </View>
                <View style={styles.colorPickerRow} >
                  <TouchableHighlight onPress={() => { this.changeColor('green'); this.setModalVisible(!this.state.modalVisible) }}>
                    <View style={[styles.colorPickerItem, {backgroundColor: 'green'}]}></View>
                  </TouchableHighlight>
                  <TouchableHighlight onPress={() => { this.changeColor('blue'); this.setModalVisible(!this.state.modalVisible) }}>
                    <View style={[styles.colorPickerItem, {backgroundColor: 'blue'}]}></View>
                  </TouchableHighlight>
                  <TouchableHighlight onPress={() => { this.changeColor('purple'); this.setModalVisible(!this.state.modalVisible) }}>
                    <View style={[styles.colorPickerItem, {backgroundColor: 'purple'}]}></View>
                  </TouchableHighlight>
                </View>
                <View style={styles.colorPickerRow} >
                  <TouchableHighlight onPress={() => { this.changeColor('black'); this.setModalVisible(!this.state.modalVisible) }}>
                    <View style={[styles.colorPickerItem, {backgroundColor: 'black'}]}></View>
                  </TouchableHighlight>
                  <TouchableHighlight onPress={() => { this.changeColor('grey'); this.setModalVisible(!this.state.modalVisible) }}>
                    <View style={[styles.colorPickerItem, {backgroundColor: 'grey'}]}></View>
                  </TouchableHighlight>
                  <TouchableHighlight onPress={() => { this.changeColor('white'); this.setModalVisible(!this.state.modalVisible) }}>
                    <View style={[styles.colorPickerItem, {backgroundColor: 'white'}]}></View>
                  </TouchableHighlight>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
        <TouchableHighlight onPress={() => { this.setModalVisible(true) }}>
          <View style={{width: 40, height: 40, backgroundColor: this.props.note.color}}>
          </View>
        </TouchableHighlight>
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

export default connect(mapStateToProps, mapDispatchToProps)(ColorPicker);
