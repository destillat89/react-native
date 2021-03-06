import {EDITOR_OPEN, EDITOR_NEW, EDITOR_SAVE_REQUEST, EDITOR_SAVE_SUCCESS, EDITOR_CLOSE,
  EDITOR_DELETE_REQUEST, EDITOR_DELETE_SUCCESS, EDITOR_CHANGE_COMPLETED,
  EDITOR_CHANGE_HEADER, EDITOR_CHANGE_TEXT, EDITOR_CHANGE_MODE, EDITOR_CHANGE_COLOR} from './constants';
import { AsyncStorage } from 'react-native';

export function openNote(note) {
  return {
    type: EDITOR_OPEN,
    payload: note
  }
}

export function createNote() {
  return {
    type: EDITOR_NEW
  }
}

export function changeColor(color) {
  return {
    type: EDITOR_CHANGE_COLOR,
    payload: color
  }
}

export function closeNote() {
  return {
    type: EDITOR_CLOSE
  }
}

export function saveNote(noteState) {
  return function(dispatch)	{
    dispatch({
      type:	EDITOR_SAVE_REQUEST
    });

    //this.props.editorActions.saveNote(this.props.note);
    //let noteState = this.props.note;
    let {key} = noteState;
    if (!key) key = ''+Date.now();
    let data = {
      header: (noteState.header ? noteState.header : noteState.text),
      text: noteState.text, lastChange: Date.now(), color: noteState.color, completed: noteState.completed};
    //try {
    AsyncStorage.setItem(key, JSON.stringify(data), () => {
      dispatch({
        type: EDITOR_SAVE_SUCCESS
      });
      // this.props.notepadActions.getDataSource();
      // this.props.navigation.goBack();
    });
  }
}

export function deleteNote(noteState) {
  return function(dispatch)	{
    dispatch({
      type:	EDITOR_DELETE_REQUEST
    });

    //let noteState = this.props.note;
    let {key} = noteState;

    if (!key) {alert('A new note can not be deleted'); return;}
    // let data = {header: (noteState.header ? noteState.header : noteState.text), text: noteState.text};
    //try {
    AsyncStorage.removeItem(key, () => {
      dispatch({
        type: EDITOR_DELETE_SUCCESS
      });
      // this.props.notepadActions.getDataSource();
      // this.props.navigation.goBack();
    });
  }
}

// export function saveNote(noteState) {
//   return function(dispatch)	{
//   	dispatch({
//   		type:	EDITOR_SAVE_REQUEST
//   	})
//     // AsyncStorage.getAllKeys((err, keys) => {
//     //   AsyncStorage.multiGet(keys, (err, stores) => {
//     //     //return Object.assign({}, state, {data: stores});
//     //     dispatch({
//     //       type: EDITOR_SAVE_SUCCESS,
//     //       payload: stores.sort((a, b) => (b[0] - a[0]))
//     //     })
//     //   });
//     // });
//     let {key} = noteState;
//     if (!key) key = ''+Date.now();
//     let data = {header: (noteState.header ? noteState.header : noteState.text), text: noteState.text};
//     //try {
//     AsyncStorage.setItem(key, JSON.stringify(data), () => {
//       dispatch({
//         type: EDITOR_SAVE_SUCCESS
//       })
//       getDataSource();
//     });
//
// 	}
//
// }

export function changeHeader(header) {
  return {
    type: EDITOR_CHANGE_HEADER,
    payload: header
  }
}

export function changeText(text) {
  return {
    type: EDITOR_CHANGE_TEXT,
    payload: text
  }
}

export function changeMode() {
  return {
    type: EDITOR_CHANGE_MODE
  }
}

export function changeCompleted() {
  return {
    type: EDITOR_CHANGE_COMPLETED
  }


}
