Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.colors = exports.styles = undefined;

var _reactNative = require('react-native');

var styles = exports.styles = _reactNative.StyleSheet.create({
  main: {
    flex: 1
  },
  element: {
    height: 57,
    borderWidth: 0.5,
    margin: 5,
    marginBottom: 0
  },
  headerText: {
    fontSize: 30,
    paddingLeft: 5
  },
  defaultText: {
    fontSize: 24,
    padding: 5,
    color: 'black'
  },
  completedText: {
    color: 'dimgrey',
    textDecorationLine: 'line-through'
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
    width: 250,
    borderTopWidth: 1,
    borderTopColor: 'grey',
    justifyContent: 'center'
  }
});

var colors = exports.colors = {
  yellow: {
    main: 'yellow',
    header: 'rgba(230, 192, 0, 0.6)',
    back: 'rgba(255, 255, 0, 0.2)'
  },
  orange: {
    main: 'orange',
    header: 'rgba(255, 165, 0, 0.7)',
    back: 'rgba(255, 165, 0, 0.3)'
  },
  red: {
    main: 'red',
    header: 'rgba(255, 0, 0, 0.6)',
    back: 'rgba(255, 0, 0, 0.15)'
  },
  green: {
    main: 'green',
    header: 'rgba(0, 100, 0, 0.6)',
    back: 'rgba(0, 255, 0, 0.10)'
  },
  blue: {
    main: 'blue',
    header: 'rgba(0, 64, 255, 0.4)',
    back: 'rgba(0, 0, 255, 0.10)'
  },
  purple: {
    main: 'purple',
    header: 'rgba(128, 0, 128, 0.5)',
    back: 'rgba(128, 0, 128, 0.2)'
  },
  black: {
    main: 'black',
    header: 'rgba(0, 0, 0, 0.6)',
    back: 'rgba(0, 0, 0, 0.2)'
  },
  grey: {
    main: 'grey',
    header: 'rgba(128, 128, 128, 0.5)',
    back: 'rgba(128, 128, 128, 0.15)'
  },
  white: {
    main: 'white',
    header: 'rgba(192, 192, 192, 0.3)',
    back: 'rgba(255, 255, 255, 0.4)'
  }

};