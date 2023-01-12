import { API } from "#common/constants";
import { appFetch } from "#lib/appFetch";
import React from "react";

export const ExerciseDelete = ({ id }: ExerciseDeleteProps) => {
  return (
    <button className="button:default" onClick={deleteHandler}>
      Delete Exercise
    </button>
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
