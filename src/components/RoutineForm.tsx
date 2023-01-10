import React, { useState } from "react";
import { getRoutineFields } from "#helpers/getRoutineFields";
import { FormField } from "./FormField";

import { RoutineInterface } from "#models/Routine";
import { getRoutineExerciseFields } from "#helpers/getRoutineExerciseFields";

export const RoutineForm = ({ exercises, routine }: RoutineFormProps) => {
  const fields = getRoutineFields(routine);
  const [exercisesLength, setExercises] = useState(1);

  const exercisesArray = Array.from({ length: exercisesLength });

  const exerciseFields = getRoutineExerciseFields(exercises);

  return (
    <form className="form" onSubmit={onSubmit}>
      <>
        {fields.map((field) => {
          return <FormField key={field.id} field={field} />;
        })}
        {exercisesArray.map((_, i) => (
          <div key={i}>
            {exerciseFields.map((field, i) => (
              <FormField key={i} field={field} />
            ))}
          </div>
        ))}
        <button onClick={() => setExercises(exercisesLength + 1)} type="button">
          Add Exercise
        </button>
      </>
      <button type="submit">Add Routine</button>
    </form>
  );

  function onSubmit(e: any) {
    e.preventDefault();
    console.log("submitting...");
  }
};

interface RoutineFormProps {
  exercises: Array<any>;
  routine?: RoutineInterface | null;
}
