import React from "react";
import { ExerciseSchemaInterface } from "#backend/models/Exercise";
import { getExerciseFields } from "#common/getExerciseFields";
import { Form } from "#base/Form/Form";
import { validateExercise } from "#common/validateExercise";
import { appFetch } from "#common/appFetch";
import { API } from "#common/constants";
import { AppActions, useAppContext } from "#common/context";

export const ExerciseForm = ({
  exercise,
  method,
  createText,
}: ExerciseFormProps) => {
  const { dispatch } = useAppContext();
  const exerciseFields = getExerciseFields(exercise);

  return (
    <>
      <Form
        initialState={exercise || {}}
        submitHandler={onSubmit}
        formChildren={exerciseFields}
        submitText={createText}
      />
    </>
  );

  async function onSubmit(data: any) {
    const validatedData = validateExercise(data);
    try {
      const res = await appFetch(API.exercises, method, validatedData);
      const data = res.payload;
      dispatch({
        type: AppActions.UPDATE,
        payload: { key: "exercises", data },
      });
    } catch (e) {
      console.error(e);
    }
  }
};

ExerciseForm.defaultProps = {
  method: "POST",
};

interface ExerciseFormProps {
  createText: string;
  exercise?: ExerciseSchemaInterface | null;
  method: string;
}
