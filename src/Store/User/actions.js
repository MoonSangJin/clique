import { createAction } from '@reduxjs/toolkit';

export const SIGN_IN_REQUEST = 'users/SIGN_IN_REQUEST';
export const FETCH_USER_REQUEST = 'users/FETCH_USER_REQUEST';
export const SET_USER_INFO = 'users/SET_USER_INFO';
export const REMOVE_USER_INFO = 'users/REMOVE_USER_INFO';

export const SET_SIGN_IN_ERROR_MESSAGE = 'users/SET_SIGN_IN_ERROR_MESSAGE';

export const signInRequest = createAction(SIGN_IN_REQUEST);
export const fetchUserRequest = createAction(FETCH_USER_REQUEST);
export const setUserInfo = createAction(SET_USER_INFO);
export const removeUserInfo = createAction(REMOVE_USER_INFO);

export const setSignInErrorMessage = createAction(SET_SIGN_IN_ERROR_MESSAGE);
