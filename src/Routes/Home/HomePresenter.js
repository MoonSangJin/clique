import React from 'react';
import styled from 'styled-components';
import Gnb from '../../Components/Gnb';
import Background from '../../Components/Background';
import SearchInput from '../../Components/SearchInput';
import Folder from '../../Components/Folder';
const Container = styled.div``;

const HomeScreenPresenter = () => {
  return (
    <Container>
      <Gnb />
      <Background />
      <SearchInput />
      <Folder />
    </Container>
  );
};
export default HomeScreenPresenter;
