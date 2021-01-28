import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import DetailPresenter from './DetailPresenter';
import { createBookmarkRequest } from '../../Store/Bookmark/actions';


const DetailContainer = ({ match }) => {
  const { folderId } = match.params;
  const bookmarkReducer = useSelector((state) => state.bookmarkReducer);
  const dispatch = useDispatch();

  const handleAddBookmark = (payload) => {
    dispatch(createBookmarkRequest(payload));
  };

  const findBookmarkFolder = () => {
    const foundBookmarkFolder = bookmarkReducer.bookmarkFolderList.filter(
      (bookmarkFolder) => {
        return bookmarkFolder.id === Number(folderId);
      },
    );

    const notFoundBookmarkFolder = {
      id: -1,
      user: -1,
      name: '',
      isFavorite: false,
    };

    return foundBookmarkFolder.length >= 1
      ? foundBookmarkFolder[0]
      : notFoundBookmarkFolder;
  };

  const filterBookmarkList = () => {
    return bookmarkReducer.bookmarkList.filter((bookmark) => {
      return bookmark.bookmarkFolderId === Number(folderId);
    });
  };

  return (
    <DetailPresenter
      {...{ data: findBookmarkFolder(), detailDataList: filterBookmarkList(), handleAddBookmark }}
    />
  );
};
export default DetailContainer;
