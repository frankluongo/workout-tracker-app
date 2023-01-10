import { createMachine } from 'xstate';

import { APP_STATES } from "#common/constants";
import * as actions from './appMachineActions';
import * as services from "./appMachineServices";

export const appMachine = createMachine({
  predictableActionArguments: true,
  id: 'appMachine',
  initial: APP_STATES.default,
  context: {
    exercises: [],
    user: {},
    workout: {},
    routines: []
  },
  states: {
    [APP_STATES.default]: {
      invoke: {
        src: 'fetchExercises',
        onDone: { actions: ['storeExercises'] }
      }
    },
    // Exercise States
    addingExercise: {
      invoke: {
        src: 'addExercise',
        onDone: { 
          target: APP_STATES.default
        }
      }
    },
    deletingExercise: {
      invoke: {
        src: 'deleteExercise',
        onDone: { 
          target: APP_STATES.default
        }
      }
    },
    updatingExercise: {
      invoke: {
        src: 'updateExercise',
        onDone: {
          target: APP_STATES.default
        }
      }
    },
  },
  on: {
    ADD_EXERCISE: { target: 'addingExercise' },
    DELETE_EXERCISE: { target: 'deletingExercise' },
    UPDATE_EXERCISE: { target: 'updatingExercise' },
  }
}, {
  actions,
  services
})