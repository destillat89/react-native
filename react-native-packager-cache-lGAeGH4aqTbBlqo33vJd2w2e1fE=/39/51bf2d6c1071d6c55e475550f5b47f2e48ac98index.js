Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _Calculator = require('./Calculator');

var _Calculator2 = _interopRequireDefault(_Calculator);

var _Notepad = require('./Notepad');

var _Notepad2 = _interopRequireDefault(_Notepad);

var _Editor = require('./Editor');

var _Editor2 = _interopRequireDefault(_Editor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  Calculator: _Calculator2.default,
  Notepad: _Notepad2.default,
  Editor: _Editor2.default
});