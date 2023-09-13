import { IPost } from '@/@types/blog';
import Category from '@/components/Category';
// Redux
import { useSelector } from '@/redux/store';

export type IPostProps = {
  post: IPost;
};

export default function Post({ post }: IPostProps) {
  const { categories } = useSelector((store) => store.blog);
  const getCategoryById = (id: number) => {
    return categories?.find((category) => category.id === id);
  };

  return (
    post && (
      <div className="h-fit flex-1 rounded-lg shadow-primary md:h-[420px]">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="h-fit rounded-t-lg md:h-56"
        />

        <div className="flex flex-col space-y-3 p-2 lg:p-4">
          <div className="flex w-full flex-row flex-wrap gap-2">
            {categories &&
              post.categories &&
              post.categories.map((category) => (
                <Category key={category} category={getCategoryById(category)} />
              ))}
          </div>
          <p className="text-sm font-semibold text-gray-600">{post.title}</p>
          <p className="text-xs font-medium text-gray-400">{post.excerpt}</p>
        </div>
      </div>
    )
  );
}
