import mongoose from "mongoose";

const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const ProgramSchema = new Schema({
  title: { type: String, required: true },
  routines: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Routine",
    },
  ],
});

export type ProgramModel = {
  title: string;
  routines?: Array<{ id: string }>;
};

export default mongoose.models.Program ||
  mongoose.model("Program", ProgramSchema);
