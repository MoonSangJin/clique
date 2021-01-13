import React from 'react';
import styled from 'styled-components';
import Folder from '../Components/Folder';
import ListFolder from '../Components/ListFolder';
import FolderListHeader from '../Modules/Folder/FolderListHeader';


export default function FolderRow({ bookmarkFolderList, type }) {
  return (
    <>
      <FolderListHeader />
      <Container>
        {
          type === 'card' ?
            bookmarkFolderList.map((folder_data, index) => {
              return <Folder key={index} {...{ folder_data }} />;
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
