Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./../../node_modules/react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _reactNative = require('react-native');

var _FadeInView = require('../components/FadeInView');

var _FadeInView2 = _interopRequireDefault(_FadeInView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  MainScreen: {
    displayName: 'MainScreen'
  },
  TestComponent: {
    displayName: 'TestComponent'
  },
  TouchableComponent: {
    displayName: 'TouchableComponent'
  },
  LayoutAnimatedView: {
    displayName: 'LayoutAnimatedView'
  },
  DraggableView: {
    displayName: 'DraggableView'
  },
  ListViewBasics: {
    displayName: 'ListViewBasics'
  },
  IScrolledDownAndWhatHappenedNextShockedMe: {
    displayName: 'IScrolledDownAndWhatHappenedNextShockedMe'
  },
  Greeting: {
    displayName: 'Greeting'
  },
  Blink: {
    displayName: 'Blink'
  }
};

var _node_modulesReactTransformHmrLibIndexJs2 = (0, _index2.default)({
  filename: '/var/www/react-native/test/src/screens/MainScreen.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _node_modulesReactTransformHmrLibIndexJs2(Component, id);
  };
}

var MainScreen = _wrapComponent('MainScreen')((_temp = _class = function (_Component) {
  _inherits(MainScreen, _Component);

  function MainScreen() {
    _classCallCheck(this, MainScreen);

    return _possibleConstructorReturn(this, (MainScreen.__proto__ || Object.getPrototypeOf(MainScreen)).apply(this, arguments));
  }

  _createClass(MainScreen, [{
    key: 'render',
    value: function render() {
      var navigate = this.props.navigation.navigate;

      return _react3.default.createElement(
        _reactNative.View,
        { style: styles.container },
        _react3.default.createElement(TestComponent, null),
        _react3.default.createElement(_reactNative.Button, {
          onPress: function onPress() {
            return navigate('Details', { data: 'Test page' });
          },
          title: 'Details'
        })
      );
    }
  }]);

  return MainScreen;
}(_react2.Component), _class.navigationOptions = {
  title: 'Main'
}, _temp));

exports.default = MainScreen;

var TestComponent = _wrapComponent('TestComponent')(function (_Component2) {
  _inherits(TestComponent, _Component2);

  function TestComponent() {
    _classCallCheck(this, TestComponent);

    return _possibleConstructorReturn(this, (TestComponent.__proto__ || Object.getPrototypeOf(TestComponent)).apply(this, arguments));
  }

  _createClass(TestComponent, [{
    key: 'render',
    value: function render() {
      return _react3.default.createElement(
        _reactNative.View,
        { style: { flex: 1 } },
        _react3.default.createElement(TouchableComponent, null)
      );
    }
  }]);

  return TestComponent;
}(_react2.Component));

var TouchableComponent = _wrapComponent('TouchableComponent')(function (_Component3) {
  _inherits(TouchableComponent, _Component3);

  function TouchableComponent(props) {
    _classCallCheck(this, TouchableComponent);

    var _this3 = _possibleConstructorReturn(this, (TouchableComponent.__proto__ || Object.getPrototypeOf(TouchableComponent)).call(this, props));

    _this3.state = { count: 0, longCount: 0 };
    _this3.onPressButton = _this3.onPressButton.bind(_this3);
    _this3.onLongPressButton = _this3.onLongPressButton.bind(_this3);
    return _this3;
  }

  _createClass(TouchableComponent, [{
    key: 'onPressButton',
    value: function onPressButton() {
      this.setState({ count: ++this.state.count });
    }
  }, {
    key: 'onLongPressButton',
    value: function onLongPressButton() {
      this.setState({ longCount: ++this.state.longCount });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react3.default.createElement(
        _reactNative.View,
        null,
        _react3.default.createElement(
          _FadeInView2.default,
          { style: { height: 100, width: 200, backgroundColor: 'blue' } },
          _react3.default.createElement(
            _reactNative.TouchableOpacity,
            { onPress: this.onPressButton, onLongPress: this.onLongPressButton, style: { height: 50, backgroundColor: '#FF0F0F' } },
            _react3.default.createElement(
              _reactNative.Text,
              { style: { fontSize: 30 } },
              'Button ',
              this.state.count,
              ' ',
              this.state.longCount
            )
          )
        ),
        _react3.default.createElement(
          DraggableView,
          null,
          _react3.default.createElement(
            _reactNative.Text,
            { style: { fontSize: 30 } },
            'Drag me'
          )
        ),
        _react3.default.createElement(LayoutAnimatedView, null)
      );
    }
  }]);

  return TouchableComponent;
}(_react2.Component));

