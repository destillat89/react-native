Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Calculator;

var _constants = require('./constants');

var initialState = {
  input: ' ',
  output: ' '
};

function Calculator() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _constants.OPERATION_PRESS:
      return _extends({}, state, handleOperation(state, action.payload));
    default:
      return state;
  }
}

function handleOperation(state, op) {
  var input = state.input,
      output = state.output;

  var match = void 0,
      lastSymbol = void 0;
  switch (op) {
    case 'C':
      input = '';
      output = '';
      break;
    case '/':
    case '*':
    case '-':
    case '+':
      if (output.trim()) {
        input = output.slice(1);
        output = ' ';
      } else {
        if (!input.trim()) {
          break;
        } else {
          var _lastSymbol = input[input.length - 1];
          if (_lastSymbol === '/' || _lastSymbol === '*' || _lastSymbol === '-' || _lastSymbol === '+' || _lastSymbol === '.') input = input.slice(0, -1);
        }
      }
      input = ('' + input + op).trim();
      break;
    case '<':
      if (output.trim()) output = ' ';else input = input.slice(0, -1);
      break;
    case '=':
      output = '=' + eval(input);
      break;
    case '.':
      if (output.trim()) input = ' ';
      match = input.split(/[/*\-+]/);
      if (match && match.length > 0) {
        if (match[match.length - 1].indexOf('.') !== -1) break;
      }

      lastSymbol = input[input.length - 1];
      if (lastSymbol === '/' || lastSymbol === '*' || lastSymbol === '-' || lastSymbol === '+') input += '0';

      if (!input.trim()) input = '0';
      output = ' ';
      input = ('' + input + op).trim();
      break;
    case '+-':
      if (output.trim()) {
        input = output.slice(1);
        output = ' ';
      }

      lastSymbol = input[input.length - 1];
      if (lastSymbol === '/' || lastSymbol === '*' || lastSymbol === '-' || lastSymbol === '+') {
        input = input + '(-';
        break;
      }

      match = input.split(/[/*\-+]/);
      if (match && match.length > 1) {
        input = input.slice(0, -match[match.length - 1].length) + '(-' + match[match.length - 1];

        break;
      }

      input = '(-' + input.trim();

      break;
    case '()':
      if (output.trim()) {
        input = output.slice(1);
        output = ' ';
      }

      lastSymbol = input[input.length - 1];
      if (lastSymbol === '/' || lastSymbol === '*' || lastSymbol === '-' || lastSymbol === '+') {
        input = input + '(';
        break;
      }

      if (lastSymbol === '.') {
        input = input.slice(0, -1);
      }
      if (lastSymbol === '(') {
        input += '(';
        break;
      }
      matchOpen = input.match(/[(]/g);
      matchClose = input.match(/[)]/g);
      countOpen = matchOpen ? matchOpen.length : 0;
      countClose = matchClose ? matchClose.length : 0;
      if (countOpen > countClose) {
        input += ')';
      } else {
        input += '*(';
      }

      break;
    default:
      if (output.trim()) input = ' ';

      output = ' ';
      input = ('' + input + op).trim();
  };
  return {
    input: input,
    output: output
  };
}