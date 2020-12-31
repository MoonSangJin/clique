import { combineReducers } from 'redux';
import userReducer from './User/reducer';


const rootReducer = combineReducers({
  userReducer,
});

export default rootReducer;
