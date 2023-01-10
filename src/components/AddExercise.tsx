import React from "react";
import { useAppMachine } from "#hooks/useAppMachine";
import { ExerciseSchemaInterface } from "#models/Exercise";
import { EQUIPMENT, MUSCLE_GROUPS } from "#common/constants";
import { validateExercise } from "#helpers/validateExercise";

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
          {EQUIPMENT.map(({ label, slug }) => (
            <option key={slug}>{label}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="muscleGroup">Main Muscle Group</label>
        <select
          name="muscleGroup"
          id="muscleGroup"
          defaultValue={exercise?.muscleGroup || "Biceps"}
        >
          {MUSCLE_GROUPS.map(({ label, slug }) => (
            <option key={slug}>{label}</option>
          ))}
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
    const formData: any = new FormData(e.target);
    const data: any = {};
    for (const [key, value] of formData.entries()) {
      data[key] = value;
    }
    if (exercise) data._id = exercise._id;
    validateExercise(data);
    send({ type, data });
  }
};
