import { createReducer } from '@reduxjs/toolkit';

import {
  fetchBookmarkSuccess,
  fetchBookmarkFailure,
  fetchBookmarkFolderSuccess,
  fetchBookmarkFolderFailure,
} from './actions';

const initState = {
  bookmarkFolderList: [
    {
      id: 7,
      user: 3,
      name: '11111',
      is_favorite: true,
    },
    {
      id: 8,
      user: 3,
      name: '11111',
      is_favorite: true,
    },
  ],
  bookmarkList: [
    {
      id: 9,
      user: 3,
      title: '11111',
      bookmark_folder_id: 7,
      url: 'https://naver.com',
      scroll_pos: null,
      favicon_url: null,
    },
    {
      id: 10,
      user: 3,
      title: '11111',
      bookmark_folder_id: 8,
      url: 'https://naver.com',
      scroll_pos: null,
      favicon_url: null,
    },
    {
      id: 11,
      user: 3,
      title: '11111',
      bookmark_folder_id: 8,
      url: 'https://naver.com',
      scroll_pos: null,
      favicon_url: null,
    },
  ],
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
