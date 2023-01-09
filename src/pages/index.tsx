import { Default } from "../views/Default";
import { Workout } from "../views/Workout";
import { Exercises } from "../views/Exercises";

import { useAppMachine } from "../hooks/useAppMachine";

import { APP_STATE } from "../machines/appMachine/appMachineStates";

const views = {
  [APP_STATE.default]: Default,
  [APP_STATE.exercises]: Exercises,
  [APP_STATE.workingOut]: Workout,
};

export default function Home() {
  const { currentState } = useAppMachine();
  const CurrentView = views[currentState] || Default;

  return <CurrentView />;
}
