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

var _redux = require('redux');

var _EditorActions = require('../../actions/EditorActions');

var editorActions = _interopRequireWildcard(_EditorActions);

var _NotepadActions = require('../../actions/NotepadActions');

var notepadActions = _interopRequireWildcard(_NotepadActions);

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
  filename: '/var/www/react-native/test/src/components/notepad/TopBarEditor.js',
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

    _this._saveData = _this._saveData.bind(_this);
    _this._onHeaderChange = _this._onHeaderChange.bind(_this);
    _this._onEditModeChange = _this._onEditModeChange.bind(_this);
    _this._dropdown_renderRow = _this._dropdown_renderRow.bind(_this);
    _this._deleteNote = _this._deleteNote.bind(_this);
    return _this;
  }

  _createClass(TopBarEditor, [{
    key: '_saveData',
    value: function _saveData() {
      var _this2 = this;

      var noteState = this.props.note;
      var key = noteState.key;

      if (!key) key = '' + Date.now();
      var data = { header: noteState.header ? noteState.header : noteState.text, text: noteState.text, lastChange: Date.now(), color: noteState.color };

      _reactNative.AsyncStorage.setItem(key, JSON.stringify(data), function () {
        _this2.props.notepadActions.getDataSource();
        _this2.props.navigation.goBack();
      });
    }
  }, {
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
    key: '_deleteNote',
    value: function _deleteNote() {
      var _this3 = this;

      var noteState = this.props.note;
      var key = noteState.key;


      if (!key) {
        alert('A new note can not be deleted');return;
      }

      _reactNative.AsyncStorage.removeItem(key, function () {
        _this3.props.notepadActions.getDataSource();
        _this3.props.navigation.goBack();
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var MENU_ITEMS = [{ header: 'Delete', icon: require('../../../img/ic_cancel_black_36dp.png'), action: this._deleteNote }, { header: 'Close', icon: require('../../../img/ic_check_black_36dp.png'), action: undefined }];

      var headerElement = void 0,
          editModeButton = void 0;
      if (this.props.note.editMode) {
        headerElement = _react3.default.createElement(_reactNative.TextInput, {
          style: [_style.styles.defaultText, { flex: 1 }],
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
              onPress: this._saveData,
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
        { style: { flexDirection: 'row', alignItems: 'center', height: 50, padding: 5, backgroundColor: 'white' } },
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