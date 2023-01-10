import { dbConnect } from "#lib/dbConnect";
import Exercise from "#models/Exercise";

export async function fetchExercises() {
  await dbConnect();
  try {
    const exercises = await Exercise.find({});
    return JSON.stringify(exercises);
  } catch (e) {
    console.error(e);
  }
}