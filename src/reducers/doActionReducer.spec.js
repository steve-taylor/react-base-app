import doActionReducer from './doActionReducer';
import Action from '../actions/Action';
import {doAction1, doAction2} from '../actions/DoActions';

describe('reducers/', () => {
  describe('doActionReducer()', () => {
    describe(Action.DO_ACTION_1, () => {
      it('should do something', () => {
        const state = {foo: 'bar'};
        const action = doAction1({
          baz: 1,
        });
        expect(doActionReducer(state, action)).toEqual({
          foo: 'bar',
          baz: 1,
        });
      });
    });
    describe(Action.DO_ACTION_2, () => {
      it('should do something', () => {
        const state = {foo: 'bar'};
        const action = doAction2({
          baz: 1,
        });
        expect(doActionReducer(state, action)).toEqual({
          foo: 'bar',
          baz: 1,
        });
      });
    });
  });
});
