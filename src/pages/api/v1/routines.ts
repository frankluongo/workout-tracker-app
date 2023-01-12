import type { NextApiRequest, NextApiResponse } from 'next'
import { validateExercise } from '#helpers/validateExercise';
import { dbConnect } from "#lib/dbConnect";
import Routine from "#models/Routine";

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  await dbConnect();
  const { method } = req;
  switch(method) {
    case 'DELETE': 
      try {
        const data = JSON.parse(req.body);
        const routine = await Routine.findByIdAndUpdate(data.id, { archived: true });
        return res.status(200).json({ type: 'success', payload: routine });
      } catch(e) {
        console.error(e);
      }
    break;
    case 'GET': 
      try {
        const routine = await Routine.find({});
        return res.status(200).json({ type: 'success', payload: routine });
      } catch(e) {
        console.error(e);
      }
    break;
    case 'PATCH': {
      const data = validateExercise(JSON.parse(req.body));
      try {
        const routine = await Routine.findByIdAndUpdate(data._id, data);
        return res.status(200).json({ type: 'success', payload: routine });
      } catch(e) {
        console.error(e);
      }
    }
    case 'POST': {
      const data = JSON.parse(req.body);
      try {
        const routine = await Routine.create(data);
        return res.status(200).json({ type: 'success', payload: routine });
      } catch(e) {
        console.error(e);
      }
    }
  }
};

type Data = {
  type: string;
  payload: any;
}