var LayoutAnimatedView = _wrapComponent('LayoutAnimatedView')(function (_Component4) {
  _inherits(LayoutAnimatedView, _Component4);

  function LayoutAnimatedView(props) {
    _classCallCheck(this, LayoutAnimatedView);

    var _this4 = _possibleConstructorReturn(this, (LayoutAnimatedView.__proto__ || Object.getPrototypeOf(LayoutAnimatedView)).call(this, props));

    _this4.state = {
      w: 100, h: 100
    };
    _this4._onPress = _this4._onPress.bind(_this4);
    return _this4;
  }

  _createClass(LayoutAnimatedView, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _reactNative.LayoutAnimation.spring();
    }
  }, {
    key: '_onPress',
    value: function _onPress() {
      _reactNative.LayoutAnimation.spring();
      this.setState({ w: this.state.w + 15, h: this.state.h + 15 });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react3.default.createElement(
        _reactNative.View,
        null,
        _react3.default.createElement(
          _reactNative.TouchableOpacity,
          { onPress: this._onPress },
          _react3.default.createElement(
            _reactNative.Text,
            { style: { width: this.state.w, height: this.state.h, backgroundColor: '#7777EE', fontSize: 30 } },
            'Push me'
          )
        )
      );
    }
  }]);

  return LayoutAnimatedView;
}(_react2.Component));

var DraggableView = _wrapComponent('DraggableView')(function (_Component5) {
  _inherits(DraggableView, _Component5);

  function DraggableView(props) {
    _classCallCheck(this, DraggableView);

    var _this5 = _possibleConstructorReturn(this, (DraggableView.__proto__ || Object.getPrototypeOf(DraggableView)).call(this, props));

    _this5.state = {
      pan: new _reactNative.Animated.ValueXY() };
    _this5.state.panResponder = _reactNative.PanResponder.create({
      onStartShouldSetPanResponder: function onStartShouldSetPanResponder() {
        return true;
      },
      onPanResponderMove: _reactNative.Animated.event([null, {
        dx: _this5.state.pan.x,
        dy: _this5.state.pan.y
      }]),
      onPanResponderRelease: function onPanResponderRelease() {
        _reactNative.Animated.spring(_this5.state.pan, { toValue: { x: 0, y: 0 } }).start();
      }
    });
    return _this5;
  }

  _createClass(DraggableView, [{
    key: 'render',
    value: function render() {
      return _react3.default.createElement(
        _reactNative.Animated.View,
        _extends({}, this.state.panResponder.panHandlers, { style: this.state.pan.getLayout() }),
        this.props.children
      );
    }
  }]);

  return DraggableView;
}(_react2.Component));

