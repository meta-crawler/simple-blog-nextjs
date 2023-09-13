import { useState } from 'react';
import Link from 'next/link';
// Components
import LoadingIndicator from './LoadingIndicator';
import Pagination from './Pagination';
import DropDown from './DropDown';
import Post from 'src/pages/posts';
// Redux
import { dispatch, useSelector } from '@/redux/store';
import { ICategory } from '@/@types/blog';
import { getPosts } from '@/redux/slices/blog';

const BlogGallery = () => {
  const { isLoading, posts, categories } = useSelector((store) => store.blog);
  const [category, setCategory] = useState<ICategory>();
  const [search, setSearch] = useState<string>();

  const handleClickSearch = () => {
    const query: { page: number; category: number; title: string } = {
      page: 0,
      category: null,
      title: '',
    };
    if (category) {
      query.category = category.id;
    }
    if (search) {
      query.title = search;
    }
    dispatch(getPosts(query));
  };

  return isLoading ? (
    <div className="w-full items-center justify-center py-9">
      <LoadingIndicator />
    </div>
  ) : (
    <div className="flex flex-col space-y-9">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <div className="col-span-1">
          <DropDown
            name="category"
            options={categories}
            selected={category}
            showClose={true}
            placeholder="Please select a category"
            style="w-full"
            onChange={(v) => setCategory(v)}
          />
        </div>

        <div className="col-span-1">
          <input
            type="text"
            name="search"
            id="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="block w-full rounded-lg border border-gray-50 bg-white p-2.5 text-gray-600 focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm"
            placeholder="Please input title"
          />
        </div>

        <div className="col-span-1 flex justify-end">
          <div
            role="button"
            className="flex w-full flex-row items-center justify-center gap-x-2 rounded-lg bg-blue-400 px-10 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-600 md:w-fit"
            onClick={handleClickSearch}
          >
            Search
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        {posts &&
          !!posts.length &&
          posts.map((post) => (
            <Link key={post.id} href="/posts/[slug]" as={`/posts/${post.slug}`}>
              <div className="col-span-1 cursor-pointer transition-transform ease-out hover:translate-y-1">
                <Post post={post} />
              </div>
            </Link>
          ))}
      </div>

      <Pagination />
    </div>
  );
};

export { BlogGallery };
