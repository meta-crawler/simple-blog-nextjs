import { NextApiRequest, NextApiResponse } from 'next';
import data from './blog.json';

export default function categories(_req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ categories: data.categories });
}
