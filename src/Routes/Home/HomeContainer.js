import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBookmarkRequest } from '../../Store/Bookmark/actions';
import HomePresenter from './HomePresenter';
const mock_data = [
  {
    folder_title: 'folder1',
    time: 'Last updated 3 mins ago',
    favorite: true,
  },
  {
    folder_title: 'folder2',
    time: 'Last updated 3 mins ago',
    favorite: false,
  },
  {
    folder_title: 'folder3',
    time: 'Last updated 3 mins ago',
    favorite: false,
  },
  {
    folder_title: 'folder4',
    time: 'Last updated 3 mins ago',
    favorite: true,
  },
  {
    folder_title: 'folder5',
    time: 'Last updated 3 mins ago',
    favorite: false,
  },
  {
    folder_title: 'folder6',
    time: 'Last updated 3 mins ago',
    favorite: true,
  },
  {
    folder_title: 'folder7',
    time: 'Last updated 3 mins ago',
    favorite: true,
  },
  {
    folder_title: 'folder8',
    time: 'Last updated 3 mins ago',
    favorite: false,
  },
];

const HomeScreenContainer = () => {
  const bookmarkReducer = useSelector((state) => state.bookmarkReducer);
  const dispatch = useDispatch();
  const [data, setData] = useState(mock_data);

  return <HomePresenter {...{ data }}></HomePresenter>;
};
export default HomeScreenContainer;
