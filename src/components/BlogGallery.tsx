import { useState } from 'react';
import Link from 'next/link';
// Components
import LoadingIndicator from './LoadingIndicator';
import Pagination from './Pagination';
import DropDown from './DropDown';
import Post from 'src/pages/posts';
// Redux
import { useSelector } from '@/redux/store';
import { ICategory } from '@/@types/blog';

const BlogGallery = () => {
  const { isLoading, posts, categories } = useSelector((store) => store.blog);
  const [category, setCategory] = useState<ICategory>();
  const [search, setSearch] = useState<string>();

  return isLoading ? (
    <div className="w-full items-center justify-center py-9">
      <LoadingIndicator />
    </div>
  ) : (
    <div className="flex flex-col space-y-9">
      <div className="flex flex-col items-center justify-end gap-3 sm:flex-row">
        <DropDown
          name="category"
          options={categories}
          selected={category}
          showClose={true}
          placeholder="Please select a category"
          style="w-full md:w-80"
          onChange={(v) => setCategory(v)}
        />

        <input
          type="text"
          name="search"
          id="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="block w-full rounded-lg border border-gray-50 bg-white p-2.5 text-gray-600 focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm md:w-80"
          placeholder="Please input title"
        />
      </div>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        {posts &&
          posts.map((post) => (
            <Link href="/posts/[slug]" as={`/posts/${post.slug}`}>
              <div className="col-span-1 cursor-pointer transition-transform ease-out hover:translate-y-1">
                <Post key={post.id} post={post} />
              </div>
            </Link>
          ))}
      </div>

      <Pagination />
    </div>
  );
};

export { BlogGallery };
