import { createReducer } from '@reduxjs/toolkit';
import { dumbStateDecrease, dumbStateIncrease, dumbStateIncreaseByAmount } from './actions';


const initState = {
  dumbState: 0,
};


const userReducer = createReducer(initState, {
  [dumbStateIncrease]: (state) => ({
    dumbState: state.dumbState + 1,
  }),
  [dumbStateDecrease]: (state) => ({
    dumbState: state.dumbState - 1,
  }),
  [dumbStateIncreaseByAmount]: (state, action) => ({
    dumbState: state.dumbState + action.payload,
  }),
});

export default userReducer;
