import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './User/reducer';
import signUpReducer from './SignUp/reducer';
import bookmarkReducer from './Bookmark/reducer';


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['bookmarkReducer'],
};

const rootReducer = combineReducers({
  userReducer,
  signUpReducer,
  bookmarkReducer,
});

export default persistReducer(persistConfig, rootReducer);
