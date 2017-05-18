import React, { Component } from 'react';
import { View, ListView, AsyncStorage, Button, TouchableHighlight, Image, TouchableNativeFeedback, Text } from 'react-native';
import NotepadElement from './NotepadElement';
import TopBarNotepad from './TopBarNotepad';
import { styles } from './style';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as notepadActions from './actions';

import ModalDropdown from 'react-native-modal-dropdown';

class Notepad extends Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Notepad',
    headerRight: (
    <TopBarNotepad navigation={navigation}/>)
  });
  constructor(props) {
    super(props);
    //const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    //this.refreshDataSource = this.refreshDataSource.bind(this);
    // this.state = {
    //   NotepadDataSource: ds.cloneWithRows([
    //     'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
    //   ])
    // };
    // this.state = {
    //   data: []
    // };
    // this.state = {
    //   NotepadDataSource: ds.cloneWithRows([])
    // };
  }
  componentDidMount() {
    this.props.notepadActions.getDataSource();
    //this.refreshDataSource();
  }

  render() {

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    let dataSource = ds.cloneWithRows(this.props.data);
    return (
      <View style={styles.main}>
        <ListView
          dataSource={dataSource}
          enableEmptySections={true}
          renderRow={(rowData) => <NotepadElement data={rowData} navigation={this.props.navigation} />}
        />
      </View>
    );
  }
}


function mapStateToProps(state){
  return {
    data: state.Notepad.data
  };
}

function mapDispatchToProps(dispatch){
  return {
    notepadActions: bindActionCreators(notepadActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Notepad);
