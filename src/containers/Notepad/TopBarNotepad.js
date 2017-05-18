import React, { Component } from 'react';
import { View, TouchableHighlight, Image, TouchableNativeFeedback, Text } from 'react-native';
import { styles } from './style';

import ModalDropdown from 'react-native-modal-dropdown';
import NoteTypePicker from './NoteTypePicker';

export default class TopBarNotepad extends Component {
  constructor(props) {
    super(props);
    this._dropdown_renderRow = this._dropdown_renderRow.bind(this);
  }
  render() {
    const MENU_ITEMS = [
      {header: 'Sort', icon: require('../../../img/ic_sort_black_36dp.png'), action: undefined},
      {header: 'Search', icon: require('../../../img/ic_search_black_36dp.png'), action: undefined}
    ];

    const navigation = this.props.navigation;

    return (
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <NoteTypePicker navigation={navigation} />

        <TouchableNativeFeedback
          background={TouchableNativeFeedback.SelectableBackgroundBorderless()}
        >
          <View style={{marginLeft: 5, marginRight: 5}}>
            <Image source={require('../../../img/ic_search_black_36dp.png')} />
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback
          background={TouchableNativeFeedback.SelectableBackgroundBorderless()}
        >
          <View style={{marginLeft: 5, marginRight: 5}}>

            <ModalDropdown
              options={MENU_ITEMS}
              renderRow={this._dropdown_renderRow}
              onSelect={(ind, value) => {if (value.action) value.action()}}
            >
              <Image source={require('../../../img/ic_more_vert_black_36dp.png')} />
            </ModalDropdown>
          </View>
        </TouchableNativeFeedback>
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
