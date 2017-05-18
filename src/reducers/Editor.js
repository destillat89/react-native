import { EDITOR_OPEN, EDITOR_NEW, EDITOR_SAVE_REQUEST, EDITOR_SAVE_SUCCESS,
  EDITOR_CHANGE_HEADER, EDITOR_CHANGE_TEXT, EDITOR_CHANGE_MODE, EDITOR_CHANGE_COLOR } from '../constants/Editor';

const initialState = {
  key: '',
  header: '',
  text: '',
  editMode: true,
  lastChange: undefined,
  color: 'yellow'
};

export default function Editor(state = initialState, action) {
  switch (action.type) {
    case EDITOR_OPEN:
      let [key, data] = action.payload;
      return Object.assign({}, state, initialState, {key: key}, data, {editMode: false});
    case EDITOR_NEW:
      return Object.assign({}, state, initialState, {editMode: true});
    case EDITOR_CHANGE_HEADER:
      return Object.assign({}, state, {header: action.payload});
    case EDITOR_CHANGE_TEXT:
      return Object.assign({}, state, {text: action.payload});
    case EDITOR_CHANGE_MODE:
      return Object.assign({}, state, {editMode: !state.editMode});
    case EDITOR_CHANGE_COLOR:
      return Object.assign({}, state, {color: action.payload});
    default:
      return state;
  }
}
