import React from 'react';
import styled from 'styled-components';
import Example from '../assets/img/example.png';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 20%;
`;
const FolderImage = styled.img`
  width: 100%;
`;
const FolderTitle = styled.div``;
const FolderDescription = styled.div``;

export default function Folder() {
  return (
    <Container>
      <FolderImage src={Example} />
      <FolderTitle>Title</FolderTitle>
      <FolderDescription>Description</FolderDescription>
    </Container>
  );
}
