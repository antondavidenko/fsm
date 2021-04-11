import { TransitionsLogicEngine } from '../fsm/transitions-logic-engine';
import { slotMachineDefinition } from './models/fsm/fsm.config';
import { initAllStates } from './states';

export interface IStateContext {
  dispatchEvent(eventId: string): void;
}

export class main {

  private levelFSM: TransitionsLogicEngine;

  async create() {
    this.levelFSM = new TransitionsLogicEngine(slotMachineDefinition);
    initAllStates(this.levelFSM, this.getStateContext());
    this.initInput(null);
    this.levelFSM.run();
  }

  private initInput(input): void {
    input.onDown(this.levelFSM.onTouchStart);
    input.onMove(this.levelFSM.onTouchMove);
    input.onUp(this.levelFSM.onTouchEnd);
  }

  private getStateContext(): IStateContext {
    return {
      dispatchEvent: this.levelFSM.dispatchEvent,
    };
  }

}
