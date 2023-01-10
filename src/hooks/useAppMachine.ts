import { useContext } from 'react';
import { useActor } from '@xstate/react';
import { XStateContext } from '#machines/XStateProvider';

export function useAppMachine() {
  const { appMachineService }: any = useContext(XStateContext);
  const [state, send]: [any, any] = useActor(appMachineService);
  const currentState: string = state.toStrings()[0];
  return { currentState, state, send };
}

interface StateInterface {
  toStrings: Function,
  context: {
    exercises: Array<any>
  }
}