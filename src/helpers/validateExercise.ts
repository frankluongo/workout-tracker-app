import { ExerciseSchemaInterface } from "../models/Exercise";

export function validateExercise(obj: ExerciseSchemaInterface) {
  const bools = ['archived', 'timed', 'unilateral'];
  bools.forEach(prop => {
    if (obj[prop]) obj[prop] = true;
  });
  if (!obj.name) throw new Error('Name field is required.');
  return obj;
}