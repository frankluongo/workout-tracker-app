import { FormActions } from "#hooks/useForm";
import { EQUIPMENT, MUSCLE_GROUPS } from "#common/constants";
import { ExerciseSchemaInterface } from "#models/Exercise";

export function getExerciseFields(exercise?: ExerciseSchemaInterface | null) {
  return [
    {
      defaultValue: exercise?.name || '',
      id: "name",
      initialObj: { type: FormActions.SET_VALUE, payload: { field: "name" }, },
      inputTag: "input",
      label: "Name",
      name: "name",
      required: true,
      type: "text",
    },
    {
      defaultValue: exercise?.oneRepMax || "",
      id: "oneRepMax",
      initialObj: { type: FormActions.SET_VALUE, payload: { field: "oneRepMax" }, },
      inputTag: "input",
      label: "One Rep Max",
      name: "oneRepMax",
      required: false,
      type: "number",
    },
    {
      defaultValue: exercise?.equipment || EQUIPMENT[0].name,
      id: "equipment",
      initialObj: { type: FormActions.SET_VALUE, payload: { field: "equipment" } },
      inputTag: "select",
      label: "Equipment",
      name: "equipment",
      options: EQUIPMENT,
      required: false,
      type: null,
    },
    {
      defaultValue: exercise?.muscleGroup || MUSCLE_GROUPS[0].name,
      description: "Main muscle group targeted by the exercise",
      id: "muscleGroup",
      initialObj: { type: FormActions.SET_VALUE, payload: { field: "muscleGroup" } },
      inputTag: "select",
      label: "Muscle Group",
      name: "muscleGroup",
      options: MUSCLE_GROUPS,
      required: false,
      type: null,
    },
    {
      defaultValue: exercise?.notes || "",
      description: "Put in anything you'd like to keep in mind about this exercise",
      id: "notes",
      initialObj: { type: FormActions.SET_VALUE, payload: { field: "notes" } },
      inputTag: "textarea",
      label: "Notes",
      name: "notes",
      required: false,
      type: null,
    },
    {
      defaultValue: exercise?.timed || false,
      description: "Is this exercise timed? Ex.) Bodyweight Plank",
      id: "timed",
      initialObj: { type: FormActions.SET_VALUE, payload: { field: "timed" } },
      inputTag: "input",
      label: "Timed?",
      name: "timed",
      required: false,
      type: "checkbox",
    },
    {
      defaultValue: exercise?.unilateral || false,
      description: "Unilateral exercises are doubled when counting stats. Ex.) Dumbbell Bicep Curls",
      id: "unilateral",
      initialObj: { type: FormActions.SET_VALUE, payload: { field: "unilateral" } },
      inputTag: "input",
      label: "Unilateral?",
      name: "unilateral",
      required: false,
      type: "checkbox",
    }
  ];
}