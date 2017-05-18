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

var _reactNativeModalDropdown = require('react-native-modal-dropdown');

var _reactNativeModalDropdown2 = _interopRequireDefault(_reactNativeModalDropdown);

var _NoteTypePicker = require('./NoteTypePicker');

var _NoteTypePicker2 = _interopRequireDefault(_NoteTypePicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  TopBarNotepad: {
    displayName: 'TopBarNotepad'
  }
};

var _node_modulesReactTransformHmrLibIndexJs2 = (0, _index2.default)({
  filename: '/var/www/react-native/test/src/containers/Notepad/TopBarNotepad.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _node_modulesReactTransformHmrLibIndexJs2(Component, id);
  };
}

var TopBarNotepad = _wrapComponent('TopBarNotepad')(function (_Component) {
  _inherits(TopBarNotepad, _Component);

  function TopBarNotepad(props) {
    _classCallCheck(this, TopBarNotepad);

    var _this = _possibleConstructorReturn(this, (TopBarNotepad.__proto__ || Object.getPrototypeOf(TopBarNotepad)).call(this, props));

    _this._dropdown_renderRow = _this._dropdown_renderRow.bind(_this);
    return _this;
  }

  _createClass(TopBarNotepad, [{
    key: 'render',
    value: function render() {
      var MENU_ITEMS = [{ header: 'Sort', icon: require('../../../img/ic_sort_black_36dp.png'), action: undefined }, { header: 'Search', icon: require('../../../img/ic_search_black_36dp.png'), action: undefined }];

      var navigation = this.props.navigation;

      return _react3.default.createElement(
        _reactNative.View,
        { style: { flexDirection: 'row', alignItems: 'center' } },
        _react3.default.createElement(_NoteTypePicker2.default, { navigation: navigation }),
        _react3.default.createElement(
          _reactNative.TouchableNativeFeedback,
          {
            background: _reactNative.TouchableNativeFeedback.SelectableBackgroundBorderless()
          },
          _react3.default.createElement(
            _reactNative.View,
            { style: { marginLeft: 5, marginRight: 5 } },
            _react3.default.createElement(_reactNative.Image, { source: require('../../../img/ic_search_black_36dp.png') })
          )
        ),
        _react3.default.createElement(
          _reactNative.TouchableNativeFeedback,
          {
            background: _reactNative.TouchableNativeFeedback.SelectableBackgroundBorderless()
          },
          _react3.default.createElement(
            _reactNative.View,
            { style: { marginLeft: 5, marginRight: 5 } },
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

  return TopBarNotepad;
}(_react2.Component));

exports.default = TopBarNotepad;