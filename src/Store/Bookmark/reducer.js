import { createReducer } from '@reduxjs/toolkit';

import {
  deleteBookmarkFolderFailure,
  deleteBookmarkFolderSuccess,
  fetchBookmarkFailure,
  fetchBookmarkFolderFailure,
  fetchBookmarkFolderSuccess,
  fetchBookmarkSuccess,
  renameBookmarkFolderFailure,
  renameBookmarkFolderSuccess,
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
  [renameBookmarkFolderSuccess]: (state) => {
    // Todo(MoonSangJin): reducer action 내부의 state에서 bookmarkList에 접근이 안되어 renameBookmarkFolderSuccess 로직을 넣을 수 없다.
    //                  현재는 saga에서 delete에 성공했을 때 deleteBookmarkFolderSuccess 대신 fetchBookmarkFolderRequest를 dispatch 한다.

    return state;
  },
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
  }),
  [fetchBookmarkFailure]: (state) => state,
});

export default bookmarkReducer;
