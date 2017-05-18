import { NOTES_SUCCESS } from '../constants/Notepad';

const initialState = {
  data: []
};

export default function Notepad(state = initialState, action) {
  switch (action.type) {
    case NOTES_SUCCESS:
      return Object.assign({}, state, {data: action.payload});

    default:
      return state;
  }
}
