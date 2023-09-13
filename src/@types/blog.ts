export type IPost = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  categories: number[];
};

export type ICategory = {
  id: number;
  name: string;
  slug: string;
};
