import { createReducer } from '@reduxjs/toolkit';

import { removeUserInfo, setSignInErrorMessage, setUserInfo } from './actions';


const initState = {
  user: {
    isLoggedIn: false,
    id: -1,
    email: '',
    profileImageUrl: '',
  },
  signInErrorMessage: '',
};

const userReducer = createReducer(initState, {
  [setUserInfo]: (state, action) => ({
    ...state,
    user: {
      isLoggedIn: true,
      id: action.payload.id,
      email: action.payload.email,
      profileImageUrl: action.payload.profileImageUrl,
    },
  }),
  [removeUserInfo]: (state) => ({
    ...state,
    user: {
      isLoggedIn: false,
      id: -1,
      email: '',
      profileImageUrl: '',
    },
  }),
  [setSignInErrorMessage]: (state, action) => ({
    ...state,
    signInErrorMessage: action.payload,
  }),
});

export default userReducer;
