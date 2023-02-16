// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import getSvg from './_svg';

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const svg = getSvg(String(req.query.title), String(req.query.footer));
  res.statusCode = 200;
  res.setHeader("Content-type", "image/svg+xml");
  res.setHeader("Cache-Control",
    "no-cache");
  return res.end(svg);
}
