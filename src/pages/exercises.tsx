import React, { useState } from "react";
import { AddExercise } from "#components/AddExercise";
import { Modal } from "#components/Modal";

import { ExerciseSchemaInterface } from "#models/Exercise";

import { useAppMachine } from "#hooks/useAppMachine";

export default function Exercises() {
  const { currentState, state } = useAppMachine();
  const [showModal, setShow] = useState(false);
  const results = state.context.exercises || [];

  return (
    <>
      <header>
        <h2 className="h2">Exercises</h2>
        <button onClick={() => setShow(true)} type="button">
          Add Exercise
        </button>
      </header>
      <section className="exercise-list">
        {results.map((exercise: any) => (
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
}

function Exercise({ exercise }: { exercise: ExerciseSchemaInterface }) {
  const { send } = useAppMachine();
  const [showModal, setShow] = useState(false);

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
          <button
            disabled={exercise.archived}
            className="button:default"
            onClick={() => setShow(true)}
          >
            Edit
          </button>
          {!exercise.archived && (
            <button
              onClick={() =>
                send({ type: "DELETE_EXERCISE", id: exercise._id })
              }
              className="button:default"
            >
              Delete
            </button>
          )}
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
