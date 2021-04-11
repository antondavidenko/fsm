import { SlotMachineDefinition, SlotMachineState, SlotMachineTransition, StateActions } from './fsm.types';

export class TransitionsLogicEngine {

  private currentState: string;
  private actions = new Map();

  constructor(private slotMachineDefinition: SlotMachineDefinition) {
    this.currentState = slotMachineDefinition.startState;
    this.onTouchStart = this.onTouchStart.bind(this);
    this.onTouchMove = this.onTouchMove.bind(this);
    this.onTouchEnd = this.onTouchEnd.bind(this);
    this.dispatchEvent = this.dispatchEvent.bind(this);
  }

  run() {
    this.actions.get(this.currentState).stateStart();
  }

  setStateAction(stateName: string, actions: StateActions) {
    actions.stateEnd = actions.stateEnd || (() => { });
    actions.stateStart = actions.stateStart || (() => { });
    actions.touchEnd = actions.touchEnd || (() => { });
    actions.touchMove = actions.touchMove || (() => { });
    actions.touchStart = actions.touchStart || (() => { });
    this.actions.set(stateName, actions);
  }

  dispatchEvent(event: string): void {
    const currentState = this.getState(this.currentState);
    currentState.transitions.forEach((transition: SlotMachineTransition) => {
      if (transition.event === event) {
        this.switchState(transition.target);
      }
    });
  }

  private getState(stateName: string): SlotMachineState {
    let result: SlotMachineState = { name: '', transitions: [] };
    this.slotMachineDefinition.states.forEach((state: SlotMachineState) => {
      if (state.name === stateName) {
        result = state;
      }
    });
    return result;
  }

  getCurrentState(): string {
    return this.currentState;
  }

  switchState(newStateId: string) {
    this.actions.get(this.currentState).stateEnd();
    this.currentState = newStateId;
    this.actions.get(this.currentState).stateStart();
  }

  onTouchStart(event: any) {
    this.actions.get(this.currentState).touchStart(event);
  }

  onTouchMove(event: any) {
    this.actions.get(this.currentState).touchMove(event);
  }

  onTouchEnd(event: any) {
    this.actions.get(this.currentState).touchEnd(event);
  }

}
