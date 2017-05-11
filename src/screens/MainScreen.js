import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  ListView,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Animated,
  PanResponder,
  LayoutAnimation,
  Button
} from 'react-native';
import FadeInView from '../components/FadeInView';


export default class MainScreen extends Component {
  static navigationOptions = {
    title: 'Main'
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <TestComponent />
        <Button
          onPress={() => navigate('Details', {data: 'Test page'})}
          title='Details'
        />
      </View>
    );
  }
}

class TestComponent extends Component {
  render() {
    // let pic = {
    //   uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    // };
    // return (
    //   <View style={{flex: 1}}>
    //     <View style={{flex: 1, backgroundColor: 'green'}} />
    //     <View style={[styles.container, {flex: 2, backgroundColor: 'orange'}]}>
    //       <Text style={[styles.welcome, styles.red]}>
    //         Welcome to React Native!
    //       </Text>
    //       <Greeting name="Bob" />
    //       <Greeting name="Fedor" />
    //       <Blink text="i love to blink"/>
    //       <Image source={pic} style={styles.image}/>
    //     </View>
    //   </View>
    // );
    return (
      <View style={{flex: 1}}>
        <TouchableComponent />
      </View>
    );
  }
}

class TouchableComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {count: 0, longCount: 0};
    this.onPressButton = this.onPressButton.bind(this);
    this.onLongPressButton = this.onLongPressButton.bind(this);
  }
  onPressButton() {
    this.setState({count: ++this.state.count});
  }
  onLongPressButton() {
    this.setState({longCount: ++this.state.longCount});
  }
  render() {
    return (
      <View>
        <FadeInView style={{height: 100, width: 200, backgroundColor: 'blue'}}>
          <TouchableOpacity onPress={this.onPressButton} onLongPress={this.onLongPressButton} style={{height: 50, backgroundColor: '#FF0F0F'}}>
            <Text style={{fontSize: 30}}>Button {this.state.count} {this.state.longCount}</Text>
          </TouchableOpacity>
        </FadeInView>
        <DraggableView>
          <Text style={{fontSize: 30}}>Drag me</Text>
        </DraggableView>
        <LayoutAnimatedView />
      </View>
    );
  }
}

class LayoutAnimatedView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      w: 100, h: 100
    };
    this._onPress = this._onPress.bind(this);
  }
  componentDidMount() {
    LayoutAnimation.spring();
  }
  _onPress() {
    LayoutAnimation.spring();
    this.setState({w: this.state.w+15, h: this.state.h+15});
  }
  render() {
    return (
      <View>
        <TouchableOpacity onPress={this._onPress}>
          <Text style={{width: this.state.w, height: this.state.h, backgroundColor: '#7777EE', fontSize: 30}}>Push me</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

class DraggableView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pan: new Animated.ValueXY(), // inits to zero
    };
    this.state.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, {
        dx: this.state.pan.x, // x,y are Animated.Value
        dy: this.state.pan.y,
      }]),
      onPanResponderRelease: () => {
        Animated.spring( this.state.pan,  // Auto-multiplexed
          {toValue: {x: 0, y: 0}} // Back to zero
        ).start();
      },
    });
  }
  render() {
    return (
      <Animated.View {...this.state.panResponder.panHandlers} style={this.state.pan.getLayout()}>
        {this.props.children}
      </Animated.View>
    );
  }
}


class ListViewBasics extends Component {
  constructor(props) {
    super(props);
    //const movies = this.getListOfMovies();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      movies: ds.cloneWithRows([]
        // [
        // 'Jim', 'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin', 'Bob', 'Jessie', 'Mike'
        // ]
      )
    }
  }
  componentDidMount(){
    this.getListOfMovies();
    //this.setState({movies: this.getListOfMovies()});
  }
  getListOfMovies() {
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
        //return responseJson.movies;
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({movies: ds.cloneWithRows(responseJson.movies)});
      })
      .catch((error) => {
        return console.error(error);
      })
  }
  render() {
    return (
      <View style={{paddingTop: 22}}>
        <ListView
          dataSource={this.state.movies}
          renderRow={(rowData) => {
            return (<View>
              <Text style={styles.welcome}>{rowData.title}</Text>
              <Text style={styles.red}>{rowData.releaseYear}</Text>
            </View>);
          }}
        />
      </View>
    );
  }
}



class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
  render() {
      return (
        <ScrollView>
        <Text style={{fontSize:96}}>Scroll me plz</Text>

        <Text style={{fontSize:80}}>React Native</Text>
        </ScrollView>
    );
  }
}

class Greeting extends Component {
  render() {
    return (
      <Text style={styles.welcome}>
        Hello, {this.props.name}!
      </Text>
    )
  }
}

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {showText: true};

    // setInterval(() => {
    //   this.setState({showText: !this.state.showText});
    // }, 1000);
  }
  render() {
    return (
      <Text style={styles.red}>
        {this.state.showText ? this.props.text : ' '}
      </Text>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 20,
    color: '#0000FF'
  },
  red: {
    color: '#FF0000'
  },
  image: {
    width: 193,
    height: 110
  }
});
