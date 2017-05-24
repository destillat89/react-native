import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  main: {
    flex: 1
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
    color: 'grey',
    textDecorationLine: 'line-through'
  },
  underline: {
    textDecorationLine: 'underline'
  },
  colorPicker: {
    backgroundColor: 'white',
    justifyContent: 'space-between',
    padding: 5,
    borderRadius: 5,
    shadowOffset: {width: 5, height: 5},
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
    borderWidth: 1,
    borderRadius: 5
  }
});
