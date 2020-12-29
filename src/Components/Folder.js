import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Example from '../assets/img/example.png';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  width: 20rem;
`;
const FolderImage = styled.img`
  width: 100px;
  height: 100px;
`;
const FolderTitle = styled.div``;
const FolderDescription = styled.div``;
const Wrapper = styled.div``;
export default function Folder({ favIconUrl, title, url }) {
  return (
    <Container>
      <Wrapper>
        <FolderImage src={favIconUrl} />
      </Wrapper>
      <FolderTitle>{title}</FolderTitle>
      <FolderDescription>{url}</FolderDescription>
    </Container>
  );
}
