import {NOTES_REQUEST, NOTES_SUCCESS, NOTES_FAIL, ELEMENT_MENU_VISIBILITY} from './constants';
import { AsyncStorage } from 'react-native';

export function getDataSource() {
  // return {
  //   type: GET_DATASOURCE
  // };
  return function(dispatch)	{
  	dispatch({
  		type:	NOTES_REQUEST
  	})
    AsyncStorage.getAllKeys((err, keys) => {
      AsyncStorage.multiGet(keys, (err, stores) => {
        //return Object.assign({}, state, {data: stores});
        dispatch({
          type: NOTES_SUCCESS,
          payload: stores.sort((a, b) => (b[0] - a[0]))
        })
      });
    });
	}
}

export function setElementMenuVisibility(visible) {
  return {
    type: ELEMENT_MENU_VISIBILITY,
    payload: visible
  };
}
