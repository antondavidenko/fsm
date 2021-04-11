import { StateActions } from '../../src/';

export function getWinStateActions(): StateActions {
  return {
    stateStart: async () => {
      console.log('WinState');
    },
  };
}
