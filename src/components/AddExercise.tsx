import React from "react";
import { useAppMachine } from "../hooks/useAppMachine";
import { ExerciseSchemaInterface } from "../models/Exercise";

export const AddExercise = ({
  exercise,
  type,
}: {
  exercise: ExerciseSchemaInterface | null;
  type: string;
}) => {
  const { send } = useAppMachine();
  const text = type === "ADD_EXERCISE" ? "Create" : "Update";
  return (
    <form className="block-gap 16 form" onSubmit={onSubmit}>
      <div>
        <section className="display:flex gap:16px">
          <div>
            <label>Timed?</label>
            <input
              type="checkbox"
              name="timed"
              id="timed"
              defaultChecked={exercise?.timed || false}
            />
          </div>
          <div>
            <label>Unilateral?</label>
            <input
              type="checkbox"
              name="unilateral"
              id="unilateral"
              defaultChecked={exercise?.unilateral || false}
            />
          </div>
        </section>
      </div>
      <div>
        <label htmlFor="name">Name</label>
        <input
          required
          type="text"
          name="name"
          id="name"
          defaultValue={exercise?.name || ""}
        />
      </div>
      <div>
        <label>Base Weight</label>
        <input
          type="number"
          name="baseWeight"
          id="baseWeight"
          defaultValue={exercise?.baseWeight || ""}
        />
      </div>
      <div>
        <label htmlFor="oneRepMax">One Rep Max</label>
        <input
          type="number"
          name="oneRepMax"
          id="oneRepMax"
          defaultValue={exercise?.oneRepMax || ""}
        />
      </div>
      <div>
        <label>Equipment</label>
        <select
          name="equipment"
          id="equipment"
          defaultValue={exercise?.equipment || "Barbell"}
        >
          <option>Barbell</option>
          <option>Bodyweight</option>
          <option>Cable Machine</option>
          <option>Dumbbells</option>
          <option>Plate-Loaded Machine</option>
        </select>
      </div>
      <div>
        <label htmlFor="muscleGroup">Main Muscle Group</label>
        <select
          name="muscleGroup"
          id="muscleGroup"
          defaultValue={exercise?.muscleGroup || "Biceps"}
        >
          <option>Biceps</option>
          <option>Calves</option>
          <option>Chest</option>
          <option>Core</option>
          <option>Glutes</option>
          <option>Hamstrings</option>
          <option>Lower Back</option>
          <option>Quads</option>
          <option>Shoulders</option>
          <option>Triceps</option>
          <option>Upper Back</option>
        </select>
      </div>
      <div>
        <label htmlFor="notes">Notes</label>
        <textarea
          name="notes"
          id="notes"
          defaultValue={exercise?.notes || ""}
        ></textarea>
      </div>
      <div>
        <button type="submit">{text} Exercise</button>
      </div>
    </form>
  );

  async function onSubmit(e: any) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data: object = {};
    for (const [key, value] of formData.entries()) {
      data[key] = value;
    }
    if (exercise) {
      data._id = exercise._id;
    }
    send({ type, data });
  }
};
