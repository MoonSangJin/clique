import { createReducer } from '@reduxjs/toolkit';

import { removeUserInfo, setUserInfo } from './actions';


const initState = {
  user: {
    isLoggedIn: false,
    id: -1,
    email: '',
    profileImageUrl: '',
  },
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
});

export default userReducer;
