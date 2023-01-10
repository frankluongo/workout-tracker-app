import { ExerciseSchemaInterface } from "#models/Exercise";

export function getExerciseFields(exercise?: ExerciseSchemaInterface | null) {
  return [
    {
      defaultValue: exercise?.timed || false,
      id: "timed",
      input: "checkbox",
      inputTag: "input",
      label: "Timed?",
      description: "Is this exercise timed? Ex.) Bodyweight Plank",
      name: "timed",
      required: false,
    },
    {
      defaultValue: exercise?.unilateral || false,
      id: "unilateral",
      input: "checkbox",
      inputTag: "input",
      label: "Unilateral?",
      description: "Unilateral exercises are doubled when counting stats. Ex.) Dumbbell Bicep Curls",
      name: "unilateral",
      required: false,
    },
  ];
}