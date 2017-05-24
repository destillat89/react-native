Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./../../../node_modules/react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _class, _temp;

var _reactNative = require('react-native');

var _reactNative2 = _interopRequireDefault(_reactNative);

var _style = require('./style');

var _style2 = require('../Notepad/style');

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _actions = require('./actions');

var editorActions = _interopRequireWildcard(_actions);

var _TopBarEditor = require('./TopBarEditor');

var _TopBarEditor2 = _interopRequireDefault(_TopBarEditor);

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }newObj.default = obj;return newObj;
  }
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var _components = {
  TextEditor: {
    displayName: 'TextEditor'
  },
  AutoExpandingTextInputWithBackRows: {
    displayName: 'AutoExpandingTextInputWithBackRows'
  },
  CustomTextInput: {
    displayName: 'CustomTextInput'
  }
};

var _node_modulesReactTransformHmrLibIndexJs2 = (0, _index2.default)({
  filename: '/var/www/react-native/test/src/containers/NotepadEditor/TextEditor.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _node_modulesReactTransformHmrLibIndexJs2(Component, id);
  };
}

var TextEditor = _wrapComponent('TextEditor')((_temp = _class = function (_Component) {
  _inherits(TextEditor, _Component);

  function TextEditor(props) {
    _classCallCheck(this, TextEditor);

    var _this = _possibleConstructorReturn(this, (TextEditor.__proto__ || Object.getPrototypeOf(TextEditor)).call(this, props));

    _this._onTextChange = _this._onTextChange.bind(_this);
    _this.state = {
      height: 0
    };

    return _this;
  }

  _createClass(TextEditor, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.navigation.state.params.data) {
        this.props.editorActions.openNote(this.props.navigation.state.params.data);
      } else {
        this.props.editorActions.createNote();
      }
    }
  }, {
    key: '_onTextChange',
    value: function _onTextChange(text) {
      this.props.editorActions.changeText(text);
    }
  }, {
    key: 'render',
    value: function render() {

      return _react3.default.createElement(_reactNative.View, { style: { flex: 1, backgroundColor: _style2.colors[this.props.note.color].back } }, _react3.default.createElement(AutoExpandingTextInputWithBackRows, {
        value: this.props.note.text,
        onChangeText: this._onTextChange,
        editable: this.props.note.editMode,
        borderBottomColor: _style2.colors[this.props.note.color].header
      }));
    }
  }]);

  return TextEditor;
}(_react2.Component), _class.navigationOptions = function (_ref) {
  var navigation = _ref.navigation;
  return {
    header: _react3.default.createElement(_TopBarEditor2.default, { navigation: navigation })
  };
}, _temp));

var AutoExpandingTextInputWithBackRows = _wrapComponent('AutoExpandingTextInputWithBackRows')(function (_React$Component) {
  _inherits(AutoExpandingTextInputWithBackRows, _React$Component);

  function AutoExpandingTextInputWithBackRows(props) {
    _classCallCheck(this, AutoExpandingTextInputWithBackRows);

    var _this2 = _possibleConstructorReturn(this, (AutoExpandingTextInputWithBackRows.__proto__ || Object.getPrototypeOf(AutoExpandingTextInputWithBackRows)).call(this, props));

    _this2.state = { text: _this2.props.text, height: 0, posY: 0 };

    return _this2;
  }

  _createClass(AutoExpandingTextInputWithBackRows, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this._animatedValue = new _reactNative.Animated.Value(0);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var event = _reactNative.Animated.event([{
        nativeEvent: {
          contentOffset: {
            y: this._animatedValue
          }
        }
      }], { useNativeDriver: true });

      var interpolatedY = this._animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, -1]
      });

      var array = [];

      for (var ind = 0; ind <= 50; ind++) {
        array.push(_react3.default.createElement(_reactNative.View, { style: { height: 28, borderBottomWidth: 1, borderBottomColor: this.props.borderBottomColor }, key: ind }));
      }

      return _react3.default.createElement(_reactNative.View, { style: { flex: 1 } }, _react3.default.createElement(_reactNative.Animated.View, {
        ref: function ref(component) {
          return _this3._backView = component;
        },
        style: [{ transform: [{ translateY: interpolatedY }] }, { paddingHorizontal: 5 }]

      }, array), _react3.default.createElement(_reactNative.View, { style: [{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }, { flex: 1 }] }, _react3.default.createElement(AnimatedTextInput, _extends({}, this.props, {
        multiline: true,

        onLayout: function onLayout(event) {
          _this3.setState({
            height: event.nativeEvent.layout.height
          });
        },

        ref: function ref(component) {
          return _this3._textInput = component;
        },
        autoCapitalize: 'sentences',
        onScroll: event,
        scrollEventThrottle: 1,
        underlineColorAndroid: 'transparent',
        style: [_style.styles.defaultText, { flex: 1 }, { textAlign: 'left', textAlignVertical: 'top', borderBottomWidth: 1, lineHeight: 28 }, { height: Math.max(28, this.state.height) }],

        returnKeyType: 'done'
      }))));
    }
  }]);

  return AutoExpandingTextInputWithBackRows;
}(_react3.default.Component));

var CustomTextInput = _wrapComponent('CustomTextInput')(function (_Component2) {
  _inherits(CustomTextInput, _Component2);

  function CustomTextInput() {
    _classCallCheck(this, CustomTextInput);

    return _possibleConstructorReturn(this, (CustomTextInput.__proto__ || Object.getPrototypeOf(CustomTextInput)).apply(this, arguments));
  }

  _createClass(CustomTextInput, [{
    key: 'render',
    value: function render() {
      return _react3.default.createElement(_reactNative.TextInput, this.props);
    }
  }]);

  return CustomTextInput;
}(_react2.Component));

var AnimatedTextInput = _reactNative.Animated.createAnimatedComponent(CustomTextInput);

function mapStateToProps(state) {
  return {
    note: state.Editor
  };
}

function mapDispatchToProps(dispatch) {
  return {
    editorActions: (0, _redux.bindActionCreators)(editorActions, dispatch)
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(TextEditor);