Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
      for (var _i = arr[typeof Symbol === 'function' ? typeof Symbol === 'function' ? Symbol.iterator : '@@iterator' : '@@iterator'](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;_e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }return _arr;
  }return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((typeof Symbol === 'function' ? typeof Symbol === 'function' ? Symbol.iterator : '@@iterator' : '@@iterator') in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

exports.default = Editor;

var _Editor = require('../constants/Editor');

var initialState = {
  key: '',
  header: '',
  text: '',
  editMode: true,
  lastChange: undefined,
  color: 'yellow'
};

function Editor() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _Editor.EDITOR_OPEN:
      var _action$payload = _slicedToArray(action.payload, 2),
          key = _action$payload[0],
          data = _action$payload[1];

      return _extends({}, state, initialState, { key: key }, data, { editMode: false });
    case _Editor.EDITOR_NEW:
      return _extends({}, state, initialState, { editMode: true });
    case _Editor.EDITOR_CHANGE_HEADER:
      return _extends({}, state, { header: action.payload });
    case _Editor.EDITOR_CHANGE_TEXT:
      return _extends({}, state, { text: action.payload });
    case _Editor.EDITOR_CHANGE_MODE:
      return _extends({}, state, { editMode: !state.editMode });
    case _Editor.EDITOR_CHANGE_COLOR:
      return _extends({}, state, { color: action.payload });
    default:
      return state;
  }
}