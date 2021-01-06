import { createReducer } from '@reduxjs/toolkit';
import { signUpFailure, signUpSuccess } from './actions';


const initState = {
  signUpResult: {
    result: '',
  },
};


const signUpReducer = createReducer(initState, {
  [signUpSuccess]: (state) => ({
    ...state,
    signUpResult: {
      ...state.signUpResult,
      result: 'success',
    },
  }),
  [signUpFailure]: (state) => ({
    ...state,
    signUpResult: {
      ...state.signUpResult,
      result: 'failure',
    },
  }),
});

export default signUpReducer;
