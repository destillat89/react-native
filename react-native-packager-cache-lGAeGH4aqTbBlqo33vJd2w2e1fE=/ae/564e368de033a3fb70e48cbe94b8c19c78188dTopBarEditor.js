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

var _style2 = require('../Notepad/style');

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _actions = require('./actions');

var editorActions = _interopRequireWildcard(_actions);

var _actions2 = require('../Notepad/actions');

var notepadActions = _interopRequireWildcard(_actions2);

var _reactNativeModalDropdown = require('react-native-modal-dropdown');

var _reactNativeModalDropdown2 = _interopRequireDefault(_reactNativeModalDropdown);

var _ColorPicker = require('./ColorPicker');

var _ColorPicker2 = _interopRequireDefault(_ColorPicker);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  TopBarEditor: {
    displayName: 'TopBarEditor'
  }
};

var _node_modulesReactTransformHmrLibIndexJs2 = (0, _index2.default)({
  filename: '/var/www/react-native/test/src/containers/NotepadEditor/TopBarEditor.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _node_modulesReactTransformHmrLibIndexJs2(Component, id);
  };
}

var TopBarEditor = _wrapComponent('TopBarEditor')(function (_Component) {
  _inherits(TopBarEditor, _Component);

  function TopBarEditor(props) {
    _classCallCheck(this, TopBarEditor);

    var _this = _possibleConstructorReturn(this, (TopBarEditor.__proto__ || Object.getPrototypeOf(TopBarEditor)).call(this, props));

    _this._onHeaderChange = _this._onHeaderChange.bind(_this);
    _this._onEditModeChange = _this._onEditModeChange.bind(_this);
    _this._dropdown_renderRow = _this._dropdown_renderRow.bind(_this);
    _this._changeCompleted = _this._changeCompleted.bind(_this);
    return _this;
  }

  _createClass(TopBarEditor, [{
    key: '_onEditModeChange',
    value: function _onEditModeChange() {
      this.props.editorActions.changeMode();
    }
  }, {
    key: '_onHeaderChange',
    value: function _onHeaderChange(text) {
      this.props.editorActions.changeHeader(text);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (!nextProps.note.opened) {
        this.props.notepadActions.getDataSource();
        this.props.navigation.goBack();
      }
    }
  }, {
    key: '_changeCompleted',
    value: function _changeCompleted() {
      this.props.editorActions.saveNote(_extends({}, this.props.note, { completed: !this.props.note.completed }));
    }
  }, {
    key: 'render',
    value: function render() {
      var MENU_ITEMS = [{ header: 'Complete', icon: require('../../../img/ic_check_black_36dp.png'), action: this._changeCompleted }, { header: 'Delete', icon: require('../../../img/ic_cancel_black_36dp.png'), action: this.props.editorActions.deleteNote.bind(null, this.props.note) }];

      var headerElement = void 0,
          editModeButton = void 0;
      if (this.props.note.editMode) {
        headerElement = _react3.default.createElement(_reactNative.TextInput, {
          style: [_style.styles.defaultText, { flex: 1 }, this.props.note.completed ? _style.styles.completedText : {}],
          value: this.props.note.header,
          onChangeText: this._onHeaderChange,
          autoFocus: this.props.note.editMode
        });
        editModeButton = _react3.default.createElement(
          _reactNative.View,
          { style: { flexDirection: 'row' } },
          _react3.default.createElement(
            _reactNative.TouchableNativeFeedback,
            {
              onPress: this.props.editorActions.saveNote.bind(null, this.props.note),
              background: _reactNative.TouchableNativeFeedback.SelectableBackgroundBorderless()
            },
            _react3.default.createElement(
              _reactNative.View,
              null,
              _react3.default.createElement(_reactNative.Image, { source: require('../../../img/ic_save_black_36dp.png') })
            )
          ),
          _react3.default.createElement(_ColorPicker2.default, null)
        );
      } else {
        headerElement = _react3.default.createElement(
          _reactNative.Text,
          { style: [_style.styles.defaultText, { flex: 1 }] },
          this.props.note.header
        );
        editModeButton = _react3.default.createElement(
          _reactNative.TouchableNativeFeedback,
          {
            onPress: this._onEditModeChange,
            background: _reactNative.TouchableNativeFeedback.SelectableBackgroundBorderless()
          },
          _react3.default.createElement(
            _reactNative.View,
            null,
            _react3.default.createElement(_reactNative.Image, { source: require('../../../img/ic_edit_black_36dp.png') })
          )
        );
      }

      return _react3.default.createElement(
        _reactNative.View,
        { style: { flexDirection: 'row', alignItems: 'center', height: 50, padding: 5, backgroundColor: _style2.colors[this.props.note.color].header } },
        _react3.default.createElement(
          _reactNative.View,
          { style: { flex: 7 } },
          headerElement
        ),
        _react3.default.createElement(
          _reactNative.View,
          { style: { flex: 3, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' } },
          editModeButton,
          _react3.default.createElement(
            _reactNativeModalDropdown2.default,
            {
              options: MENU_ITEMS,
              renderRow: this._dropdown_renderRow,
              onSelect: function onSelect(ind, value) {
                if (value.action) value.action();
              }
            },
            _react3.default.createElement(_reactNative.Image, { source: require('../../../img/ic_more_vert_black_36dp.png') })
          )
        )
      );
    }
  }, {
    key: '_dropdown_renderRow',
    value: function _dropdown_renderRow(rowData, rowID, highlighted) {
      return _react3.default.createElement(
        _reactNative.TouchableHighlight,
        { onPress: function onPress() {
            return alert(rowData.header);
          } },
        _react3.default.createElement(
          _reactNative.View,
          { style: { width: 150, flexDirection: 'row', alignItems: 'center' } },
          _react3.default.createElement(_reactNative.Image, { source: rowData.icon }),
          _react3.default.createElement(
            _reactNative.Text,
            { style: _style.styles.defaultText },
            rowData.header
          )
        )
      );
    }
  }]);

  return TopBarEditor;
}(_react2.Component));

function mapStateToProps(state) {
  return {
    note: state.Editor
  };
}

function mapDispatchToProps(dispatch) {
  return {
    editorActions: (0, _redux.bindActionCreators)(editorActions, dispatch),
    notepadActions: (0, _redux.bindActionCreators)(notepadActions, dispatch)
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(TopBarEditor);