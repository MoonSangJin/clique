import { createAction } from '@reduxjs/toolkit';


export const DUMB_STATE_INCREASE = 'users/DUMB_STATE_INCREASE';
export const DUMB_STATE_DECREASE = 'users/DUMB_STATE_DECREASE';
export const DUMB_STATE_INCREASE_BY_AMOUNT = 'users/DUMB_STATE_INCREASE_BY_AMOUNT';


export const dumbStateIncrease = createAction(DUMB_STATE_INCREASE);
export const dumbStateDecrease = createAction(DUMB_STATE_DECREASE);
export const dumbStateIncreaseByAmount = createAction(DUMB_STATE_INCREASE_BY_AMOUNT);
