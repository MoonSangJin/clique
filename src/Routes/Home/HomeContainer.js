import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBookmarkFolderRequest, fetchBookmarkRequest } from '../../Store/Bookmark/actions';

import HomePresenter from './HomePresenter';


const HomeScreenContainer = () => {
  const bookmarkReducer = useSelector((state) => state.bookmarkReducer);
  const userReducer = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const [listType, setListType] = useState('card');

  useEffect(() => {
    if (userReducer.user.isLoggedIn) {
      dispatch(fetchBookmarkRequest());
      dispatch(fetchBookmarkFolderRequest());
    }
  }, [
    dispatch,
    userReducer.user.isLoggedIn,
  ]);

  const setListToCardType = () => setListType('card');

  const setListToListType = () => setListType('list');

  return (
    <HomePresenter
      bookmarkFolderList={bookmarkReducer.bookmarkFolderList}
      bookmarkList={bookmarkReducer.bookmarkList}
      isLoggedIn={userReducer.user.isLoggedIn}
      listType={listType}
      setListToCardType={setListToCardType}
      setListToListType={setListToListType}
    />
  );
};

export default HomeScreenContainer;
