import React from 'react';
import styled from 'styled-components';
import Folder from '../Components/Folder';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;
export default function FolderRow() {
  return (
    <Container>
      <Folder />
      <Folder />
      <Folder />
      <Folder />
      <Folder />
      <Folder />
      <Folder />
      <Folder />
    </Container>
  );
}
