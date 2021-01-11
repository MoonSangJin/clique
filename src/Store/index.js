import { combineReducers } from 'redux';
import userReducer from './User/reducer';
import signUpReducer from './SignUp/reducer';
import bookmarkReducer from './Bookmark/reducer';

const rootReducer = combineReducers({
  userReducer,
  signUpReducer,
  bookmarkReducer,
});

export default rootReducer;
