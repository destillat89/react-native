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

var _style = require('./style');

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _EditorActions = require('../../actions/EditorActions');

var editorActions = _interopRequireWildcard(_EditorActions);

var _TopBarEditor = require('./TopBarEditor');

var _TopBarEditor2 = _interopRequireDefault(_TopBarEditor);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  ListEditor: {
    displayName: 'ListEditor'
  }
};

var _node_modulesReactTransformHmrLibIndexJs2 = (0, _index2.default)({
  filename: '/var/www/react-native/test/src/components/notepad/ListEditor.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _node_modulesReactTransformHmrLibIndexJs2(Component, id);
  };
}

var ListEditor = _wrapComponent('ListEditor')((_temp = _class = function (_Component) {
  _inherits(ListEditor, _Component);

  function ListEditor(props) {
    _classCallCheck(this, ListEditor);

    var _this = _possibleConstructorReturn(this, (ListEditor.__proto__ || Object.getPrototypeOf(ListEditor)).call(this, props));

    _this._onTextChange = _this._onTextChange.bind(_this);

    return _this;
  }

  _createClass(ListEditor, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.navigation.state.params.data) {
        this.props.editorActions.openNote(this.props.navigation.state.params.data);
      } else {
        this.props.editorActions.createNote();
      }
    }
  }, {
    key: '_onTextChange',
    value: function _onTextChange(text) {
      this.props.editorActions.changeText(text);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react3.default.createElement(
        _reactNative.View,
        { style: [_style.styles.main, { backgroundColor: 'orange' }] },
        _react3.default.createElement(_reactNative.TextInput, {
          style: [_style.styles.defaultText, { flex: 10 }, { textAlign: 'left', textAlignVertical: 'top', borderBottomWidth: 1 }],
          value: this.props.note.text,
          editable: this.props.note.editMode,
          onChangeText: this._onTextChange,
          multiline: true,
          returnKeyType: 'none'
        })
      );
    }
  }]);

  return ListEditor;
}(_react2.Component), _class.navigationOptions = function (_ref) {
  var navigation = _ref.navigation;
  return {
    header: _react3.default.createElement(_TopBarEditor2.default, { navigation: navigation })
  };
}, _temp));

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

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ListEditor);