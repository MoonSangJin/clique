import { createAction } from '@reduxjs/toolkit';


export const SIGN_IN_REQUEST = 'users/SIGN_IN_REQUEST';
export const SET_USER_INFO = 'users/SET_USER_INFO';
export const SIGN_IN_FAILURE = 'users/SIGN_IN_FAILURE';

export const signInRequest = createAction(SIGN_IN_REQUEST);
export const setUserInfo = createAction(SET_USER_INFO);
export const signInFailure = createAction(SIGN_IN_FAILURE);