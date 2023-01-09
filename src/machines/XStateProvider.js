import React, { createContext } from "react";

import { useInterpret } from "@xstate/react";

import { appMachine } from "./appMachine/appMachine";

export const XStateContext = createContext({});

export const XStateProvider = ({ children }) => {
  const appMachineService = useInterpret(appMachine);

  return (
    <XStateContext.Provider value={{ appMachineService }}>
      {children}
    </XStateContext.Provider>
  );
};
