import { CreateRoutine } from "#components/CreateRoutine";
import { fetchExercises } from "#lib/exercises";
import { fetchRoutines } from "#lib/routines";
import React from "react";

export default function Routine({ exercises, routines }: RoutinePageProps) {
  const exercisesArr = JSON.parse(exercises);
  return (
    <header>
      <h2 className="h2">Routines</h2>
      <CreateRoutine exercises={exercisesArr} />
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
  exercises: Array<object>;
}
