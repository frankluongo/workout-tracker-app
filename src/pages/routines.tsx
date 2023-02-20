import React from "react";

import { fetchExercises } from "#backend/lib/exercises";
import { fetchRoutines } from "#backend/lib/routines";
import { Creator } from "#base/Creator/Creator";
import { RoutineForm } from "#features/RoutineForm";
import { PageHeader } from "#base/PageHeader/PageHeader";

export default function RoutinesPage({
  exercises,
  routines,
}: RoutinePageProps) {
  const exercisesArr = JSON.parse(exercises);
  return (
    <>
      <PageHeader title="Routines">
        <Creator
          createText="Create new routine"
          FormComponent={RoutineForm}
          exercises={exercisesArr}
          title="Create new routine"
        />
      </PageHeader>
    </>
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
