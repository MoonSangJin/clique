import { createReducer } from '@reduxjs/toolkit';

import {
  fetchBookmarkSuccess,
  fetchBookmarkFailure,
  fetchBookmarkFolderSuccess,
  fetchBookmarkFolderFailure,
} from './actions';

const initState = {
  bookmarkFolderList: [],
  bookmarkList: [],
};

const bookmarkReducer = createReducer(initState, {
  [fetchBookmarkFolderSuccess]: (state, action) => ({
    ...state,
    bookmarkFolderList: action.payload.bookmarkFolderList,
  }),
  [fetchBookmarkFolderFailure]: (state) => state,

  [fetchBookmarkSuccess]: (state, action) => ({
    ...state,
    bookmarkList: action.payload.bookmarkList,
  }),
  [fetchBookmarkFailure]: (state) => state,
});

export default bookmarkReducer;
