import { createReducer } from '@reduxjs/toolkit';
import {
  dumbApiFailure,
  dumbApiSuccess,
  dumbStateDecrease,
  dumbStateIncrease,
  dumbStateIncreaseByAmount,
} from './actions';


const initState = {
  dumbState: 0,
  imageUrl: '',
};


const userReducer = createReducer(initState, {
  [dumbStateIncrease]: (state) => ({
    ...state,
    dumbState: state.dumbState + 1,
  }),
  [dumbStateDecrease]: (state) => ({
    ...state,
    dumbState: state.dumbState - 1,
  }),
  [dumbStateIncreaseByAmount]: (state, action) => ({
    ...state,
    dumbState: state.dumbState + action.payload,
  }),
  [dumbApiSuccess]: (state, action) => ({
    ...state,
    imageUrl: action.payload,
  }),
  [dumbApiFailure]: (state) => ({
    ...state,
    imageUrl: '',
  }),
});

export default userReducer;
