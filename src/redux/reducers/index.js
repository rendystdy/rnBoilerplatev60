import {combineReducers} from 'redux';

import counter from './counter';

const AppReducer = combineReducers({
  counter: counter,
});

export default AppReducer;
