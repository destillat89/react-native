Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./../../../node_modules/react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _reactNative = require('react-native');

var _style = require('./style');

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _CalculatorActions = require('../../actions/CalculatorActions');

var calculatorActions = _interopRequireWildcard(_CalculatorActions);

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
  KeyboardButton: {
    displayName: 'KeyboardButton'
  }
};

var _node_modulesReactTransformHmrLibIndexJs2 = (0, _index2.default)({
  filename: '/var/www/react-native/test/src/components/calculator/KeyboardButton.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _node_modulesReactTransformHmrLibIndexJs2(Component, id);
  };
}

var KeyboardButton = _wrapComponent('KeyboardButton')(function (_Component) {
  _inherits(KeyboardButton, _Component);

  function KeyboardButton(props) {
    _classCallCheck(this, KeyboardButton);

    var _this = _possibleConstructorReturn(this, (KeyboardButton.__proto__ || Object.getPrototypeOf(KeyboardButton)).call(this, props));

    _this.onPress = _this.onPress.bind(_this);
    return _this;
  }

  _createClass(KeyboardButton, [{
    key: 'onPress',
    value: function onPress() {
      this.props.calculatorActions.calculate(this.props.text);
    }
  }, {
    key: 'render',
    value: function render() {
      var additionalStyles = this.props.addStyle ? this.props.addStyle : {};
      return _react3.default.createElement(_reactNative.TouchableNativeFeedback, {
        onPress: this.onPress,
        background: _reactNative.TouchableNativeFeedback.SelectableBackgroundBorderless()
      }, _react3.default.createElement(_reactNative.View, { style: _style.styles.keyboardButtonView }, _react3.default.createElement(_reactNative.Text, { style: [_style.styles.text, additionalStyles] }, this.props.text)));
    }
  }]);

  return KeyboardButton;
}(_react2.Component));

function mapDispatchToProps(dispatch) {
  return {
    calculatorActions: (0, _redux.bindActionCreators)(calculatorActions, dispatch)
  };
}

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(KeyboardButton);