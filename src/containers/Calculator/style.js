import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  main: {
    flex: 1
  },
  monitor: {
    flex: 3,
    backgroundColor: '#DDDDDD',
    alignItems: 'flex-end',
    borderBottomWidth: 1,
    borderBottomColor: 'black'
  },
  text: {
    fontSize: 45
  },
  resultColor: {
    color: 'green'
  },
  operationColor: {
    color: 'steelblue'
  },
  keyboard: {
    flex: 7
  },
  keyboardRow: {
    flex: 1,
    flexDirection: 'row'
  },
  keyboardButtonView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#DDDDDD'
  },
  keyboardButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch'
  }
});
