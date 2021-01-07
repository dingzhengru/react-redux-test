import { createStore, combineReducers } from 'redux';
import counter from './reducers/counter';
import blog from './reducers/blog';

const rootReducer = combineReducers({ counter, blog });

export default createStore(rootReducer);
