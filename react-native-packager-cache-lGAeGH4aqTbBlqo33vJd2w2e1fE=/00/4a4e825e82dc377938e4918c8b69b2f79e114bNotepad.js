Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Notepad;

var _Notepad = require('../constants/Notepad');

var initialState = {
  data: []
};

function Notepad() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _Notepad.NOTES_SUCCESS:
      return _extends({}, state, { data: action.payload });

    default:
      return state;
  }
}