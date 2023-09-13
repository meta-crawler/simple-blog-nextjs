import { useEffect } from 'react';
// Components
import Layout from '@/components/Layout';
import { BlogGallery } from '@/components/BlogGallery';
// Redux
import { useDispatch } from '@/redux/store';
import { getCategories, getPosts } from '@/redux/slices/blog';

export default function IndexPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getPosts());
  }, []);

  return (
    <Layout title="Home | Next.js + TypeScript Simple Blog">
      <div className="mx-auto max-w-4xl pt-4 lg:pt-10">
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
