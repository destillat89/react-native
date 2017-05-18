Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NotepadNavigator = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNavigation = require('react-navigation');

var _Notepad = require('./Notepad');

var _Notepad2 = _interopRequireDefault(_Notepad);

var _TextEditor = require('./TextEditor');

var _TextEditor2 = _interopRequireDefault(_TextEditor);

var _ListEditor = require('./ListEditor');

var _ListEditor2 = _interopRequireDefault(_ListEditor);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var NotepadNavigator = exports.NotepadNavigator = (0, _reactNavigation.StackNavigator)({
  MainScreen: { screen: _Notepad2.default },
  TextEditor: { screen: _TextEditor2.default },
  ListEditor: { screen: _ListEditor2.default }
});