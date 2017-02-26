import Action from '../actions/Action';

const initialState = {};

export const doAction1Reducer = (state, payload) => ({
  ...state,
  ...payload,
});

export const doAction2Reducer = (state, payload) => ({
  ...state,
  ...payload,
});

const Reducer = {
  [Action.DO_ACTION_1]: doAction1Reducer,
  [Action.DO_ACTION_2]: doAction2Reducer,
  DEFAULT: state => state,
};

const doActionReducer = (state = initialState, {type, payload}) =>
  (Reducer[type] || Reducer.DEFAULT)(state, payload);

export default doActionReducer;
