Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.openNote = openNote;
exports.createNote = createNote;
exports.changeHeader = changeHeader;
exports.changeText = changeText;
exports.changeMode = changeMode;

var _Editor = require('../constants/Editor');

var _reactNative = require('react-native');

var _NotepadActions = require('./NotepadActions');

function openNote(note) {
  return {
    type: _Editor.EDITOR_OPEN,
    payload: note
  };
}

function createNote() {
  return {
    type: _Editor.EDITOR_NEW
  };
}

function changeHeader(header) {
  return {
    type: _Editor.EDITOR_CHANGE_HEADER,
    payload: header
  };
}

function changeText(text) {
  return {
    type: _Editor.EDITOR_CHANGE_TEXT,
    payload: text
  };
}

function changeMode() {
  return {
    type: EDITOR_CHANGE_MODE
  };
}