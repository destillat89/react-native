Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./../../../node_modules/react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _reactNative = require('react-native');

var _NotepadElement = require('./NotepadElement');

var _NotepadElement2 = _interopRequireDefault(_NotepadElement);

var _TopBarNotepad = require('./TopBarNotepad');

var _TopBarNotepad2 = _interopRequireDefault(_TopBarNotepad);

var _style = require('./style');

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _actions = require('./actions');

var notepadActions = _interopRequireWildcard(_actions);

var _reactNativeModalDropdown = require('react-native-modal-dropdown');

var _reactNativeModalDropdown2 = _interopRequireDefault(_reactNativeModalDropdown);

var _NotepadElementMenu = require('./NotepadElementMenu');

var _NotepadElementMenu2 = _interopRequireDefault(_NotepadElementMenu);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  Notepad: {
    displayName: 'Notepad'
  }
};

var _node_modulesReactTransformHmrLibIndexJs2 = (0, _index2.default)({
  filename: '/var/www/react-native/test/src/containers/Notepad/Notepad.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _node_modulesReactTransformHmrLibIndexJs2(Component, id);
  };
}

var Notepad = _wrapComponent('Notepad')((_temp = _class = function (_Component) {
  _inherits(Notepad, _Component);

  function Notepad(props) {
    _classCallCheck(this, Notepad);

    return _possibleConstructorReturn(this, (Notepad.__proto__ || Object.getPrototypeOf(Notepad)).call(this, props));
  }

  _createClass(Notepad, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.notepadActions.getDataSource();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var ds = new _reactNative.ListView.DataSource({ rowHasChanged: function rowHasChanged(r1, r2) {
          return r1 !== r2;
        } });
      var dataSource = ds.cloneWithRows(this.props.data);
      return _react3.default.createElement(
        _reactNative.View,
        { style: _style.styles.main },
        _react3.default.createElement(_reactNative.ListView, {
          dataSource: dataSource,
          enableEmptySections: true,
          renderRow: function renderRow(rowData) {
            return _react3.default.createElement(_NotepadElement2.default, { data: rowData, navigation: _this2.props.navigation });
          }
        }),
        _react3.default.createElement(_NotepadElementMenu2.default, null)
      );
    }
  }]);

  return Notepad;
}(_react2.Component), _class.navigationOptions = function (_ref) {
  var navigation = _ref.navigation;
  return {
    title: 'Notepad',
    headerRight: _react3.default.createElement(_TopBarNotepad2.default, { navigation: navigation })
  };
}, _temp));

function mapStateToProps(state) {
  return {
    data: state.Notepad.data
  };
}

function mapDispatchToProps(dispatch) {
  return {
    notepadActions: (0, _redux.bindActionCreators)(notepadActions, dispatch)
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Notepad);