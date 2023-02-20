import React, { useState } from "react";
import { getRoutineFields } from "#common/getRoutineFields";
import { FormField } from "#base/FormField";

import { RoutineInterface } from "#models/Routine";
import { getRoutineExerciseFields } from "#common/getRoutineExerciseFields";
import { SuperFormData } from "#common/SuperFormData";
import { appFetch } from "#common/appFetch";
import { API } from "#common/constants";
import { Form } from "#base/Form/Form";
import { Button } from "#base/Button/Button";

export const RoutineForm = ({
  createText,
  exercises,
  routine,
}: RoutineFormProps) => {
  const fields = getRoutineFields(routine);
  const [exercisesLength, setExercises] = useState(1);

  const exercisesArray = Array.from({ length: exercisesLength });

  const exerciseFields = getRoutineExerciseFields(exercises);

  return (
    <Form submitHandler={onSubmit} submitText={createText}>
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
        <Button
          style="outline"
          size="small"
          onClick={() => setExercises(exercisesLength + 1)}
          type="button"
        >
          Add Exercise
        </Button>
      </>
    </Form>
  );

  async function onSubmit(data: any) {
    console.log(data);
    //   e.preventDefault();
    //   const data = new SuperFormData(e.target).toJson();
    //   try {
    //     const res = await appFetch(API.routines, "POST", data);
    //     console.log(res);
    //   } catch (e) {
    //     console.error(e);
    //   }
  }
};

interface RoutineFormProps {
  createText: string;
  exercises: Array<any>;
  routine?: RoutineInterface | null;
}
