import Link from 'next/link';
// Components
import LoadingIndicator from './LoadingIndicator';
import Pagination from './Pagination';
import Post from 'src/pages/posts';
// Redux
import { useSelector } from '@/redux/store';

const BlogGallery = () => {
  const { isLoading, posts } = useSelector((store) => store.blog);

  return isLoading ? (
    <div className="w-full items-center justify-center py-9">
      <LoadingIndicator />
    </div>
  ) : (
    <div className="flex flex-col space-y-9">
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
