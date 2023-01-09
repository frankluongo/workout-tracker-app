import { createMachine } from 'xstate';

import { APP_STATE } from "./appMachineStates";
import * as actions from './appMachineActions';
import * as services from "./appMachineServices";

export const appMachine = createMachine({
  predictableActionArguments: true,
  id: 'appMachine',
  initial: APP_STATE.default,
  context: {
    exercises: {},
    user: {},
    workout: {}
  },
  states: {
    [APP_STATE.default]: {
      invoke: {
        src: 'fetchExercises',
        onDone: { actions: ['storeExercises'] }
      }
    },
    [APP_STATE.exercises]: {
      id: 'exercises',
      initial: 'default',
      states: {
        default: {},
        addingExercises: {
          invoke: {
            src: 'addExercise',
            onDone: { actions: ['addToExerciseStore'], target: 'default' },
          }
        },
        updatingExercises: {
          invoke: {
            src: 'updateExercise',
            onDone: { actions: ['updateExerciseStore'], target: 'default' }
          }
        }
      },
      on: {
        ADD_EXERCISE: { target: 'exercises.addingExercises' },
        UPDATE_EXERCISE: { target: 'exercises.updatingExercises' }
      }
    },
    [APP_STATE.routines]: {

    },
    [APP_STATE.settings]: {

    },
    [APP_STATE.stats]: {

    },
    [APP_STATE.workingOut]: {
      on: {
        ADD_SET: {
          actions: ['addSet']
        },
        UPDATE_SET: {
          actions: 'updateSet'
        }
      }
    }
  },
  on: {
    TO_DEFAULT: { target: APP_STATE.default },
    TO_EXERCISES: { target: APP_STATE.exercises },
    TO_ROUTINES: { target: APP_STATE.routines },
    TO_SETTINGS: { target: APP_STATE.settings },
    TO_STATS: { target: APP_STATE.stats },
    TO_WORKOUT: { target: APP_STATE.workingOut },
  }
}, {
  actions,
  services
})