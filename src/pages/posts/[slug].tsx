import { useEffect } from 'react';
import { useRouter } from 'next/router';
// Component
import Layout from '@/components/Layout';
import Category from '@/components/Category';
// Redux
import { useDispatch, useSelector } from '@/redux/store';
import { getCategories, getPostBySlug } from '@/redux/slices/blog';

export default function DisplayPost() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { slug } = router.query;
  const { selectedPost: post, categories } = useSelector((store) => store.blog);

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getPostBySlug(slug as string));
  }, []);

  const getCategoryById = (id: number) => {
    return categories?.find((category) => category.id === id);
  };

  const handleClickBack = () => {
    router.back();
  };

  return (
    post && (
      <Layout title={`Post | ${post.title}`}>
        <div className="mx-auto flex max-w-4xl flex-col gap-9 px-6 py-10 md:px-10">
          <div
            role="button"
            className="text-grey-400 flex w-fit flex-row items-center justify-center gap-x-2 rounded-lg bg-gray-100 px-4 py-2.5 text-center text-sm font-medium hover:bg-gray-200 focus:outline-none"
            onClick={handleClickBack}
          >
            {'<'}&nbsp;&nbsp;Back
          </div>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-6">
            <div className="col-span-1 flex flex-col gap-y-3">
              <img
                src={post.imageUrl}
                alt={post.title}
                className="rounded-lg"
              />
              <div className="flex w-full flex-row flex-wrap gap-2">
                {categories &&
                  post.categories &&
                  post.categories.map((category) => (
                    <Category category={getCategoryById(category)} />
                  ))}
              </div>
            </div>
            <div className="col-span-1 flex flex-col gap-y-3 md:gap-y-6">
              <p className="text-3xl font-semibold text-gray-600">
                {post.title}
              </p>
              <p className="text-md font-medium text-gray-400">
                {post.excerpt}
              </p>
            </div>
          </div>
        </div>
      </Layout>
    )
  );
}
