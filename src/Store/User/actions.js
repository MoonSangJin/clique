import { createAction } from '@reduxjs/toolkit';


export const DUMB_STATE_INCREASE = 'users/DUMB_STATE_INCREASE';

export const DUMB_STATE_DECREASE = 'users/DUMB_STATE_DECREASE';

export const DUMB_STATE_INCREASE_BY_AMOUNT = 'users/DUMB_STATE_INCREASE_BY_AMOUNT';


export const DUMB_API_REQUEST = 'users/DUMB_API_REQUEST';

export const DUMB_API_SUCCESS = 'users/DUMB_API_SUCCESS';

export const DUMB_API_FAILURE = 'users/DUMB_API_FAILURE';


export const dumbStateIncrease = createAction(DUMB_STATE_INCREASE);
export const dumbStateDecrease = createAction(DUMB_STATE_DECREASE);
export const dumbStateIncreaseByAmount = createAction(DUMB_STATE_INCREASE_BY_AMOUNT);

export const dumbApiRequest = createAction(DUMB_API_REQUEST);
export const dumbApiSuccess = createAction(DUMB_API_SUCCESS);
export const dumbApiFailure = createAction(DUMB_API_FAILURE);