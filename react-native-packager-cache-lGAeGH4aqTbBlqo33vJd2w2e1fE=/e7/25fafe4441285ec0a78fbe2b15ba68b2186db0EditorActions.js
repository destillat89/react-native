Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.openNote = openNote;
exports.createNote = createNote;
exports.changeColor = changeColor;
exports.changeHeader = changeHeader;
exports.changeText = changeText;
exports.changeMode = changeMode;

var _Editor = require('../constants/Editor');

var _reactNative = require('react-native');

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

function changeColor(color) {
  return {
    type: _Editor.EDITOR_CHANGE_COLOR,
    payload: color
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
    type: _Editor.EDITOR_CHANGE_MODE
  };
}