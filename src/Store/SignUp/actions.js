import { createAction } from '@reduxjs/toolkit';


export const SIGN_UP_REQUEST = 'signUp/SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'signUp/SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'signUp/SIGN_UP_FAILURE';

export const signUpRequest = createAction(SIGN_UP_REQUEST);
export const signUpSuccess = createAction(SIGN_UP_SUCCESS);
export const signUpFailure = createAction(SIGN_UP_FAILURE);
