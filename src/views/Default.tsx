import React from "react";
import { useAppMachine } from "../hooks/useAppMachine";

export const Default = () => {
  const { send } = useAppMachine();

  return <div>this is the default view</div>;

  function startWorkout() {
    send({ type: "START_WORKOUT" });
  }
};
