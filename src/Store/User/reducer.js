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
      // Todo(maitracle): backend에서 인자를 camelCase로 넘겨주게 수정한 후 snake_case를 제거한다.
      profileImageUrl: action.payload.profile_image_url ? action.payload.profile_image_url : '',
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
