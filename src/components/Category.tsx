import { ICategory } from '@/@types/blog';

export default function Category({ category }: { category: ICategory }) {
  return (
    <div className="w-fit rounded-full bg-blue-600 px-2 py-1.5 text-xs font-bold text-white">
      # {category?.name}
    </div>
  );
}
