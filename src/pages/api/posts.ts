import { NextApiRequest, NextApiResponse } from 'next';
import data from './blog.json';

export default function posts(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { page, slug, category, title },
  } = req;

  if (page) {
    const postsPerPage = 3;
    const pageNumber: number = JSON.parse(page as string);
    let posts = data.posts;

    if (category != 'null') {
      posts = posts.filter((post) =>
        post.categories.includes(JSON.parse(category as string)),
      );
    }

    if (title) {
      posts = posts.filter((post) =>
        post.title.toLowerCase().includes((title as string).toLowerCase()),
      );
    }

    const totalPages = Math.ceil(posts.length / postsPerPage);

    res.status(200).json({
      posts: posts.slice(
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
