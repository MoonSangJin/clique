import { createAction } from '@reduxjs/toolkit';

const FETCH_BOOKMARK_FOLDER_REQUEST = 'bookmarks/FETCH_BOOKMARK_FOLDER_REQUEST';
const FETCH_BOOKMARK_FOLDER_SUCCESS = 'bookmarks/FETCH_BOOKMARK_FOLDER_SUCCESS';
const FETCH_BOOKMARK_FOLDER_FAILURE = 'bookmarks/FETCH_BOOKMARK_FOLDER_FAILURE';

const RENAME_BOOKMARK_FOLDER_REQUEST =
  'bookmarks/RENAME_BOOKMARK_FOLDER_REQUEST';
const RENAME_BOOKMARK_FOLDER_SUCCESS =
  'bookmarks/RENAME_BOOKMARK_FOLDER_SUCCESS';
const RENAME_BOOKMARK_FOLDER_FAILURE =
  'bookmarks/RENAME_BOOKMARK_FOLDER_FAILURE';

const DELETE_BOOKMARK_FOLDER_REQUEST =
  'bookmarks/DELETE_BOOKMARK_FOLDER_REQUEST';
const DELETE_BOOKMARK_FOLDER_SUCCESS =
  'bookmarks/DELETE_BOOKMARK_FOLDER_SUCCESS';
const DELETE_BOOKMARK_FOLDER_FAILURE =
  'bookmarks/DELETE_BOOKMARK_FOLDER_FAILURE';

const FETCH_BOOKMARK_REQUEST = 'bookmarks/FETCH_BOOKMARK_REQUEST';
const FETCH_BOOKMARK_SUCCESS = 'bookmarks/FETCH_BOOKMARK_SUCCESS';
const FETCH_BOOKMARK_FAILURE = 'bookmarks/FETCH_BOOKMARK_FAILURE';

const CREATE_BOOKMARK_REQUEST = 'bookmarks/CREATE_BOOKMARK_REQUEST';
const CREATE_BOOKMARK_SUCCESS = 'bookmarks/CREATE_BOOKMARK_SUCCESS';
const CREATE_BOOKMARK_FAILURE = 'bookmarks/CREATE_BOOKMARK_FAILURE';

const RENAME_BOOKMARK_REQUEST = 'bookmarks/RENAME_BOOKMARK_REQUEST';
const RENAME_BOOKMARK_SUCCESS = 'bookmarks/RENAME_BOOKMARK_SUCCESS';
const RENAME_BOOKMARK_FAILURE = 'bookmarks/RENAME_BOOKMARK_FAILURE';

export const fetchBookmarkFolderRequest = createAction(
  FETCH_BOOKMARK_FOLDER_REQUEST
);
export const fetchBookmarkFolderSuccess = createAction(
  FETCH_BOOKMARK_FOLDER_SUCCESS
);
export const fetchBookmarkFolderFailure = createAction(
  FETCH_BOOKMARK_FOLDER_FAILURE
);

export const renameBookmarkFolderRequest = createAction(
  RENAME_BOOKMARK_FOLDER_REQUEST
);
export const renameBookmarkFolderSuccess = createAction(
  RENAME_BOOKMARK_FOLDER_SUCCESS
);
export const renameBookmarkFolderFailure = createAction(
  RENAME_BOOKMARK_FOLDER_FAILURE
);

export const deleteBookmarkFolderRequest = createAction(
  DELETE_BOOKMARK_FOLDER_REQUEST
);
export const deleteBookmarkFolderSuccess = createAction(
  DELETE_BOOKMARK_FOLDER_SUCCESS
);
export const deleteBookmarkFolderFailure = createAction(
  DELETE_BOOKMARK_FOLDER_FAILURE
);

export const fetchBookmarkRequest = createAction(FETCH_BOOKMARK_REQUEST);
export const fetchBookmarkSuccess = createAction(FETCH_BOOKMARK_SUCCESS);
export const fetchBookmarkFailure = createAction(FETCH_BOOKMARK_FAILURE);

export const createBookmarkRequest = createAction(CREATE_BOOKMARK_REQUEST);
export const createBookmarkSuccess = createAction(CREATE_BOOKMARK_SUCCESS);
export const createBookmarkFailure = createAction(CREATE_BOOKMARK_FAILURE);

export const renameBookmarkRequest = createAction(RENAME_BOOKMARK_REQUEST);
export const renameBookmarkSuccess = createAction(RENAME_BOOKMARK_SUCCESS);
export const renameBookmarkFailure = createAction(RENAME_BOOKMARK_FAILURE);



