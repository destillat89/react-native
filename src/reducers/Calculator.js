import { OPERATION_PRESS } from '../constants/Calculator';

const initialState = {
  input: ' ',
  output: ' '
};

export default function Calculator(state = initialState, action) {
  switch (action.type) {
    case OPERATION_PRESS:
      //return {...state, input: handleOperation(state, action.payload)};
      return Object.assign({}, state, handleOperation(state, action.payload)); //{...state, input: '1'}
    // case EQUAL_PRESS:
    //   return {...state, output: calculateResult(state)};
    default:
      return state;
  }
}

function handleOperation(state, op) {
  let {input, output} = state;
  //if (op !== '=' && output = ' ');
  let match, lastSymbol;
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
      }
      else {
        if (!input.trim()) {
          break;
        }
        else {
          let lastSymbol = input[input.length-1];
          if (lastSymbol === '/' || lastSymbol === '*' || lastSymbol === '-' || lastSymbol === '+' || lastSymbol === '.') input = input.slice(0,-1);
        }
      }
      input = (''+input+op).trim();
      break;
    case '<':
      if (output.trim()) output = ' ';
      else input = input.slice(0,-1);
      break;
    case '=':
      output = '=' + eval(input);
      break;
    case '.':
      if (output.trim()) input = ' ';
      match = input.split(/[/*\-+]/);
      if (match && match.length > 0) {
        if (match[match.length-1].indexOf('.') !== -1) break;
      }

      lastSymbol = input[input.length-1];
      if (lastSymbol === '/' || lastSymbol === '*' || lastSymbol === '-' || lastSymbol === '+') input+= '0';

      if (!input.trim()) input = '0';
      output = ' ';
      input = (''+input+op).trim();
      break;
    case '+-':
      if (output.trim()) {
        input = output.slice(1);
        output = ' ';
      }

      lastSymbol = input[input.length-1];
      if (lastSymbol === '/' || lastSymbol === '*' || lastSymbol === '-' || lastSymbol === '+') {
        input = input + '(-';
        break;
      }


      match = input.split(/[/*\-+]/);
      if (match && match.length > 1) {
        input = input.slice(0, -match[match.length-1].length) + '(-' + match[match.length-1];
        // match[match.length-1] = '(-' + match[match.length-1];
        // input = match.join('');
        break;
      }


      //if (!input.trim()) input = '0';
      //output = ' ';
      input = '(-'+input.trim();

      break;
    case '()':
      if (output.trim()) {
        input = output.slice(1);
        output = ' ';
      }

      lastSymbol = input[input.length-1];
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
      countOpen = (matchOpen) ? matchOpen.length : 0;
      countClose = (matchClose) ? matchClose.length : 0;
      if (countOpen > countClose) {
        input += ')';//input.slice(0, -match[match.length-1].length) + '(-' + match[match.length-1];
      }
      else {
        input += '*(';
      }


      break;
    default:
      if (output.trim()) input = ' ';
      // if (op === '.' && input.indexOf('.') !== -1) break;
      output = ' ';
      input = (''+input+op).trim();
  };
  return {
    input: input,
    output: output
  };
}

// function calculateResult(state) {
//   let {input} = state;
//   return 'loading';
// }
