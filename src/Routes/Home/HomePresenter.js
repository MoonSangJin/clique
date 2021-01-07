import React from 'react';
import styled from 'styled-components';
import Gnb from '../../Components/Gnb';
import Background from '../../Components/Background';
import SearchInput from '../../Components/SearchInput';
import FolderRow from '../../Components/FolderRow';
import { Link } from 'react-router-dom';

const HomeScreenPresenter = ({ data }) => {
  return (
    <Container>
      <Gnb />
      <Link to="/detail/">detail</Link>
      <Link to="/sign-in/">sign-in</Link>
      <Link to="/sign-up/">sign-up</Link>
      <Background />
      <SearchRow>
        <SearchInput />
      </SearchRow>
      <FolderRow {...{ data }} />
    </Container>
  );
};

const Container = styled.div``;

const SearchRow = styled.div`
  display: flex;
  justify-content: center;
`;

export default HomeScreenPresenter;
