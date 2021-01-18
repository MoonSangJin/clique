import React from 'react';
import styled from 'styled-components';

import Folder from '../Components/Folder';
import ListFolder from '../Components/ListFolder';
import FolderListHeader from '../Modules/Folder/FolderListHeader';
import FirstImageSrc from  '../assets/img/FolderItemImages/1.png';
import SecondImageSrc from  '../assets/img/FolderItemImages/2.png';
import ThirdImageSrc from  '../assets/img/FolderItemImages/3.png';
import FourthImageSrc from  '../assets/img/FolderItemImages/4.png';


const mapIndexToImageSrc = {
  0: FirstImageSrc,
  1: SecondImageSrc,
  2: ThirdImageSrc,
  3: FourthImageSrc,
};

export default function FolderRow({ bookmarkFolderList, type }) {
  return (
    <>
      <FolderListHeader />
      <Container>
        {
          type === 'card' ?
            bookmarkFolderList.map((folder_data, index) => {
              return <Folder key={index} {...{ folder_data }} folderCoverImageSrc={mapIndexToImageSrc[index % 4]} />;
            }) :
            bookmarkFolderList.map((folder_data, index) => {
              return <ListFolder key={index} {...{ folder_data }} />;
            })
        }
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 20px auto 0 auto;
`;
