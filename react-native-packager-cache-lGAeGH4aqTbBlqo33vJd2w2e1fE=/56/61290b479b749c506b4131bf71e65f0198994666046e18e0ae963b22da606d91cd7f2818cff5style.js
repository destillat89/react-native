Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _reactNative = require('react-native');

var styles = exports.styles = _reactNative.StyleSheet.create({
  main: {
    flex: 1
  },
  element: {
    height: 50,
    borderWidth: 1,
    backgroundColor: 'yellow',
    margin: 5,
    marginBottom: 0
  },
  headerText: {
    fontSize: 30,
    paddingLeft: 5
  },
  defaultText: {
    fontSize: 24,
    padding: 5
  },
  colorPicker: {
    backgroundColor: 'white',
    justifyContent: 'space-between',
    padding: 5,
    borderRadius: 5,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: 'black',
    shadowRadius: 5,
    elevation: 10
  },
  colorPickerRow: {
    flexDirection: 'row'
  },
  colorPickerItem: {
    width: 80,
    height: 80,
    margin: 5,
    borderColor: 'grey',
    borderWidth: 1
  },
  noteTypePicker: {
    backgroundColor: 'white',
    justifyContent: 'space-between',
    borderRadius: 5,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: 'black',
    shadowRadius: 5,
    elevation: 10
  },
  noteTypePickerItem: {
    height: 50,
    width: 200,
    borderTopWidth: 1,
    borderTopColor: 'grey',
    justifyContent: 'center'
  }
});