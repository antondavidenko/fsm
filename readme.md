# WHAT?
### Solution based on combination of design patterns

- State: https://en.wikipedia.org/wiki/State_pattern

- State Machines: https://www.ni.com/en-ie/support/documentation/supplemental/16/simple-state-machine-template-documentation.html#section–843084029

Main idea is organise logic of your game flow similar to flowchart ( https://en.wikipedia.org/wiki/Flowchart )

# WHY?
- avoiding superclass anti pattern in file who connect all components

- makes flow of your game easy to read and modify (like work with blocks in flowchart)

# HOW?
- Step1: Define states end event you will be use in your game flow `example\model\fsm\fsm.enum.ts`
- Step2: Define flow in file: `example\model\fsm\fsm.config.ts`
- Step3: Define context and create in the main file: `example\main.ts`
- Step4: Define state actions folder: `example\states`

There are 5 optional actions for each sete:
```
touchMove
touchStart
touchEnd
stateStart
stateEnd 
```
- Step5: Setup and start fsm in the main file