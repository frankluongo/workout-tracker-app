import { useReducer } from "react";

export function useInputs(obj: object): UserInputsReturn {
  const [state, dispatch] = useReducer(reducer, obj);

  return { state, dispatch };

  function reducer(state: object, action: ActionInterface) {
    return { ...state, [action.type]: action.value }
  }
}

interface ActionInterface {
  type: string;
  value: string|number|null;
}

interface UserInputsReturn {
  state: object,
  dispatch: Function
}