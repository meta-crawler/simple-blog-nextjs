import React from 'react';
import Link from 'next/link';
// Components
import LoadingIndicator from './LoadingIndicator';
import Pagination from './Pagination';
// Redux
import { useSelector } from '@/redux/store';
import { IPost } from '@/@types/blog';

const BlogGallery = () => {
  const { isLoading, posts } = useSelector((store) => store.blog);
  return isLoading ? (
    <div className="w-full items-center justify-center py-9">
      <LoadingIndicator />
    </div>
  ) : (
    <div className="flex flex-col space-y-9">
      <div className="flex w-full flex-row items-center justify-between">
        {posts && posts.map((post) => <div>{post.title}</div>)}
      </div>

      <Pagination />
    </div>
  );
};

export { BlogGallery };
