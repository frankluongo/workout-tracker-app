import React from "react";
import { ExerciseSchemaInterface } from "#models/Exercise";

import { ExerciseCreate } from "#components/ExerciseCreate";
import { ExerciseDelete } from "#components/ExerciseDelete";
import { fetchExercises } from "#lib/exercises";

export default function Exercises({ exercises }: ExercisesPageProps) {
  const results = JSON.parse(exercises);

  return (
    <>
      <header>
        <h2 className="h2">Exercises</h2>
        <ExerciseCreate
          formSubmitText="Add Exercise"
          modalTitle="Create New Exercise"
        >
          Add Exercise
        </ExerciseCreate>
      </header>
      <section className="exercise-list">
        {results.map((exercise: any) => (
          <Exercise exercise={exercise} key={exercise._id} />
        ))}
      </section>
    </>
  );
}

function Exercise({ exercise }: { exercise: ExerciseSchemaInterface }) {
  return (
    <>
      <article
        className="exercise-list-item row"
        data-archived={exercise.archived}
      >
        <div className="column block-gap">
          <header className="block-gap:8px">
            <h3>{exercise.name}</h3>
            {exercise.notes && <p>{exercise.notes}</p>}
          </header>
          <section className="exercise-list-item-details">
            <div>
              <strong>Equipment:&nbsp;</strong>
              {exercise.equipment}
            </div>
            <div>
              <strong>Muscle Group:&nbsp;</strong>
              {exercise.muscleGroup}
            </div>
          </section>
        </div>
        <div>
          <ExerciseCreate
            exercise={exercise}
            formSubmitText="Edit Exercise"
            method="PATCH"
            modalTitle="Edit Exercise"
          >
            Edit Exercise
          </ExerciseCreate>
          {!exercise.archived && <ExerciseDelete id={exercise._id} />}
        </div>
      </article>
    </>
  );
}

interface ExercisesPageProps {
  exercises: string;
}

export async function getServerSideProps() {
  const exercises = await fetchExercises();
  console.log(exercises);
  return { props: { exercises } };
}
