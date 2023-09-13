import { NextApiRequest, NextApiResponse } from 'next';
import data from './blog.json';

export default function posts(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { page, slug },
  } = req;

  if (page) {
    const postsPerPage = 3;
    const totalPages = Math.ceil(data.posts.length / postsPerPage);
    const pageNumber: number = JSON.parse(page as string);

    res.status(200).json({
      posts: data.posts.slice(
        pageNumber * postsPerPage,
        (pageNumber + 1) * postsPerPage,
      ),
      pagination: {
        page: pageNumber,
        total: totalPages,
      },
    });
  }

  if (slug) {
    res
      .status(200)
      .json({ post: data.posts.find((post) => post.slug === slug) });
  }
}
