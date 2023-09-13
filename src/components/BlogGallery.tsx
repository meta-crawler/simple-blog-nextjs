import React from 'react';
import Link from 'next/link';

import { Pagination, IPaginationProps } from '@/components/Pagination';
import { IPost } from '@/@types/blog';

export type IBlogGalleryProps = {
  posts: IPost[];
  pagination: IPaginationProps;
};

const BlogGallery = (props: IBlogGalleryProps) => {
  const { posts, pagination } = props;
  return (
    <>
      <div className="flex w-full flex-row items-center justify-between">
        {posts.map((post) => (
          <div>{post.title}</div>
        ))}
      </div>

      <Pagination previous={pagination.previous} next={pagination.next} />
    </>
  );
};

export { BlogGallery };
