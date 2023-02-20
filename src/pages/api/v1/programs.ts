import type { NextApiRequest, NextApiResponse } from "next";
import { createProgram, fetchPrograms } from "#backend/lib/programs";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  let payload;
  switch (method) {
    case "GET":
      payload = fetchPrograms();
      return res.status(200).json({ type: "success", payload });
      break;
    case "POST":
      payload = createProgram(req);
      return res.status(200).json({ type: "success", payload });
    default:
      return res
        .status(200)
        .json({ type: "success", payload: { success: true } });
  }
}
