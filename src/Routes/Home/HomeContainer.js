import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBookmarkFolderRequest, fetchBookmarkRequest } from '../../Store/Bookmark/actions';

import HomePresenter from './HomePresenter';


const HomeScreenContainer = () => {
  const bookmarkReducer = useSelector((state) => state.bookmarkReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBookmarkRequest());
    dispatch(fetchBookmarkFolderRequest());
  }, [dispatch]);

  return <HomePresenter {...{ bookmarkFolderList: bookmarkReducer.bookmarkFolderList }} />;
};

export default HomeScreenContainer;
