import React, { useState } from 'react';
import HomePresenter from './HomePresenter';
const mock_data = [
  {
    folder_title: 'folder1',
    time: '10',
    favorite: true,
  },
  {
    folder_title: 'folder2',
    time: '20',
    favorite: false,
  },
  {
    folder_title: 'folder3',
    time: '30',
    favorite: false,
  },
];
const HomeScreenContainer = () => {
  const [data, setData] = useState(mock_data);
  return <HomePresenter {...{ data }}></HomePresenter>;
};
export default HomeScreenContainer;
