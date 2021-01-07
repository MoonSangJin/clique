import React from 'react';
import styled from 'styled-components';
import Folder from '../Components/Folder';
import ListFolder from '../Components/ListFolder';
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export default function FolderRow({ data }) {
  return (
    <Container>
      {data.map((folder_data, index) => {
        return <Folder key={index} {...{ folder_data }} />;
      })}
      {data.map((folder_data, index) => {
        return <ListFolder key={index} {...{ folder_data }} />;
      })}
    </Container>
  );
}
