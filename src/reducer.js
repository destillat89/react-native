
import { combineReducers } from 'redux';
import Calculator from './containers/Calculator/reducer';
import Notepad from './containers/Notepad/reducer';
import Editor from './containers/NotepadEditor/reducer';

export default combineReducers({
  Calculator,
  Notepad,
  Editor
})
