import { combineReducers } from 'redux';
// Slices
import blogReducer from './slices/blog';

const rootReducer = combineReducers({
  blog: blogReducer,
});

export default rootReducer;
