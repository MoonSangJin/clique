import React from 'react';

import DetailPresenter from './DetailPresenter';
import { useSelector } from 'react-redux';


const DetailContainer = ({ match }) => {
  const { folderId } = match.params;
  const bookmarkReducer = useSelector((state) => state.bookmarkReducer);

  const handleAddBookmark = () => {
    console.log('add bookmark dispatch!!!');
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
