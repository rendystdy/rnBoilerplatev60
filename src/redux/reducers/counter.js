import {ADD_COUNTER, INCREMENT, DECREMENT, RESET} from '../actions/actionTypes';

const initialState = {
  number: 3,
  count: 0,
};

const counter = (state = initialState, action) => {
  const payload = action.payload || 1;
  switch (action.type) {
    case ADD_COUNTER:
      return {
        number: payload,
      };
    case INCREMENT:
       return {
         count : state.count + payload
       }
    case DECREMENT:
       return {
          count: state.count - payload
       }
    case RESET:
       return {
          count: 0
       }
    default:
      return state;
  }
};

export default counter;
