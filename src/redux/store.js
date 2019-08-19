import {createStore, applyMiddleware, compose} from 'redux';

import reducers from './reducers/index';

const store = createStore(reducers, compose(applyMiddleware()));

store.subscribe(() => {
   console.log('store has changed', store.getState());
   
})

export default store
