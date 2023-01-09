import { useContext } from 'react';
import { useActor } from '@xstate/react';
import { XStateContext } from '../machines/XStateProvider';

export function useAppMachine() {
  const { appMachineService } = useContext(XStateContext);
  const [state, send]: [StateInterface, Function] = useActor(appMachineService);
  const currentState: string = state.toStrings()[0];
  return { currentState, state, send };
}

interface StateInterface {
  toStrings: Function,
  context: {
    exercises: Array<any>
  }
}