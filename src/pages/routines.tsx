import React from "react";

import { RoutineCreate } from "#components/RoutineCreate";
import { fetchExercises } from "#lib/exercises";
import { fetchRoutines } from "#lib/routines";

export default function Routine({ exercises, routines }: RoutinePageProps) {
  const exercisesArr = JSON.parse(exercises);
  return (
    <header>
      <h2 className="h2">Routines</h2>
      <RoutineCreate exercises={exercisesArr} />
    </header>
  );
}

export async function getServerSideProps() {
  const [routines, exercises] = await Promise.all([
    fetchRoutines(),
    fetchExercises(),
  ]);
  return { props: { exercises, routines } };
}

interface RoutinePageProps {
  routines: Array<object>;
  exercises: string;
}
