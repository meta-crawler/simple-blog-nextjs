import { useEffect } from 'react';
// Components
import Layout from '@/components/Layout';
import { BlogGallery } from '@/components/BlogGallery';
// Redux
import { useDispatch, useSelector } from '@/redux/store';
import { getCategories, getPosts } from '@/redux/slices/blog';

export default function IndexPage() {
  const dispatch = useDispatch();
  const { pagination } = useSelector((store) => store.blog);

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getPosts({ page: pagination?.page }));
  }, []);

  return (
    <Layout title="Home | Next.js + TypeScript Simple Blog">
      <div className="mx-auto max-w-4xl px-6 py-4 md:px-10 md:py-10">
        <p className="text-center text-3xl font-bold">From the blog</p>
        <p className="text-md py-6 text-center text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </p>

        <BlogGallery />
      </div>
    </Layout>
  );
}
