Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./../../node_modules/react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactNative = require('react-native');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  PizzaTranslator: {
    displayName: 'PizzaTranslator'
  }
};

var _node_modulesReactTransformHmrLibIndexJs2 = (0, _index2.default)({
  filename: '/var/www/react-native/test/src/components/PizzaTranslator.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _node_modulesReactTransformHmrLibIndexJs2(Component, id);
  };
}

var PizzaTranslator = _wrapComponent('PizzaTranslator')(function (_Component) {
  _inherits(PizzaTranslator, _Component);

  function PizzaTranslator(props) {
    _classCallCheck(this, PizzaTranslator);

    var _this = _possibleConstructorReturn(this, (PizzaTranslator.__proto__ || Object.getPrototypeOf(PizzaTranslator)).call(this, props));

    _this.state = { text: '' };
    _this.onTextChange = _this.onTextChange.bind(_this);
    return _this;
  }

  _createClass(PizzaTranslator, [{
    key: 'onTextChange',
    value: function onTextChange(text) {
      this.setState({ text: text });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react3.default.createElement(
        _reactNative.View,
        { style: { padding: 10 } },
        _react3.default.createElement(_reactNative.TextInput, {
          style: { height: 40 },
          placeholder: 'Type your text here',
          onChangeText: this.onTextChange }),
        _react3.default.createElement(
          _reactNative.Text,
          { style: { padding: 10, fontSize: 42 } },
          this.state.text.split(' ').map(function (word) {
            return word && '🍕';
          }).join(' ')
        )
      );
    }
  }]);

  return PizzaTranslator;
}(_react2.Component));

exports.default = PizzaTranslator;