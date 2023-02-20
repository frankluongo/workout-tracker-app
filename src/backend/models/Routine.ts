import mongoose from "mongoose";

const { Schema } = mongoose;
mongoose.Promise = global.Promise;


export interface RoutineSchemaInterface {
  _id: string;
  archived: boolean;
  baseWeight: number;
  equipment: string;
  muscleGroup: string;
  name: string;
  notes: string;
  oneRepMax: number;
  timed: boolean;
  unilateral: boolean,
  sets: Array<Set>
}

export interface Set {
  datePerformed: string;
  weight: number;
  reps: number;
  type: string;
  time: Number;
}

const RoutineSchema = new Schema({
  title: { type: String, required: true },
  datePerformed: Date,
  exercises: [
    {
      sets: Number,
      exercise: {
        type: mongoose.Types.ObjectId,
        ref: "Exercise"
      },
      repsMin: Number,
      repsMax: Number,
      percentOfOneRepMax: Number,
      restDuration: Number,
      updateOneRepMax: Boolean,
    }
  ]
});

export default mongoose.models.Routine || mongoose.model('Routine', RoutineSchema)

export interface RoutineInterface {
  title: string;
  datePerformed: string;
  exercises: [RoutineExerciseInterface]
}

export interface RoutineExerciseInterface {
  sets: number;
  exercise: string;
  repsMin: number;
  repsMax: number;
  percentOfOneRepMax: number;
  restDuration: number;
  updateOneRepMax: boolean;
}