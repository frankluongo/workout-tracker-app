import { RoutineExerciseInterface } from "#models/Routine";

export function getRoutineExerciseFields(exercises: Array<any>, exercise?: RoutineExerciseInterface | null) {
  return [
    {
      defaultValue: exercise?.exercise || "",
      id: "exercise",
      input: null,
      inputTag: "select",
      label: "Exercise",
      description: "Exercise to be performed",
      name: "exercise",
      required: true,
      options: exercises || []
    },
    {
      defaultValue: exercise?.sets || 1,
      id: "sets",
      input: "number",
      inputTag: "input",
      label: "Sets",
      description: "# of sets for this exercise",
      name: "sets",
      required: true,
    },
    {
      defaultValue: exercise?.repsMin || 1,
      id: "repsMin",
      input: "number",
      inputTag: "input",
      label: "Reps (Min)",
      description: "Minimum number of reps to perform",
      name: "repsMin",
      required: true,
    },
    {
      defaultValue: exercise?.repsMax || 1,
      id: "repsMax",
      input: "number",
      inputTag: "input",
      label: "Reps (Max)",
      description: "Maximum number of reps to perform",
      name: "repsMax",
      required: false,
    },
    {
      defaultValue: exercise?.percentOfOneRepMax || null,
      id: "percentOfOneRepMax",
      input: "number",
      inputTag: "input",
      label: "Percent of One Rep Max",
      description: "How close to your 1RM you'll be getting",
      name: "percentOfOneRepMax",
      required: false,
    },
    {
      defaultValue: exercise?.restDuration || null,
      id: "restDuration",
      input: "number",
      inputTag: "input",
      label: "Rest Duration (seconds)",
      description: "Amount of rest between sets",
      name: "restDuration",
      required: false,
    },
    {
      defaultValue: exercise?.updateOneRepMax || false,
      id: "updateOneRepMax",
      input: "checkbox",
      inputTag: "input",
      label: "Update One Rep Max?",
      description: "After performing this set, recalculate your one rep max?",
      name: "updateOneRepMax",
      required: false,
    }
  ];
}