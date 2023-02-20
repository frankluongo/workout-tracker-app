import type { NextApiRequest } from "next";
import { dbConnect } from "#backend/lib/dbConnect";
import Program from "#backend/models/Program";

export async function fetchPrograms() {
  await dbConnect();
  try {
    const routines = await Program.find({});
    return JSON.stringify(routines);
  } catch (e) {
    console.error(e);
  }
}

export async function fetchProgram(id: string) {
  await dbConnect();
  try {
    return await Program.findById(id);
  } catch (e) {
    console.error(e);
  }
}

export async function deleteProgram(id: string) {
  await dbConnect();
  try {
    return await Program.findByIdAndUpdate(id, { archived: true });
  } catch (e) {
    console.error(e);
  }
}

export async function createProgram(req: NextApiRequest) {
  await dbConnect();
  const data = JSON.parse(req.body);
  return await Program.create(data);
}

export async function updateProgram(req: NextApiRequest) {
  await dbConnect();
  const data = JSON.parse(req.body);
  return await Program.findByIdAndUpdate(data._id, data);
}
