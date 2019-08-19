import {ADD_COUNTER, INCREMENT, DECREMENT, RESET} from './actionTypes';
import axios from 'axios'

const addCounter = () => {
  return {
    type: ADD_COUNTER,
    payload: 100,
  };
};

const increment = () => {
   return {
      type: INCREMENT
   }
}

const decrement = () => {
   return {
      type: DECREMENT
   }
}

const reset = () => {
   return {
      type: RESET
   }
}

export {addCounter, increment, decrement, reset};
