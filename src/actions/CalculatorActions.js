import {OPERATION_PRESS, NUMBER_PRESS, EQUAL_PRESS} from '../constants/Calculator';


export function calculate(op) {
  return {
    type: OPERATION_PRESS,
    payload: op
  };

}
