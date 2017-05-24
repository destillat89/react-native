import React, { Component } from 'react';
import ReactNative, { View, TextInput, Text, AsyncStorage, Button, Image, ScrollView, Animated, NativeAnimatedModule } from 'react-native';
import { styles } from './style';
import { colors } from '../Notepad/style';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as editorActions from './actions';

import TopBarEditor from './TopBarEditor';



class TextEditor extends Component {
  static navigationOptions = ({navigation}) => ({
    header: (
    <TopBarEditor navigation={navigation} />
    )
  });

  constructor(props) {
    super(props);
    //this._saveData = this._saveData.bind(this);
    //this._onHeaderChange = this._onHeaderChange.bind(this);
    this._onTextChange = this._onTextChange.bind(this);
    this.state = {
      height: 0
    };

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
    // let array = [];
    // for (let ind = 0; ind <= ((Math.max(28, this.state.height)) / 28); ind++) {
    //   array.push(<View style={{height: 28, borderBottomWidth: 1, borderBottomColor: 'orange'}} key={ind} ></View>);
    // }


    return (
      <View style={{flex: 1, backgroundColor: colors[this.props.note.color].back}}>
        <AutoExpandingTextInputWithBackRows
          value={this.props.note.text}
          onChangeText={this._onTextChange}
          editable={this.props.note.editMode}
          borderBottomColor={colors[this.props.note.color].header}
        />
      </View>
    );
    // return (
    //   <ScrollView style={[styles.main, {backgroundColor: 'red'}]}>
    //     <View style={[styles.main, {paddingTop: 2}]}>
    //       {array}
    //
    //     </View>
    //
    //     <View style={[{position: 'absolute', top: 0, bottom: 0, left: 0, right: 0}, styles.main]}>
    //         <TextInput
    //           style={[styles.defaultText, {flex: 1}, {textAlign: 'left', textAlignVertical: 'top', borderBottomWidth: 1, lineHeight: 28},
    //                  {height: Math.max(28, this.state.height)}]}
    //           value={this.props.note.text}
    //           editable={this.props.note.editMode}
    //           onChangeText={this._onTextChange}
    //           multiline={true}
    //           underlineColorAndroid='transparent'
    //           autoCapitalize='sentences'
    //           onContentSizeChange={(event) => {
    //             this.setState({height: event.nativeEvent.contentSize.height});
    //           }}
    //         />
    //     </View>
    //   </ScrollView>
    // );
  }
}

// class AutoExpandingTextInput extends React.Component { constructor(props) { super(props); this.state = { text: 'React Native enables you to build world-class application experiences on native platforms using a consistent developer experience based on JavaScript and React. The focus of React Native is on developer efficiency across all the platforms you care about — learn once, write anywhere. Facebook uses React Native in multiple production apps and will continue investing in React Native.', height: 0, }; } render() { return ( <TextInput {...this.props} multiline={true} onContentSizeChange={(event) => { this.setState({height: event.nativeEvent.contentSize.height}); }} onChangeText={(text) => { this.setState({text}); }} style={[styles.default, {height: Math.max(35, this.state.height)}]} value={this.state.text} /> ); } }

