import {createStore, combineReducers} from 'redux';
import doActionReducer from './reducers/doActionReducer';

const reducer = combineReducers({
  form: doActionReducer,
});

const store = createStore(reducer, /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export const dispatch = store.dispatch;

export default store;
