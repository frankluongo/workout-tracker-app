import { dbConnect } from "#lib/dbConnect";
import Routine from "#models/Routine";

export async function fetchRoutines() {
  await dbConnect();
  try {
    const routines = await Routine.find({});
    return JSON.stringify(routines);
  } catch (e) {
    console.error(e);
  }
}

export async function fetchRoutine(id: string) {
  await dbConnect();
  try {
    return await Routine.findById(id);
  } catch (e) {
    console.error(e);
  }
}