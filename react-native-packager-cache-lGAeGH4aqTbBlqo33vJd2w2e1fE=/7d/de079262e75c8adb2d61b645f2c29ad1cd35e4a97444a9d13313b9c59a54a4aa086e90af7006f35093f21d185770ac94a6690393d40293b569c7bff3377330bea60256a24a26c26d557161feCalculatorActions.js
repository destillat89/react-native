Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculate = calculate;

var _Calculator = require('../constants/Calculator');

function calculate(op) {
  return {
    type: _Calculator.OPERATION_PRESS,
    payload: op
  };
}