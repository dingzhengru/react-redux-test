import { createStore, combineReducers } from 'redux';
import counterReducer from './reducers/counter';

const rootReducer = combineReducers({ counter: counterReducer });

export default createStore(rootReducer);
