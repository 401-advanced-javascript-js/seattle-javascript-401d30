import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';
import reporter from './middleware/reporter.js';

import recordsReducer from '../components/record/reducers.js';

let reducers = combineReducers({
  records: recordsReducer,
});

const store = () =>
  createStore(reducers, composeWithDevTools(applyMiddleware(thunk, reporter)));
export default store;
