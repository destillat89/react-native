Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./../../../node_modules/react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactNative = require('react-native');

var _style = require('./style');

var _KeyboardButton = require('./KeyboardButton');

var _KeyboardButton2 = _interopRequireDefault(_KeyboardButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  Keyboard: {
    displayName: 'Keyboard'
  }
};

var _node_modulesReactTransformHmrLibIndexJs2 = (0, _index2.default)({
  filename: '/var/www/react-native/test/src/containers/Calculator/Keyboard.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _node_modulesReactTransformHmrLibIndexJs2(Component, id);
  };
}

var Keyboard = _wrapComponent('Keyboard')(function (_Component) {
  _inherits(Keyboard, _Component);

  function Keyboard(props) {
    _classCallCheck(this, Keyboard);

    return _possibleConstructorReturn(this, (Keyboard.__proto__ || Object.getPrototypeOf(Keyboard)).call(this, props));
  }

  _createClass(Keyboard, [{
    key: 'render',
    value: function render() {
      return _react3.default.createElement(
        _reactNative.View,
        { style: _style.styles.keyboard },
        _react3.default.createElement(
          _reactNative.View,
          { style: _style.styles.keyboardRow },
          _react3.default.createElement(_KeyboardButton2.default, { text: 'C', addStyle: _style.styles.operationColor }),
          _react3.default.createElement(_KeyboardButton2.default, { text: '/', addStyle: _style.styles.operationColor }),
          _react3.default.createElement(_KeyboardButton2.default, { text: '*', addStyle: _style.styles.operationColor }),
          _react3.default.createElement(_KeyboardButton2.default, { text: '<', addStyle: _style.styles.operationColor })
        ),
        _react3.default.createElement(
          _reactNative.View,
          { style: _style.styles.keyboardRow },
          _react3.default.createElement(_KeyboardButton2.default, { text: '7' }),
          _react3.default.createElement(_KeyboardButton2.default, { text: '8' }),
          _react3.default.createElement(_KeyboardButton2.default, { text: '9' }),
          _react3.default.createElement(_KeyboardButton2.default, { text: '-', addStyle: _style.styles.operationColor })
        ),
        _react3.default.createElement(
          _reactNative.View,
          { style: _style.styles.keyboardRow },
          _react3.default.createElement(_KeyboardButton2.default, { text: '4' }),
          _react3.default.createElement(_KeyboardButton2.default, { text: '5' }),
          _react3.default.createElement(_KeyboardButton2.default, { text: '6' }),
          _react3.default.createElement(_KeyboardButton2.default, { text: '+', addStyle: _style.styles.operationColor })
        ),
        _react3.default.createElement(
          _reactNative.View,
          { style: _style.styles.keyboardRow },
          _react3.default.createElement(_KeyboardButton2.default, { text: '1' }),
          _react3.default.createElement(_KeyboardButton2.default, { text: '2' }),
          _react3.default.createElement(_KeyboardButton2.default, { text: '3' }),
          _react3.default.createElement(_KeyboardButton2.default, { text: '()', addStyle: _style.styles.operationColor })
        ),
        _react3.default.createElement(
          _reactNative.View,
          { style: _style.styles.keyboardRow },
          _react3.default.createElement(_KeyboardButton2.default, { text: '0' }),
          _react3.default.createElement(_KeyboardButton2.default, { text: '.' }),
          _react3.default.createElement(_KeyboardButton2.default, { text: '+-' }),
          _react3.default.createElement(_KeyboardButton2.default, { text: '=', addStyle: { color: 'green', fontSize: 60 } })
        )
      );
    }
  }]);

  return Keyboard;
}(_react2.Component));

exports.default = Keyboard;