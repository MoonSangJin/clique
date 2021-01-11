import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import HomePresenter from './HomePresenter';


const HomeScreenContainer = () => {
  const bookmarkReducer = useSelector((state) => state.bookmarkReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    //dispatch(fetchBookmarkRequest());
  }, []);

  return <HomePresenter {...{ bookmarkFolderList: bookmarkReducer.bookmarkFolderList }} />;
};
export default HomeScreenContainer;
