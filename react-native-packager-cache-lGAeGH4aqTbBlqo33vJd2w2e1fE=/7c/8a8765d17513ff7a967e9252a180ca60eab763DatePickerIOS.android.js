

'use strict';

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./../../../../react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  DummyDatePickerIOS: {
    displayName: 'DummyDatePickerIOS'
  }
};

var _reactTransformHmrLibIndexJs2 = (0, _index2.default)({
  filename: '/var/www/react-native/test/node_modules/react-native/Libraries/Components/DatePicker/DatePickerIOS.android.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmrLibIndexJs2(Component, id);
  };
}

var React = require('React');
var StyleSheet = require('StyleSheet');
var Text = require('Text');
var View = require('View');

var DummyDatePickerIOS = _wrapComponent('DummyDatePickerIOS')(function (_React$Component) {
  _inherits(DummyDatePickerIOS, _React$Component);

  function DummyDatePickerIOS() {
    _classCallCheck(this, DummyDatePickerIOS);

    return _possibleConstructorReturn(this, (DummyDatePickerIOS.__proto__ || Object.getPrototypeOf(DummyDatePickerIOS)).apply(this, arguments));
  }

  _createClass(DummyDatePickerIOS, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        View,
        { style: [styles.dummyDatePickerIOS, this.props.style] },
        React.createElement(
          Text,
          { style: styles.datePickerText },
          'DatePickerIOS is not supported on this platform!'
        )
      );
    }
  }]);

  return DummyDatePickerIOS;
}(React.Component));

var styles = StyleSheet.create({
  dummyDatePickerIOS: {
    height: 100,
    width: 300,
    backgroundColor: '#ffbcbc',
    borderWidth: 1,
    borderColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10
  },
  datePickerText: {
    color: '#333333',
    margin: 20
  }
});

module.exports = DummyDatePickerIOS;