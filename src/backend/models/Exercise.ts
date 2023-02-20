import mongoose from "mongoose";

const { Schema } = mongoose;
mongoose.Promise = global.Promise;


export interface ExerciseSchemaInterface {
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

const ExerciseSchema = new Schema({
  archived: Boolean,
  baseWeight: Number,
  equipment: String,
  muscleGroup: String,
  name: { type: String, required: true },
  notes: String,
  oneRepMax: Number,
  timed: Boolean,
  unilateral: Boolean,
  sets: [
    { 
      datePerfomed: Date,
      weight: Number,
      reps: Number,
      type: String,
      time: Number
    }
  ]
});

export default mongoose.models.Exercise || mongoose.model('Exercise', ExerciseSchema)