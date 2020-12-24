import React from 'react';
import styled from 'styled-components';
import Gnb from '../../Components/Gnb';
import Background from '../../Components/Background';
import SearchInput from '../../Components/SearchInput';
import FolderRow from '../../Components/FolderRow';
import { Link } from 'react-router-dom';
const Container = styled.div``;

const HomeScreenPresenter = () => {
  return (
    <Container>
      <Gnb />
      <Link to="/detail/">detail</Link>
      <Background />
      <SearchInput />
      <FolderRow />
    </Container>
  );
};
export default HomeScreenPresenter;
