import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactGa from 'react-ga';

import { fetchBookmarkFolderRequest, fetchBookmarkRequest } from '../../Store/Bookmark/actions';
import { getSearchInputBackgroundUrl, setSearchInputBackgroundUrl } from '../../Utils/searchBackgroundHandler';
import searchInputBackgroundOne from '../../assets/img/SearchInputBackgrounds/1.png';
import HomePresenter from './HomePresenter';


const HomeScreenContainer = () => {
  const bookmarkReducer = useSelector((state) => state.bookmarkReducer);
  const userReducer = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const [listType, setListType] = useState('card');

  useEffect(() => {
    ReactGa.pageview('/');
  }, []);

  useEffect(() => {
    if (userReducer.user.isLoggedIn) {
      dispatch(fetchBookmarkRequest());
      dispatch(fetchBookmarkFolderRequest());
    }
  }, [
    dispatch,
    userReducer.user.isLoggedIn,
  ]);

  useEffect(() => {
    const savedType = localStorage.getItem('listType');
    setListType(savedType ? savedType : 'card');
  }, []);

  const searchInputBackgroundUrl = useMemo(() => {
    return getSearchInputBackgroundUrl() || searchInputBackgroundOne;
  }, []);

  const changeSearchInputBackgroundUrl = (url) => {
    setSearchInputBackgroundUrl(url);
  };

  const setListToCardType = () => {
    setListType('card');
    localStorage.setItem('listType', 'card');
  };

  const setListToListType = () => {
    setListType('list');
    localStorage.setItem('listType', 'list');
  };

  return (
    <HomePresenter
      searchInputBackgroundUrl={searchInputBackgroundUrl}
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
