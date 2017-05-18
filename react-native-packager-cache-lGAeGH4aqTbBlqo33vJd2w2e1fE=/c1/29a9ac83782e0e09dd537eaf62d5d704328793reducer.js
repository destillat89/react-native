Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _reducer = require('./containers/Calculator/reducer');

var _reducer2 = _interopRequireDefault(_reducer);

var _reducer3 = require('./containers/Notepad/reducer');

var _reducer4 = _interopRequireDefault(_reducer3);

var _reducer5 = require('./containers/NotepadEditor/reducer');

var _reducer6 = _interopRequireDefault(_reducer5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  Calculator: _reducer2.default,
  Notepad: _reducer4.default,
  Editor: _reducer6.default
});