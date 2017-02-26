import Action from './Action';

export function doAction1(payload) {
  return {
    type: Action.DO_ACTION_1,
    payload,
  };
}

export function doAction2(payload) {
  return {
    type: Action.DO_ACTION_2,
    payload,
  };
}
