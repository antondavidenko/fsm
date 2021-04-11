export type StateActions = {
  touchMove?: (event: any) => void,
  touchStart?: (event: any) => void,
  touchEnd?: (event: any) => void,
  stateStart?: () => void,
  stateEnd?: () => void,
}

export type SlotMachineDefinition = {
  startState: string,
  states: SlotMachineState[],
}

export type SlotMachineState = {
  name: string,
  transitions: SlotMachineTransition[],
}

export type SlotMachineTransition = {
  target: string,
  event: string,
}
