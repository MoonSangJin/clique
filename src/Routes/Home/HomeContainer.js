import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactGa from 'react-ga';

import { fetchBookmarkFolderRequest, fetchBookmarkRequest } from '../../Store/Bookmark/actions';
import { getSearchInputBackgroundUrl, setSearchInputBackgroundUrl } from '../../Utils/searchBackgroundHandler';
import searchInputBackgroundOne from '../../assets/img/SearchInputBackgrounds/search1.png';
import HomePresenter from './HomePresenter';


const HomeScreenContainer = () => {
  const bookmarkReducer = useSelector((state) => state.bookmarkReducer);
  const userReducer = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const [listType, setListType] = useState('card');
  const [isOpenChangeBackgroundModal, setIsOpenChangeBackgroundModal] = useState(false);
  const [isShowChangeCoverButton, setIsShowChangeCoverButton] = useState(false);


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
    // 함수에서 isOpenChangeBackgroundModal를 사용하지 않지만, 배경화면 변경 모달이 꺼질 때 배경이 바뀌었을 수 있으므로 url을 다시 계산한다.
    return getSearchInputBackgroundUrl() || searchInputBackgroundOne
  }, [isOpenChangeBackgroundModal]);

  const changeSearchInputBackground = (url) => (_e) => {
    setSearchInputBackgroundUrl(url);
    setIsOpenChangeBackgroundModal(false);
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
      searchInputHandler={{
        backgroundUrl: searchInputBackgroundUrl,
        isOpenChangeBackgroundModal: isOpenChangeBackgroundModal,
        isOpenModalHandler: setIsOpenChangeBackgroundModal,
        changeCover: changeSearchInputBackground,
        isShowChangeCoverButton: isShowChangeCoverButton,
        setIsShowChangeCoverButton: setIsShowChangeCoverButton,
      }}
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
