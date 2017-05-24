Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.openNote = openNote;
exports.createNote = createNote;
exports.changeColor = changeColor;
exports.closeNote = closeNote;
exports.saveNote = saveNote;
exports.deleteNote = deleteNote;
exports.changeHeader = changeHeader;
exports.changeText = changeText;
exports.changeMode = changeMode;
exports.changeCompleted = changeCompleted;

var _constants = require('./constants');

var _reactNative = require('react-native');

function openNote(note) {
  return {
    type: _constants.EDITOR_OPEN,
    payload: note
  };
}

function createNote() {
  return {
    type: _constants.EDITOR_NEW
  };
}

function changeColor(color) {
  return {
    type: _constants.EDITOR_CHANGE_COLOR,
    payload: color
  };
}

function closeNote() {
  return {
    type: _constants.EDITOR_CLOSE
  };
}

function saveNote(noteState) {
  return function (dispatch) {
    dispatch({
      type: _constants.EDITOR_SAVE_REQUEST
    });

    var key = noteState.key;

    if (!key) key = '' + Date.now();
    var data = {
      header: noteState.header ? noteState.header : noteState.text,
      text: noteState.text, lastChange: Date.now(), color: noteState.color, completed: noteState.completed };

    _reactNative.AsyncStorage.setItem(key, JSON.stringify(data), function () {
      dispatch({
        type: _constants.EDITOR_SAVE_SUCCESS
      });
    });
  };
}

function deleteNote(noteState) {
  return function (dispatch) {
    dispatch({
      type: _constants.EDITOR_DELETE_REQUEST
    });

    var key = noteState.key;


    if (!key) {
      alert('A new note can not be deleted');return;
    }

    _reactNative.AsyncStorage.removeItem(key, function () {
      dispatch({
        type: _constants.EDITOR_DELETE_SUCCESS
      });
    });
  };
}

function changeHeader(header) {
  return {
    type: _constants.EDITOR_CHANGE_HEADER,
    payload: header
  };
}

function changeText(text) {
  return {
    type: _constants.EDITOR_CHANGE_TEXT,
    payload: text
  };
}

function changeMode() {
  return {
    type: _constants.EDITOR_CHANGE_MODE
  };
}

function changeCompleted() {
  return {
    type: _constants.EDITOR_CHANGE_COMPLETED
  };
}