import { useDispatch, useSelector } from '@/redux/store';
import { getPosts } from '@/redux/slices/blog';

const Pagination = () => {
  const dispatch = useDispatch();
  const { isLoading, pagination } = useSelector((store) => store.blog);

  const handleClickPrev = () => {
    if (pagination?.page) {
      dispatch(getPosts(Math.max(pagination.page - 1, 0)));
    }
  };
  const handleClickNext = () => {
    if (pagination && pagination.page < pagination.total - 1) {
      dispatch(getPosts(Math.min(pagination.page + 1, pagination.total - 1)));
    }
  };

  return !isLoading && pagination ? (
    <div className="flex justify-between text-sm">
      <div
        role="button"
        className={`flex w-fit flex-row items-center justify-center gap-x-2 rounded-lg px-10 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 ${
          pagination.page
            ? 'bg-green-400 hover:bg-green-500 focus:ring-green-600'
            : 'bg-gray-300'
        }`}
        onClick={handleClickPrev}
      >
        Prev
      </div>

      <div
        role="button"
        className={`flex w-fit flex-row items-center justify-center gap-x-2 rounded-lg px-10 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 ${
          pagination.page < pagination.total - 1
            ? 'bg-green-400 hover:bg-green-500 focus:ring-green-600'
            : 'bg-gray-300'
        }`}
        onClick={handleClickNext}
      >
        Next
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Pagination;
