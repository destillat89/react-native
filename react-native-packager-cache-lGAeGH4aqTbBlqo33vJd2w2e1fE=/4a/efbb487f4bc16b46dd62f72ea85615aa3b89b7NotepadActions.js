Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDataSource = getDataSource;

var _Notepad = require('../constants/Notepad');

var _reactNative = require('react-native');

function getDataSource() {
  return function (dispatch) {
    dispatch({
      type: _Notepad.NOTES_REQUEST
    });
    _reactNative.AsyncStorage.getAllKeys(function (err, keys) {
      _reactNative.AsyncStorage.multiGet(keys, function (err, stores) {
        dispatch({
          type: _Notepad.NOTES_SUCCESS,
          payload: stores.sort(function (a, b) {
            return b[0] - a[0];
          })
        });
      });
    });
  };
}