import { API } from "#common/constants";
import { appFetch } from "#common/appFetch";
import React from "react";
import { Button } from "#base/Button/Button";

export const ExerciseDelete = ({ id }: ExerciseDeleteProps) => {
  return (
    <Button type="button" size="small" style="delete" onClick={deleteHandler}>
      Delete Exercise
    </Button>
  );

  async function deleteHandler() {
    try {
      const res = await appFetch(API.exercises, "DELETE", { id });
      console.log(res);
    } catch (e) {
      console.error(e);
    }
  }
};

interface ExerciseDeleteProps {
  id: string;
}
