import { StateActions } from '../../';

export function getLoseStateActions(): StateActions {
  return {
    stateStart: async () => {
        console.log('LoseState');
    },
  };
}
