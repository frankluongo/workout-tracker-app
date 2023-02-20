import React, { useState } from "react";

import { Exercise } from "#frontend/features/Exercise";
import { fetchExercises } from "#backend/lib/exercises";
import { Content } from "#base/Content/Content";
import { PageHeader } from "#base/PageHeader/PageHeader";
import { Creator } from "#base/Creator/Creator";
import { ExerciseForm } from "#features/ExerciseForm";

export default function ExercisesPage({ exercisesJson }: ExercisesPageProps) {
  const [exercises, setExercises] = useState(JSON.parse(exercisesJson));

  return (
    <>
      <PageHeader title="Exercises">
        <Creator
          createText="Create new exercise"
          FormComponent={ExerciseForm}
          title="Create new exercise"
        />
      </PageHeader>
      <Content>
        {exercises.map((exercise: any) => (
          <Exercise exercise={exercise} key={exercise._id} />
        ))}
      </Content>
    </>
  );
}

interface ExercisesPageProps {
  exercisesJson: string;
}

export async function getServerSideProps() {
  const exercisesJson = await fetchExercises();
  return { props: { exercisesJson } };
}
