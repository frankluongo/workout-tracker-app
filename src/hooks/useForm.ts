import { useReducer } from "react";

export enum FormActions {
  SET_VALUE = 'SET_VALUE',
  SET_SUB_VALUE = 'SET_SUB_VALUE'
}

export function useForm(initialState: object = {}) {
  const [state, dispatch] = useReducer(formReducer, initialState);
  return { state, dispatch };
}

function formReducer(state: StateObject, action: FormActionInterface) {
  const { type, payload } = action;

  switch(type) {
    case FormActions.SET_VALUE:
      return { ...state, [payload.field]: payload.value }
    case FormActions.SET_SUB_VALUE:
      const currentArray = makeArray(state[payload.field]);
      return { ...state, [payload.field]: [...currentArray, payload.value ]};
    default:
      return state;
  }
}

function makeArray(item: string | Array<any> | null): Array<any> {
  // if it's an array, just return that:
  if (Array.isArray(item)) return item;
  // If it doesn't exist, return an empty array:
  if (!item) return [];
  // If it is something that isn't an array, make it so:
  return [item];
}

// We don't know what's going to be in here...
interface StateObject {

}

interface FormActionInterface {
  type: FormActions;
  payload: {
    field: keyof StateObject;
    subField: string;
    value: string | number | null | undefined;
  }
}