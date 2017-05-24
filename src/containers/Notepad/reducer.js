import { NOTES_SUCCESS, ELEMENT_MENU_VISIBILITY } from './constants';

const initialState = {
  data: [],
  elementMenuVisible: false,
  selectedNote: undefined 
};

export default function Notepad(state = initialState, action) {
  switch (action.type) {
    case NOTES_SUCCESS:
      return Object.assign({}, state, {data: action.payload});
    case ELEMENT_MENU_VISIBILITY:
      return Object.assign({}, state, {elementMenuVisible: action.payload});
    default:
      return state;
  }
}
