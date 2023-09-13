import { createSlice, Dispatch } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';

import { IPost, ICategory } from '@/@types/blog';
import { IPagination } from '@/@types/pagination';

export type IBlogState = {
  isLoading: boolean;
  error: Error | string | null;
  posts: IPost[] | null;
  categories: ICategory[] | null;
  pagination: IPagination | null;
};

const initialState: IBlogState = {
  isLoading: false,
  error: null,
  posts: [],
  categories: [],
  pagination: null,
};

const slice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true;
    },

    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    getPostsSuccess(state, action) {
      state.isLoading = false;
      state.posts = action.payload.posts;
      state.pagination = action.payload.pagination;
    },

    getCategoriesSuccess(state, action) {
      state.isLoading = false;
      state.categories = action.payload.categories;
    },
  },
});

export default slice.reducer;

export const { startLoading, hasError, getPostsSuccess, getCategoriesSuccess } =
  slice.actions;

export const getPosts = (page: number = 0) => {
  return async (dispatch: Dispatch) => {
    dispatch(startLoading());
    try {
      const { data }: AxiosResponse = await axios.get(
        `/api/posts/?page=${page}`,
      );
      dispatch(getPostsSuccess(data));
    } catch (error) {
      dispatch(hasError(error));
    }
  };
};

export const getCategories = () => {
  return async (dispatch: Dispatch) => {
    dispatch(startLoading());
    try {
      const { data }: AxiosResponse = await axios.get('/api/categories');
      dispatch(getCategoriesSuccess(data));
    } catch (error) {
      dispatch(hasError(error));
    }
  };
};
