// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1500" height="300">
<defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:rgb(255, 154, 158);stop-opacity:1" />
      <stop offset="100%" style="stop-color:rgb(250, 208, 196);stop-opacity:1" />
    </linearGradient>
  </defs>
<rect width="1500" height="300" style="fill:url(#grad1)" />
</svg>`;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.statusCode = 200;
  res.setHeader("Content-type", "image/svg+xml");
  // res.setHeader("Cache-Control",
    // "public, immutable, no-transform, s-maxage=31536000, max-age=31536000");
  return res.end(svg);
}
