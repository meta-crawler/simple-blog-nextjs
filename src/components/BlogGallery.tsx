// Components
import LoadingIndicator from './LoadingIndicator';
import Pagination from './Pagination';
import Post from '@/pages/post';
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
      <div className="grid grid-cols-3 space-x-3">
        {posts &&
          posts.map((post) => (
            <div className="col-span-1">
              <Post key={post.id} post={post} />
            </div>
          ))}
      </div>

      <Pagination />
    </div>
  );
};

export { BlogGallery };
