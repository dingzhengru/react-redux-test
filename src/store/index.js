import { createStore, combineReducers } from 'redux';
import counterReducer from './reducers/counter';

export default createStore(combineReducers({ counter: counterReducer }));
