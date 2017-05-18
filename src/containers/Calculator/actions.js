import {OPERATION_PRESS} from './constants';


export function calculate(op) {
  return {
    type: OPERATION_PRESS,
    payload: op
  };

}
