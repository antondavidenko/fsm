import { StateActions } from '../../src/';

export function getLoseStateActions(): StateActions {
  return {
    stateStart: async () => {
        console.log('LoseState');
    },
  };
}
