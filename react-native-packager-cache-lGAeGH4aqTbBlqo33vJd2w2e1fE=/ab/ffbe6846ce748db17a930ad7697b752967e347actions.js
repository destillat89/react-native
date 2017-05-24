Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDataSource = getDataSource;
exports.setElementMenuVisibility = setElementMenuVisibility;

var _constants = require('./constants');

var _reactNative = require('react-native');

function getDataSource() {
  return function (dispatch) {
    dispatch({
      type: _constants.NOTES_REQUEST
    });
    _reactNative.AsyncStorage.getAllKeys(function (err, keys) {
      _reactNative.AsyncStorage.multiGet(keys, function (err, stores) {
        dispatch({
          type: _constants.NOTES_SUCCESS,
          payload: stores.sort(function (a, b) {
            return b[0] - a[0];
          })
        });
      });
    });
  };
}

function setElementMenuVisibility(visible) {
  return {
    type: _constants.ELEMENT_MENU_VISIBILITY,
    payload: visible
  };
}