Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./../../../node_modules/react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if ((typeof Symbol === 'function' ? Symbol.iterator : '@@iterator') in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactNative = require('react-native');

var _style = require('./style');

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  NotepadElement: {
    displayName: 'NotepadElement'
  }
};

var _node_modulesReactTransformHmrLibIndexJs2 = (0, _index2.default)({
  filename: '/var/www/react-native/test/src/components/notepad/NotepadElement.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _node_modulesReactTransformHmrLibIndexJs2(Component, id);
  };
}

var NotepadElement = _wrapComponent('NotepadElement')(function (_Component) {
  _inherits(NotepadElement, _Component);

  function NotepadElement(props) {
    _classCallCheck(this, NotepadElement);

    return _possibleConstructorReturn(this, (NotepadElement.__proto__ || Object.getPrototypeOf(NotepadElement)).call(this, props));
  }

  _createClass(NotepadElement, [{
    key: 'render',
    value: function render() {
      var navigate = this.props.navigation.navigate;

      var _props$data = _slicedToArray(this.props.data, 2),
          key = _props$data[0],
          data = _props$data[1];

      data = JSON.parse(data);
      var dateOptions = { day: 'numeric', month: 'short' };

      var customColor = {};
      if (data.color) customColor.backgroundColor = data.color;

      return _react3.default.createElement(
        _reactNative.View,
        { style: [_style.styles.element, customColor] },
        _react3.default.createElement(
          _reactNative.TouchableNativeFeedback,
          {
            onPress: function onPress() {
              return navigate('TextEditor', { data: [key, data] });
            },
            background: _reactNative.TouchableNativeFeedback.SelectableBackgroundBorderless()
          },
          _react3.default.createElement(
            _reactNative.View,
            { style: { flexDirection: 'row', alignItems: 'center', height: 45 } },
            _react3.default.createElement(
              _reactNative.Text,
              { style: [_style.styles.defaultText, { flex: 1 }] },
              data.header
            ),
            _react3.default.createElement(
              _reactNative.Text,
              { style: { width: 80 } },
              (0, _moment2.default)(data.lastChange ? data.lastChange : +key).format('MMM Do')
            )
          )
        )
      );
    }
  }]);

  return NotepadElement;
}(_react2.Component));

exports.default = NotepadElement;