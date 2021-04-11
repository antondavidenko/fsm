import { StateActions } from '../../';

export function getWinStateActions(): StateActions {
  return {
    stateStart: async () => {
      console.log('WinState');
    },
  };
}
