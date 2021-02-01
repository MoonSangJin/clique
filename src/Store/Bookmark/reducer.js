import { createReducer } from '@reduxjs/toolkit';

import {
  deleteBookmarkFolderFailure,
  deleteBookmarkFolderSuccess,
  fetchBookmarkFailure,
  fetchBookmarkFolderFailure,
  fetchBookmarkFolderSuccess,
  fetchBookmarkSuccess, removeBookmarkInfo,
  renameBookmarkFolderFailure,
  renameBookmarkFolderSuccess,
} from './actions';

const initState = {
  bookmarkFolderList: [],
  bookmarkList: [],
  isInitializedBookmarkFolderList: false,
  isInitializedBookmarkList: false,
};

const bookmarkReducer = createReducer(initState, {
  [fetchBookmarkFolderSuccess]: (state, action) => ({
    ...state,
    bookmarkFolderList: action.payload.bookmarkFolderList,
    isInitializedBookmarkFolderList: true,
  }),

  [fetchBookmarkFolderFailure]: (state) => ({
    ...state,
    isInitializedBookmarkFolderList: false,
  }),
  [renameBookmarkFolderSuccess]: (state) => ({
    ...state,
  }),
  [renameBookmarkFolderFailure]: (state) => state,
  [deleteBookmarkFolderSuccess]: (state) => {
    // Todo(maitracle): reducer action 내부의 state에서 bookmarkList에 접근이 안되어 deleteBookmarkFolderSuccess 로직을 넣을 수 없다.
    //                  현재는 saga에서 delete에 성공했을 때 deleteBookmarkFolderSuccess 대신 fetchBookmarkFolderRequest를 dispatch 한다.
    return state;
  },
  [deleteBookmarkFolderFailure]: (state) => state,
  [fetchBookmarkSuccess]: (state, action) => ({
    ...state,
    bookmarkList: action.payload.bookmarkList,
    isInitializedBookmarkList: true,
  }),
  [fetchBookmarkFailure]: (state) => ({
    ...state,
    isInitializedBookmarkList: false,
  }),
  [removeBookmarkInfo]: (state) => ({
    ...state,
    bookmarkFolderList: [],
    bookmarkList: [],
    isInitializedBookmarkFolderList: false,
    isInitializedBookmarkList: false,
  }),
});

export default bookmarkReducer;
