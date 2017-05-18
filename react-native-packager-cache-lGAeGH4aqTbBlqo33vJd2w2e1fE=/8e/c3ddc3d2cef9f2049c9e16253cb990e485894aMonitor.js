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

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  Monitor: {
    displayName: 'Monitor'
  }
};

var _node_modulesReactTransformHmrLibIndexJs2 = (0, _index2.default)({
  filename: '/var/www/react-native/test/src/components/calculator/Monitor.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _node_modulesReactTransformHmrLibIndexJs2(Component, id);
  };
}

var Monitor = _wrapComponent('Monitor')(function (_Component) {
  _inherits(Monitor, _Component);

  function Monitor(props) {
    _classCallCheck(this, Monitor);

    return _possibleConstructorReturn(this, (Monitor.__proto__ || Object.getPrototypeOf(Monitor)).call(this, props));
  }

  _createClass(Monitor, [{
    key: 'render',
    value: function render() {
      return _react3.default.createElement(
        _reactNative.View,
        { style: _style.styles.monitor },
        _react3.default.createElement(
          _reactNative.Text,
          { style: _style.styles.text },
          this.props.calculator.input
        ),
        _react3.default.createElement(
          _reactNative.Text,
          { style: [_style.styles.text, _style.styles.resultColor] },
          this.props.calculator.output
        )
      );
    }
  }]);

  return Monitor;
}(_react2.Component));

function mapStateToProps(state) {
  return {
    calculator: state.Calculator
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Monitor);