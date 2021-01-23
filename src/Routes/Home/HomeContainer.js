import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBookmarkFolderRequest, fetchBookmarkRequest } from '../../Store/Bookmark/actions';

import HomePresenter from './HomePresenter';


const HomeScreenContainer = () => {
  const bookmarkReducer = useSelector((state) => state.bookmarkReducer);
  const userReducer = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (userReducer.user.isLoggedIn) {
      dispatch(fetchBookmarkRequest());
      dispatch(fetchBookmarkFolderRequest());
    }
  }, [dispatch, userReducer.user.isLoggedIn]);

  return <HomePresenter {...{
    bookmarkFolderList: bookmarkReducer.bookmarkFolderList,
    bookmarkList: bookmarkReducer.bookmarkList,
    isLoggedIn: userReducer.user.isLoggedIn,
  }} />;
};

export default HomeScreenContainer;
