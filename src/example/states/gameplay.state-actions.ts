import { StateActions } from '../../';
import { IStateContext } from '../main';
import { LevelEvents } from '../models/fsm/fsm.enum';

export function getGameplayStateActions(context: IStateContext): StateActions {
  return {
    stateStart: async () => {
      console.log('GameplayState');
      context.dispatchEvent(LevelEvents.WIN);
    },
  };
}
