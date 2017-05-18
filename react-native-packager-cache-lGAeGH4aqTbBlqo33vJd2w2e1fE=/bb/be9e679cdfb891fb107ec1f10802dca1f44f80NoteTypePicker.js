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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  NoteTypePicker: {
    displayName: 'NoteTypePicker'
  }
};

var _node_modulesReactTransformHmrLibIndexJs2 = (0, _index2.default)({
  filename: '/var/www/react-native/test/src/components/notepad/NoteTypePicker.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _node_modulesReactTransformHmrLibIndexJs2(Component, id);
  };
}

var NoteTypePicker = _wrapComponent('NoteTypePicker')(function (_Component) {
  _inherits(NoteTypePicker, _Component);

  function NoteTypePicker(props) {
    _classCallCheck(this, NoteTypePicker);

    var _this = _possibleConstructorReturn(this, (NoteTypePicker.__proto__ || Object.getPrototypeOf(NoteTypePicker)).call(this, props));

    _this.state = { modalVisible: false };
    _this.setModalVisible = _this.setModalVisible.bind(_this);
    return _this;
  }

  _createClass(NoteTypePicker, [{
    key: 'setModalVisible',
    value: function setModalVisible(visible) {
      this.setState({ modalVisible: visible });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var navigation = this.props.navigation;
      return _react3.default.createElement(
        _reactNative.View,
        null,
        _react3.default.createElement(
          _reactNative.Modal,
          {
            animationType: "fade", transparent: true, visible: this.state.modalVisible,
            onRequestClose: function onRequestClose() {
              _this2.setModalVisible(false);
            }
          },
          _react3.default.createElement(
            _reactNative.TouchableWithoutFeedback,
            { style: { flex: 1, justifyContent: 'center', alignItems: 'stretch' }, onPress: function onPress() {
                _this2.setModalVisible(!_this2.state.modalVisible);
              } },
            _react3.default.createElement(
              _reactNative.View,
              { style: { flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)', justifyContent: 'center', alignItems: 'center' } },
              _react3.default.createElement(
                _reactNative.View,
                { style: _style.styles.noteTypePicker },
                _react3.default.createElement(
                  _reactNative.View,
                  { style: [_style.styles.noteTypePickerItem, { borderTopWidth: 0, borderBottomWidth: 2, borderBottomColor: 'skyblue' }] },
                  _react3.default.createElement(
                    _reactNative.Text,
                    { style: [_style.styles.defaultText, { color: 'skyblue' }] },
                    'Add a new note'
                  )
                ),
                _react3.default.createElement(
                  _reactNative.TouchableNativeFeedback,
                  {
                    background: _reactNative.TouchableNativeFeedback.SelectableBackground(),
                    onPress: function onPress() {
                      _this2.setModalVisible(!_this2.state.modalVisible);navigation.navigate('TextEditor', { data: undefined });
                    }
                  },
                  _react3.default.createElement(
                    _reactNative.View,
                    { style: [_style.styles.noteTypePickerItem, { borderTopWidth: 0 }] },
                    _react3.default.createElement(
                      _reactNative.Text,
                      { style: _style.styles.defaultText },
                      'Text'
                    )
                  )
                ),
                _react3.default.createElement(
                  _reactNative.TouchableNativeFeedback,
                  {
                    background: _reactNative.TouchableNativeFeedback.SelectableBackground(),
                    onPress: function onPress() {
                      _this2.setModalVisible(!_this2.state.modalVisible);navigation.navigate('ListEditor', { data: undefined });
                    }
                  },
                  _react3.default.createElement(
                    _reactNative.View,
                    { style: _style.styles.noteTypePickerItem },
                    _react3.default.createElement(
                      _reactNative.Text,
                      { style: _style.styles.defaultText },
                      'Check list'
                    )
                  )
                )
              )
            )
          )
        ),
        _react3.default.createElement(
          _reactNative.TouchableNativeFeedback,
          {
            background: _reactNative.TouchableNativeFeedback.SelectableBackgroundBorderless(),
            onPress: function onPress() {
              _this2.setModalVisible(true);
            }
          },
          _react3.default.createElement(
            _reactNative.View,
            { style: { marginLeft: 5, marginRight: 5 } },
            _react3.default.createElement(_reactNative.Image, { source: require('../../../img/ic_add_circle_black_36dp.png') })
          )
        )
      );
    }
  }]);

  return NoteTypePicker;
}(_react2.Component));

exports.default = NoteTypePicker;