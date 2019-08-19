import {combineReducers} from 'redux';

import counter from './counter';

const AppReducer = combineReducers({
  count: counter,
});

export default AppReducer;
