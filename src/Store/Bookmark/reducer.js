import { createReducer } from '@reduxjs/toolkit';

import { fetchBookmarkSuccess, fetchBookmarkFailure } from './actions';

const initState = {
  bookmarkFolder: [],
  bookmarkList: [],
};

const bookmarkReducer = createReducer(initState, {
  [fetchBookmarkSuccess]: (state, action) => ({
    ...state,
    bookmarkFolder: [
      {
        ...state.bookmarkFolder,
        bookmarkFolder: [{ folder_title: action.payload.folder_title }],
      },
    ],
    bookmarkList: [
      {
        ...state.bookmarkList,
        bookmarkList: [
          {
            title: action.payload.title,
            url: action.payload.url,
            favIconUrl: action.payload.url,
          },
        ],
      },
    ],
  }),
  [fetchBookmarkFailure]: (state) => ({
    ...state,
    bookmarkFolder: [
      { ...state.bookmarkFolder, bookmarkFolder: [{ folder_title: '' }] },
    ],
    bookmarkList: [
      {
        ...state.bookmarkList,
        bookmarkList: [
          {
            title: '',
            url: '',
            favIconUrl: '',
          },
        ],
      },
    ],
  }),
});

export default bookmarkReducer;
