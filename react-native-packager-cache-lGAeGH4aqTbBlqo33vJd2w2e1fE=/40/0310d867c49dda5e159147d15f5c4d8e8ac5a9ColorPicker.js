Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./../../../../node_modules/react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactNative = require('react-native');

var _style = require('../style');

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _actions = require('./actions');

var editorActions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  ColorPicker: {
    displayName: 'ColorPicker'
  }
};

var _node_modulesReactTransformHmrLibIndexJs2 = (0, _index2.default)({
  filename: '/var/www/react-native/test/src/containers/Notepad/Editor/ColorPicker.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _node_modulesReactTransformHmrLibIndexJs2(Component, id);
  };
}

var ColorPicker = _wrapComponent('ColorPicker')(function (_Component) {
  _inherits(ColorPicker, _Component);

  function ColorPicker(props) {
    _classCallCheck(this, ColorPicker);

    var _this = _possibleConstructorReturn(this, (ColorPicker.__proto__ || Object.getPrototypeOf(ColorPicker)).call(this, props));

    _this.state = { modalVisible: false };
    _this.setModalVisible = _this.setModalVisible.bind(_this);
    return _this;
  }

  _createClass(ColorPicker, [{
    key: 'setModalVisible',
    value: function setModalVisible(visible) {
      this.setState({ modalVisible: visible });
    }
  }, {
    key: 'changeColor',
    value: function changeColor(color) {
      this.props.editorActions.changeColor(color);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

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
                { style: _style.styles.colorPicker },
                _react3.default.createElement(
                  _reactNative.View,
                  { style: _style.styles.colorPickerRow },
                  _react3.default.createElement(
                    _reactNative.TouchableHighlight,
                    { onPress: function onPress() {
                        _this2.changeColor('red');_this2.setModalVisible(!_this2.state.modalVisible);
                      } },
                    _react3.default.createElement(_reactNative.View, { style: [_style.styles.colorPickerItem, { backgroundColor: 'red' }] })
                  ),
                  _react3.default.createElement(
                    _reactNative.TouchableHighlight,
                    { onPress: function onPress() {
                        _this2.changeColor('orange');_this2.setModalVisible(!_this2.state.modalVisible);
                      } },
                    _react3.default.createElement(_reactNative.View, { style: [_style.styles.colorPickerItem, { backgroundColor: 'orange' }] })
                  ),
                  _react3.default.createElement(
                    _reactNative.TouchableHighlight,
                    { onPress: function onPress() {
                        _this2.changeColor('yellow');_this2.setModalVisible(!_this2.state.modalVisible);
                      } },
                    _react3.default.createElement(_reactNative.View, { style: [_style.styles.colorPickerItem, { backgroundColor: 'yellow' }] })
                  )
                ),
                _react3.default.createElement(
                  _reactNative.View,
                  { style: _style.styles.colorPickerRow },
                  _react3.default.createElement(
                    _reactNative.TouchableHighlight,
                    { onPress: function onPress() {
                        _this2.changeColor('green');_this2.setModalVisible(!_this2.state.modalVisible);
                      } },
                    _react3.default.createElement(_reactNative.View, { style: [_style.styles.colorPickerItem, { backgroundColor: 'green' }] })
                  ),
                  _react3.default.createElement(
                    _reactNative.TouchableHighlight,
                    { onPress: function onPress() {
                        _this2.changeColor('blue');_this2.setModalVisible(!_this2.state.modalVisible);
                      } },
                    _react3.default.createElement(_reactNative.View, { style: [_style.styles.colorPickerItem, { backgroundColor: 'blue' }] })
                  ),
                  _react3.default.createElement(
                    _reactNative.TouchableHighlight,
                    { onPress: function onPress() {
                        _this2.changeColor('purple');_this2.setModalVisible(!_this2.state.modalVisible);
                      } },
                    _react3.default.createElement(_reactNative.View, { style: [_style.styles.colorPickerItem, { backgroundColor: 'purple' }] })
                  )
                ),
                _react3.default.createElement(
                  _reactNative.View,
                  { style: _style.styles.colorPickerRow },
                  _react3.default.createElement(
                    _reactNative.TouchableHighlight,
                    { onPress: function onPress() {
                        _this2.changeColor('black');_this2.setModalVisible(!_this2.state.modalVisible);
                      } },
                    _react3.default.createElement(_reactNative.View, { style: [_style.styles.colorPickerItem, { backgroundColor: 'black' }] })
                  ),
                  _react3.default.createElement(
                    _reactNative.TouchableHighlight,
                    { onPress: function onPress() {
                        _this2.changeColor('grey');_this2.setModalVisible(!_this2.state.modalVisible);
                      } },
                    _react3.default.createElement(_reactNative.View, { style: [_style.styles.colorPickerItem, { backgroundColor: 'grey' }] })
                  ),
                  _react3.default.createElement(
                    _reactNative.TouchableHighlight,
                    { onPress: function onPress() {
                        _this2.changeColor('white');_this2.setModalVisible(!_this2.state.modalVisible);
                      } },
                    _react3.default.createElement(_reactNative.View, { style: [_style.styles.colorPickerItem, { backgroundColor: 'white' }] })
                  )
                )
              )
            )
          )
        ),
        _react3.default.createElement(
          _reactNative.TouchableHighlight,
          { onPress: function onPress() {
              _this2.setModalVisible(true);
            } },
          _react3.default.createElement(_reactNative.View, { style: { width: 40, height: 40, backgroundColor: this.props.note.color } })
        )
      );
    }
  }]);

  return ColorPicker;
}(_react2.Component));

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

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ColorPicker);