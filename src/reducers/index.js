
import { combineReducers } from 'redux';
import Calculator from './Calculator';
import Notepad from './Notepad';
import Editor from './Editor';

export default combineReducers({
  Calculator,
  Notepad,
  Editor
})
