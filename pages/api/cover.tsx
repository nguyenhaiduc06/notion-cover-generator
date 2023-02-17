// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import getSvg from "./_svg";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { title, presetName } = req.query;
  const svg = getSvg(String(title), String(presetName ?? "winterNeva"));
  res.statusCode = 200;
  res.setHeader("Content-type", "image/svg+xml");
  res.setHeader("Cache-Control", "no-cache");
  return res.end(svg);
}
