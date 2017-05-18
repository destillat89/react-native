import React, { Component } from 'react';
import { View, TextInput, Text, AsyncStorage, Button } from 'react-native';
import { styles } from './style';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as editorActions from './actions';

import TopBarEditor from './TopBarEditor';

// import Menu, {
//   MenuContext,
//   MenuOptions,
//   MenuOption,
//   MenuTrigger
// } from 'react-native-menu';

class TextEditor extends Component {
  static navigationOptions = ({navigation}) => ({
    header: (
    <TopBarEditor navigation={navigation} />
    )
  });

  // <Button
  //   onPress={() => _saveData()}
  //   title='Save'
  //   style={{width: 50}}
  // />
  constructor(props) {
    super(props);
    //this._saveData = this._saveData.bind(this);
    //this._onHeaderChange = this._onHeaderChange.bind(this);
    this._onTextChange = this._onTextChange.bind(this);

    // const [key, data] = this.props.navigation.state.params.data;
    // this.state = {
    //   header: data.header,
    //   text: data.text
    // };
  }
  // _saveData() {
  //   this.props.editorActions.saveNote(this.props.note);
  //   this.props.navigation.goBack();
  // }
  // _saveData = async() => {
  //   let [key] = this.props.navigation.state.params.data;
  //   if (!key) key = ''+Date.now();
  //   let data = {header: (this.state.header ? this.state.header : this.state.text), text: this.state.text};
  //   //try {
  //     await AsyncStorage.setItem(key, JSON.stringify(data), () => {this.props.notepadActions.getDataSource(); this.props.navigation.goBack()});
  //     //alert('ok');
  //   // } catch (error) {
  //   //   console.log(error);
  //   //   alert('error');
  //   //   // alert(key);
  //   //    //alert('text '+data.text);
  //   //    //alert('header '+data.header);
  //   // }
  //   //AsyncStorage.setItem(key, data);//, () => this.props.navigation.goBack());
  // }
  componentDidMount() {
    if (this.props.navigation.state.params.data) {
      this.props.editorActions.openNote(this.props.navigation.state.params.data);
    }
    else {
      this.props.editorActions.createNote();
    }
  }
  // componentWillUnmount() {
  //   if (this.text) {
  //     this._saveData();
  //   }
  // }
  // _onHeaderChange(text) {
  //   this.setState({header: text});
  // }
  _onTextChange(text) {
    //this.setState({text: text});
    this.props.editorActions.changeText(text);
  }
  render() {
    return (
      <View style={styles.main}>
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

export default connect(mapStateToProps, mapDispatchToProps)(TextEditor);
