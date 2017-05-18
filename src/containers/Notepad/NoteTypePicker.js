import React, { Component } from 'react';
import { Modal, TouchableWithoutFeedback, View, Text, TouchableHighlight, Image, TouchableNativeFeedback} from 'react-native';
import { styles } from './style';

export default class NoteTypePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {modalVisible: false};
    this.setModalVisible = this.setModalVisible.bind(this);
  }
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  render() {
    const navigation = this.props.navigation;
    return (
      <View>
        <Modal
          animationType={"fade"} transparent={true} visible={this.state.modalVisible}
          onRequestClose={() => {this.setModalVisible(false)} }
        >
          <TouchableWithoutFeedback style={{flex: 1, justifyContent: 'center', alignItems: 'stretch'}} onPress={() => { this.setModalVisible(!this.state.modalVisible) }}>
            <View style={{flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)', justifyContent: 'center', alignItems: 'center'}}>
              <View style={styles.noteTypePicker}>
                <View style={[styles.noteTypePickerItem, {borderTopWidth: 0, borderBottomWidth: 2, borderBottomColor: 'skyblue'}]}>
                  <Text style={[styles.defaultText, {color: 'skyblue'}]}>Add a new note</Text>
                </View>
                <TouchableNativeFeedback
                  background={TouchableNativeFeedback.SelectableBackground()}
                  onPress={() => { this.setModalVisible(!this.state.modalVisible); navigation.navigate('TextEditor', {data: undefined}); }}
                >
                  <View style={[styles.noteTypePickerItem, {borderTopWidth: 0}]}>
                    <Text style={styles.defaultText}>Text</Text>
                  </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback
                  background={TouchableNativeFeedback.SelectableBackground()}
                  onPress={() => { this.setModalVisible(!this.state.modalVisible); navigation.navigate('ListEditor', {data: undefined}); }}
                >
                  <View style={styles.noteTypePickerItem}>
                    <Text style={styles.defaultText}>Check list</Text>
                  </View>
                </TouchableNativeFeedback>

              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
        <TouchableNativeFeedback
          background={TouchableNativeFeedback.SelectableBackgroundBorderless()}
          onPress={() => {this.setModalVisible(true); } }
        >
          <View style={{marginLeft: 5, marginRight: 5}}>
            <Image source={require('../../../img/ic_add_circle_black_36dp.png')} />
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
}
