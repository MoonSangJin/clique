import { createAction } from '@reduxjs/toolkit';

const FETCH_BOOKMARK_FOLDER_REQUEST = 'bookmarks/FETCH_BOOKMARK_FOLDER_REQUEST';
const FETCH_BOOKMARK_FOLDER_SUCCESS = 'bookmarks/FETCH_BOOKMARK_FOLDER_SUCCESS';
const FETCH_BOOKMARK_FOLDER_FAILURE = 'bookmarks/FETCH_BOOKMARK_FOLDER_FAILURE';
const FETCH_BOOKMARK_REQUEST = 'bookmarks/FETCH_BOOKMARK_REQUEST';
const FETCH_BOOKMARK_SUCCESS = 'bookmarks/FETCH_BOOKMARK_SUCCESS';
const FETCH_BOOKMARK_FAILURE = 'bookmarks/FETCH_BOOKMARK_FAILURE';

const DELETE_BOOKMARK_FOLDER_REQUEST =
  'bookmarks/DELETE_BOOKMARK_FOLDER_REQUEST';
const DELETE_BOOKMARK_FOLDER_SUCCESS =
  'bookmarks/DELETE_BOOKMARK_FOLDER_SUCCESS';
const DELETE_BOOKMARK_FOLDER_FAILURE =
  'bookmarks/DELETE_BOOKMARK_FOLDER_FAILURE';

export const fetchBookmarkFolderRequest = createAction(
  FETCH_BOOKMARK_FOLDER_REQUEST
);
export const fetchBookmarkFolderSuccess = createAction(
  FETCH_BOOKMARK_FOLDER_SUCCESS
);
export const fetchBookmarkFolderFailure = createAction(
  FETCH_BOOKMARK_FOLDER_FAILURE
);
export const fetchBookmarkRequest = createAction(FETCH_BOOKMARK_REQUEST);
export const fetchBookmarkSuccess = createAction(FETCH_BOOKMARK_SUCCESS);
export const fetchBookmarkFailure = createAction(FETCH_BOOKMARK_FAILURE);

export const deleteBookmarkFolderRequest = createAction(
  DELETE_BOOKMARK_FOLDER_REQUEST
);
export const deleteBookmarkFolderSuccess = createAction(
  DELETE_BOOKMARK_FOLDER_SUCCESS
);
export const deleteBookmarkFolderFailure = createAction(
  DELETE_BOOKMARK_FOLDER_FAILURE
);

//서버로부터 북마크,북마크 정보 폴더 받아오는 기능
//북마크,북마크 폴더 정보 담을 store 만들어야한다.
