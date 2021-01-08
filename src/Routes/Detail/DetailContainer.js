import React, { useState } from 'react';
import DetailPresenter from './DetailPresenter';
const mock_data = {
  folder_title: 'folder1',
  time: '10',
  favorite: true,
};

const mock_detail = {
  favIconUrl:
    'https://cdn.sstatic.net/Sites/stackoverflow/Img/favicon.ico?v=ec617d715196',
  title:
    'title : stackover dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddaaaaaaaa',
  url: 'https://stackoverflow.comjfkldjsalkfjdasl;kjf;lajsldfjdafsadfasdfsadf/',
};
const DetailContainer = () => {
  const [data, setData] = useState(mock_data);
  const [detailData, setDetailData] = useState(mock_detail);

  return <DetailPresenter {...{ data, detailData }}></DetailPresenter>;
};
export default DetailContainer;
