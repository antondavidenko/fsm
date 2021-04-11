import { StateActions } from '../../';
import { IStateContext } from '../main';
import { LevelEvents } from '../models/fsm/fsm.enum';

export function getInitStateActions(context: IStateContext): StateActions {
  return {
    stateStart: async () => {
      console.log('InitState');
      context.dispatchEvent(LevelEvents.READY);
    },
  };
}
