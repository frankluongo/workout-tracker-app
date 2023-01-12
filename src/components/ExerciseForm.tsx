import React from "react";
import { ExerciseSchemaInterface } from "#models/Exercise";
import { getExerciseFields } from "#helpers/getExerciseFields";
import { Form } from "./Form";
import { validateExercise } from "#helpers/validateExercise";
import { appFetch } from "#lib/appFetch";
import { API } from "#common/constants";

export const ExerciseForm = ({
  exercise,
  method,
  submitText,
}: ExerciseFormProps) => {
  const exerciseFields = getExerciseFields(exercise);

  return (
    <>
      <Form
        initialState={exercise || {}}
        submitHandler={onSubmit}
        formChildren={exerciseFields}
        submitText={submitText}
      />
    </>
  );

  async function onSubmit(data: any) {
    const validatedData = validateExercise(data);
    try {
      const res = await appFetch(API.exercises, method, validatedData);
      console.log(res);
    } catch (e) {
      console.error(e);
    }
  }
};

ExerciseForm.defaultProps = {
  method: "POST",
};

interface ExerciseFormProps {
  exercise?: ExerciseSchemaInterface | null;
  method: string;
  submitText: string;
}
