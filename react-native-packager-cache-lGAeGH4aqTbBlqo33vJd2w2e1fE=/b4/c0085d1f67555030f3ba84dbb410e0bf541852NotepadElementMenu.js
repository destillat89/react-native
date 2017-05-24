Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./../../../node_modules/react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactNative = require('react-native');

var _style = require('./style');

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _actions = require('./actions');

var notepadActions = _interopRequireWildcard(_actions);

var _actions2 = require('../NotepadEditor/actions');

var editorActions = _interopRequireWildcard(_actions2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  NotepadElementMenu: {
    displayName: 'NotepadElementMenu'
  }
};

var _node_modulesReactTransformHmrLibIndexJs2 = (0, _index2.default)({
  filename: '/var/www/react-native/test/src/containers/Notepad/NotepadElementMenu.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _node_modulesReactTransformHmrLibIndexJs2(Component, id);
  };
}

var NotepadElementMenu = _wrapComponent('NotepadElementMenu')(function (_Component) {
  _inherits(NotepadElementMenu, _Component);

  function NotepadElementMenu(props) {
    _classCallCheck(this, NotepadElementMenu);

    var _this = _possibleConstructorReturn(this, (NotepadElementMenu.__proto__ || Object.getPrototypeOf(NotepadElementMenu)).call(this, props));

    _this.state = { modalVisible: false };
    return _this;
  }

  _createClass(NotepadElementMenu, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (!nextProps.note.opened) {
        this.props.notepadActions.setElementMenuVisibility(false);
        this.props.notepadActions.getDataSource();
      }
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
            animationType: "fade", transparent: true, visible: this.props.elementMenuVisible,
            onRequestClose: function onRequestClose() {
              _this2.props.editorActions.closeNote();
            }
          },
          _react3.default.createElement(
            _reactNative.TouchableWithoutFeedback,
            { style: { flex: 1, justifyContent: 'center', alignItems: 'stretch' }, onPress: function onPress() {
                _this2.props.editorActions.closeNote();
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
                    'Edit note'
                  )
                ),
                _react3.default.createElement(
                  _reactNative.TouchableNativeFeedback,
                  {
                    background: _reactNative.TouchableNativeFeedback.SelectableBackground(),
                    onPress: function onPress() {
                      _this2.props.editorActions.saveNote(_extends({}, _this2.props.note, { completed: !_this2.props.note.completed }));
                    }
                  },
                  _react3.default.createElement(
                    _reactNative.View,
                    { style: [_style.styles.noteTypePickerItem, { borderTopWidth: 0 }] },
                    _react3.default.createElement(
                      _reactNative.Text,
                      { style: _style.styles.defaultText },
                      'Complete'
                    )
                  )
                ),
                _react3.default.createElement(
                  _reactNative.TouchableNativeFeedback,
                  {
                    background: _reactNative.TouchableNativeFeedback.SelectableBackground(),
                    onPress: function onPress() {
                      _this2.props.editorActions.deleteNote(_this2.props.note);
                    }
                  },
                  _react3.default.createElement(
                    _reactNative.View,
                    { style: _style.styles.noteTypePickerItem },
                    _react3.default.createElement(
                      _reactNative.Text,
                      { style: _style.styles.defaultText },
                      'Delete'
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return NotepadElementMenu;
}(_react2.Component));

function mapStateToProps(state) {
  return {
    elementMenuVisible: state.Notepad.elementMenuVisible,
    note: state.Editor
  };
}

function mapDispatchToProps(dispatch) {
  return {
    notepadActions: (0, _redux.bindActionCreators)(notepadActions, dispatch),
    editorActions: (0, _redux.bindActionCreators)(editorActions, dispatch)
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(NotepadElementMenu);