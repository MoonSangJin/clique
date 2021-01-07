import { combineReducers } from 'redux';
import userReducer from './User/reducer';
import signUpReducer from './SignUp/reducer';


const rootReducer = combineReducers({
  userReducer,
  signUpReducer,
});

export default rootReducer;
