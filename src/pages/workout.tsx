import React from "react";
import { useAppMachine } from "../hooks/useAppMachine";
import { useInputs } from "../hooks/useInputs";

export default function Workout() {
  const { send, state } = useAppMachine();
  const workout = state.context.workout;

  return (
    <section>
      <h2>{workout.title}</h2>
      <form className="workout">
        {workout.exercises.map((exercise: any, ei: number) => (
          <Exercise key={ei} {...exercise} send={send} ei={ei} />
        ))}
      </form>
    </section>
  );
}

function Exercise({
  ei,
  name,
  notes,
  send,
  sets,
}: {
  ei: number;
  name: string;
  notes: string;
  send: Function;
  sets: object[];
}) {
  return (
    <section className="block-gap 16">
      <h3>{name}</h3>
      <p>{notes}</p>
      {sets.map((set, i) => (
        <Set key={i} {...set} send={send} i={i} ei={ei} />
      ))}
      <button onClick={addSet} type="button">
        Add Set
      </button>
    </section>
  );

  function addSet() {
    send({ type: "ADD_SET", i: ei });
  }
}

function Set({
  setCount,
  weight,
  reps,
  logged,
  send,
  i,
  ei,
}: {
  ei: number;
  setCount: string | number;
  weight: number;
  reps: number;
  logged: boolean;
  send: Function;
  i: number;
}) {
  const { state, dispatch } = useInputs({ setCount, weight, reps, logged });

  return (
    <section className="block-gap 16">
      <header className="set-row">
        <h4>Set</h4>
        <h4>Weight</h4>
        <h4>Reps</h4>
        <h4>Log</h4>
      </header>
      <div className="set-row">
        <select
          onChange={(e) =>
            dispatch({ type: "setCount", value: e.target.value })
          }
          disabled={logged}
        >
          <option>{setCount}</option>
          <option>drop</option>
          <option>failure</option>
          <option>warm-up</option>
        </select>
        <input
          onChange={(e) => dispatch({ type: "weight", value: e.target.value })}
          disabled={logged}
          type="number"
          placeholder={`${weight}`}
        />
        <input
          onChange={(e) => dispatch({ type: "reps", value: e.target.value })}
          disabled={logged}
          type="number"
          placeholder={`${reps}`}
        />
        <button onClick={toggleLogged} type="button" title="Log Set">
          {logged ? "✅" : "✔️"}
        </button>
      </div>
    </section>
  );

  function toggleLogged() {
    send({
      type: "UPDATE_SET",
      newState: { ...state, logged: !logged },
      exerciseIndex: ei,
      setIndex: i,
    });
  }
}
