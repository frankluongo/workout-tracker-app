import React, { useState } from "react";
import { AddExercise } from "../components/AddExercise";
import { Modal } from "../components/Modal";

import { useAppMachine } from "../hooks/useAppMachine";

import { ExerciseSchemaInterface } from "../models/Exercise";

export const Exercises = () => {
  const { state } = useAppMachine();
  const [showModal, setShow] = useState(false);
  const exercises = state.context.exercises;
  return (
    <>
      <header>
        <h2>Exercises</h2>
        <button onClick={() => setShow(true)} type="button">
          Add Exercise
        </button>
      </header>
      <section className="exercise-list">
        {exercises.map((exercise) => (
          <Exercise exercise={exercise} key={exercise._id} />
        ))}
      </section>
      {showModal && (
        <Modal showModal={showModal} setShow={setShow} title="Add Exercise">
          <AddExercise type="ADD_EXERCISE" exercise={null} />
        </Modal>
      )}
    </>
  );
};

function Exercise({ exercise }: { exercise: ExerciseSchemaInterface }) {
  const [showModal, setShow] = useState(false);
  return (
    <>
      <article className="exercise-list-item row">
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
          <button className="button:default" onClick={() => setShow(true)}>
            Edit
          </button>
        </div>
      </article>
      {showModal && (
        <Modal showModal={showModal} setShow={setShow} title="Update Exercise">
          <AddExercise type="UPDATE_EXERCISE" exercise={exercise} />
        </Modal>
      )}
    </>
  );
}