var ListViewBasics = _wrapComponent('ListViewBasics')(function (_Component6) {
  _inherits(ListViewBasics, _Component6);

  function ListViewBasics(props) {
    _classCallCheck(this, ListViewBasics);

    var _this6 = _possibleConstructorReturn(this, (ListViewBasics.__proto__ || Object.getPrototypeOf(ListViewBasics)).call(this, props));

    var ds = new _reactNative.ListView.DataSource({ rowHasChanged: function rowHasChanged(r1, r2) {
        return r1 !== r2;
      } });
    _this6.state = {
      movies: ds.cloneWithRows([])
    };
    return _this6;
  }

  _createClass(ListViewBasics, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.getListOfMovies();
    }
  }, {
    key: 'getListOfMovies',
    value: function getListOfMovies() {
      var _this7 = this;

      return fetch('https://facebook.github.io/react-native/movies.json').then(function (response) {
        return response.json();
      }).then(function (responseJson) {
        var ds = new _reactNative.ListView.DataSource({ rowHasChanged: function rowHasChanged(r1, r2) {
            return r1 !== r2;
          } });
        _this7.setState({ movies: ds.cloneWithRows(responseJson.movies) });
      }).catch(function (error) {
        return console.error(error);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react3.default.createElement(
        _reactNative.View,
        { style: { paddingTop: 22 } },
        _react3.default.createElement(_reactNative.ListView, {
          dataSource: this.state.movies,
          renderRow: function renderRow(rowData) {
            return _react3.default.createElement(
              _reactNative.View,
              null,
              _react3.default.createElement(
                _reactNative.Text,
                { style: styles.welcome },
                rowData.title
              ),
              _react3.default.createElement(
                _reactNative.Text,
                { style: styles.red },
                rowData.releaseYear
              )
            );
          }
        })
      );
    }
  }]);

  return ListViewBasics;
}(_react2.Component));

var IScrolledDownAndWhatHappenedNextShockedMe = _wrapComponent('IScrolledDownAndWhatHappenedNextShockedMe')(function (_Component7) {
  _inherits(IScrolledDownAndWhatHappenedNextShockedMe, _Component7);

  function IScrolledDownAndWhatHappenedNextShockedMe() {
    _classCallCheck(this, IScrolledDownAndWhatHappenedNextShockedMe);

    return _possibleConstructorReturn(this, (IScrolledDownAndWhatHappenedNextShockedMe.__proto__ || Object.getPrototypeOf(IScrolledDownAndWhatHappenedNextShockedMe)).apply(this, arguments));
  }

  _createClass(IScrolledDownAndWhatHappenedNextShockedMe, [{
    key: 'render',
    value: function render() {
      return _react3.default.createElement(
        _reactNative.ScrollView,
        null,
        _react3.default.createElement(
          _reactNative.Text,
          { style: { fontSize: 96 } },
          'Scroll me plz'
        ),
        _react3.default.createElement(
          _reactNative.Text,
          { style: { fontSize: 80 } },
          'React Native'
        )
      );
    }
  }]);

  return IScrolledDownAndWhatHappenedNextShockedMe;
}(_react2.Component));

var Greeting = _wrapComponent('Greeting')(function (_Component8) {
  _inherits(Greeting, _Component8);

  function Greeting() {
    _classCallCheck(this, Greeting);

    return _possibleConstructorReturn(this, (Greeting.__proto__ || Object.getPrototypeOf(Greeting)).apply(this, arguments));
  }

  _createClass(Greeting, [{
    key: 'render',
    value: function render() {
      return _react3.default.createElement(
        _reactNative.Text,
        { style: styles.welcome },
        'Hello, ',
        this.props.name,
        '!'
      );
    }
  }]);

  return Greeting;
}(_react2.Component));

var Blink = _wrapComponent('Blink')(function (_Component9) {
  _inherits(Blink, _Component9);

  function Blink(props) {
    _classCallCheck(this, Blink);

    var _this10 = _possibleConstructorReturn(this, (Blink.__proto__ || Object.getPrototypeOf(Blink)).call(this, props));

    _this10.state = { showText: true };

    return _this10;
  }

  _createClass(Blink, [{
    key: 'render',
    value: function render() {
      return _react3.default.createElement(
        _reactNative.Text,
        { style: styles.red },
        this.state.showText ? this.props.text : ' '
      );
    }
  }]);

  return Blink;
}(_react2.Component));

var styles = _reactNative.StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    backgroundColor: '#F5FCFF'
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