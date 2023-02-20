import type { NextApiRequest, NextApiResponse } from "next";
import { validateExercise } from "#common/validateExercise";
import { dbConnect } from "#backend/lib/dbConnect";
import Exercise from "#backend/models/Exercise";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await dbConnect();
  const { method } = req;
  switch (method) {
    case "DELETE":
      try {
        const data = JSON.parse(req.body);
        const exercises = await Exercise.findByIdAndUpdate(data.id, {
          archived: true,
        });
        return res.status(200).json({ type: "success", payload: exercises });
      } catch (e) {
        console.error(e);
      }
      break;
    case "GET":
      try {
        const exercises = await Exercise.find({});
        return res.status(200).json({ type: "success", payload: exercises });
      } catch (e) {
        console.error(e);
      }
      break;
    case "PATCH": {
      const data = validateExercise(JSON.parse(req.body));
      try {
        const exercises = await Exercise.findByIdAndUpdate(data._id, data);
        return res.status(200).json({ type: "success", payload: exercises });
      } catch (e) {
        console.error(e);
      }
    }
    case "POST": {
      const data = validateExercise(JSON.parse(req.body));
      try {
        const exercises = await Exercise.create(data);
        return res.status(200).json({ type: "success", payload: exercises });
      } catch (e) {
        console.error(e);
      }
    }
  }
}

type Data = {
  type: string;
  payload: any;
};
