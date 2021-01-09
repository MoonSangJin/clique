import { createReducer } from '@reduxjs/toolkit';

import { fetchBookmarkSuccess, fetchBookmarkFailure } from './actions';

const initState = {
  bookmarkFolder: [{ folder_title: '' }],
  bookmark: [{ title: '', url: '', favIconUrl: '' }],
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
    bookmark: [
      {
        ...state.bookmark,
        bookmark: [
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
    bookmark: [
      {
        ...state.bookmark,
        bookmark: [
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