// class AutoExpandingTextInput extends React.Component {
//   state: any;
//
//   constructor(props) {
//     super(props);
//     this.state = {text: this.props.text, height: 0, posY: 0};
//   }
//   render() {
//     let array = [];
//     for (let ind = 0; ind <= 20; ind++) {
//       array.push(<View style={{height: 28, borderBottomWidth: 1, borderBottomColor: 'orange'}} key={ind} ></View>);
//     }
//     return (
//       <ScrollView style={{flex: 1}}>
//       <View style={[styles.main, {justifyContent: 'flex-start'}]}
//
//       >
//         {array}
//
//       </View>
//
//       <View style={[{position: 'absolute', top: 0, bottom: 0, left: 0, right: 0}, {flex: 1}]}>
//
//         <TextInput
//           {...this.props}
//           multiline={true}
//           onChange={(event) => {
//             this.setState({
//               text: event.nativeEvent.text
//             });
//           }}
//           onLayout={(event) => {
//             this.setState({
//               height: event.nativeEvent.layout.height
//               //posY: event.nativeEvent.layout.y
//             });
//           }}
//           onScroll={(event) => {
//             this.setState({
//               posY: event.nativeEvent.contentOffset.y
//             });
//           }}
//           underlineColorAndroid='transparent'
//           style={[styles.defaultText, {flex: 1}, {textAlign: 'left', textAlignVertical: 'top', borderBottomWidth: 1, lineHeight: 28}, {height: Math.max(28, this.state.height)}]}
//           value={this.state.text}
//         />
//       </View>
//       </ScrollView>
//     );
//   }
// }
// class AutoExpandingTextInput extends React.Component {
//   state: any;
//
//   constructor(props) {
//     super(props);
//     this.state = {text: this.props.text, height: 0, posY: 0};
//   }
//   render() {
//     let array = [];
//     for (let ind = 0; ind <= 20; ind++) {
//       array.push(<View style={{height: 28, borderBottomWidth: 1, borderBottomColor: 'orange'}} key={ind} ></View>);
//     }
//     return (
//       <View style={{flex: 1}}>
//       <View style={[styles.main, {position: 'absolute', top: -(this.state.posY % 28), bottom: 0, left: 0, right: 0}, {justifyContent: 'flex-start'}]}
//
//       >
//         {array}
//
//       </View>
//
//       <View style={[{position: 'absolute', top: 0, bottom: 0, left: 0, right: 0}, {flex: 1}]}>
//
//         <TextInput
//           {...this.props}
//           multiline={true}
//           onChange={(event) => {
//             this.setState({
//               text: event.nativeEvent.text
//             });
//           }}
//           onLayout={(event) => {
//             this.setState({
//               height: event.nativeEvent.layout.height
//               //posY: event.nativeEvent.layout.y
//             });
//           }}
//           onScroll={(event) => {
//             this.setState({
//               posY: event.nativeEvent.contentOffset.y
//             });
//           }}
//           underlineColorAndroid='transparent'
//           style={[styles.defaultText, {flex: 1}, {textAlign: 'left', textAlignVertical: 'top', borderBottomWidth: 1, lineHeight: 28}, {height: Math.max(28, this.state.height)}]}
//           value={this.state.text}
//         />
//       </View>
//       </View>
//     );
//   }
// }

class AutoExpandingTextInputWithBackRows extends React.Component {
  state: any;

  constructor(props) {
    super(props);
    this.state = {text: this.props.text, height: 0, posY: 0};

  }

  componentWillMount() {
    this._animatedValue = new Animated.Value(0);
  }

  render() {
    let event = Animated.event([
        {
          nativeEvent: {
            contentOffset: {
              y: this._animatedValue
            }
          }
        }
      ],
      { useNativeDriver: true }
    );

    let interpolatedY = this._animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -1]
    });

    let array = [];
    //((Math.max(28, this.state.height)) / 28)
    for (let ind = 0; ind <= 50; ind++) {
      array.push(<View style={{height: 28, borderBottomWidth: 1, borderBottomColor: this.props.borderBottomColor}} key={ind} ></View>);
    }

    return (
      <View style={{flex: 1}}>
        <Animated.View
          ref={component => this._backView = component}
          style={[{transform: [{translateY: interpolatedY}]}, {paddingHorizontal: 5}]}

        >
          {array}
        </Animated.View>

        <View style={[{position: 'absolute', top: 0, bottom: 0, left: 0, right: 0}, {flex: 1}]}>

          <AnimatedTextInput
            {...this.props}
            multiline={true}

            onLayout={(event) => {
              this.setState({
                height: event.nativeEvent.layout.height
              });
            }}

            ref={component => this._textInput = component}
            autoCapitalize='sentences'
            onScroll={event}
            scrollEventThrottle={1}
            underlineColorAndroid='transparent'
            style={[styles.defaultText, {flex: 1}, {textAlign: 'left', textAlignVertical: 'top', borderBottomWidth: 1, lineHeight: 28}, {height: Math.max(28, this.state.height)}]}

            returnKeyType='done'
          />

        </View>
      </View>
    );
  }
}

class CustomTextInput extends Component {
  render () {
    return <TextInput {...this.props} />;
  }
}

const AnimatedTextInput = Animated.createAnimatedComponent(CustomTextInput);



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
