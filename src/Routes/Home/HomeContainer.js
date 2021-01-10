import React, { useState } from 'react';
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
  const [data, setData] = useState(mock_data);
  return <HomePresenter {...{ data }} />;
};
export default HomeScreenContainer;
