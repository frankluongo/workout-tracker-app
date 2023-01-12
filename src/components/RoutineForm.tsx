import React, { useState } from "react";
import { getRoutineFields } from "#helpers/getRoutineFields";
import { FormField } from "./FormField";

import { RoutineInterface } from "#models/Routine";
import { getRoutineExerciseFields } from "#helpers/getRoutineExerciseFields";
import { SuperFormData } from "#helpers/SuperFormData";
import { appFetch } from "#lib/appFetch";
import { API } from "#common/constants";

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
          <fieldset key={i} name={`exercise-${i}`}>
            <legend>Routine Exercise(s)</legend>
            {exerciseFields.map((field, index) => (
              <FormField key={index} field={field} subField={`exercise-${i}`} />
            ))}
          </fieldset>
        ))}
        <input
          type="hidden"
          name="exercisesLength"
          id="exercisesLength"
          value={exercisesLength}
        />
        <button onClick={() => setExercises(exercisesLength + 1)} type="button">
          Add Exercise
        </button>
      </>
      <button type="submit">Add Routine</button>
    </form>
  );

  async function onSubmit(e: any) {
    e.preventDefault();
    const data = new SuperFormData(e.target).toJson();
    try {
      const res = await appFetch(API.routines, "POST", data);
      console.log(res);
    } catch (e) {
      console.error(e);
    }
  }
};

interface RoutineFormProps {
  exercises: Array<any>;
  routine?: RoutineInterface | null;
}
