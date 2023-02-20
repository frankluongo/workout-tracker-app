export type ExerciseSchemaInterface = {
  _id: string;
  archived: boolean;
  baseWeight: number;
  equipment: string;
  muscleGroup: string;
  name: string;
  notes: string;
  oneRepMax: number;
  timed: boolean;
  unilateral: boolean;
  sets: Array<any>;
};
