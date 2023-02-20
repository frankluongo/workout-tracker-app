import React, { createContext, useContext, useReducer } from "react";

const initialContext: AppStore = {
  dispatch: () => {},
  exercises: [],
  routines: [],
};

export const AppContext = createContext(initialContext);

export function AppContextProvider({ children }: { children: any }) {
  const [store, dispatch] = useReducer(reducer, undefined, init);

  return (
    <AppContext.Provider value={{ ...initialContext, ...store, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

function reducer(store: AppStore, action: Action) {
  const { type, payload } = action;
  switch (type) {
    // Replace a key completely:
    case AppActions.REPLACE:
      return { ...store, [payload.key]: payload.data };
    // Update a value in a key:
    case AppActions.UPDATE:
      const existingItems: Array<any> = store[payload.key];
      const newItems = existingItems.map((el) =>
        el._id !== payload.data._id ? el : payload.data
      );
      return { ...store, [payload.key]: newItems };
    default:
      return store;
  }
}

function init() {
  return {};
}

export const useAppContext = () => useContext(AppContext);

export enum AppActions {
  ADD = "ADD",
  REMOVE = "REMOVE",
  REPLACE = "REPLACE",
  UPDATE = "UPDATE",
}

interface AppStore {
  dispatch: Function;
  exercises: Array<object>;
  routines: Array<object>;
}

interface AppStoreObj {}

interface Action {
  type: AppActions;
  payload: {
    key: keyof AppStoreObj;
    data: any;
  };
}
