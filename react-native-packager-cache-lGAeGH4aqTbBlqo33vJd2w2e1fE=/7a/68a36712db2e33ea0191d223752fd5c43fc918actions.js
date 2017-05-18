Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculate = calculate;

var _constants = require('./constants');

function calculate(op) {
  return {
    type: _constants.OPERATION_PRESS,
    payload: op
  };
}