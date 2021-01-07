import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Gnb from '../../Components/Gnb';
import SearchInput from '../../Components/SearchInput';
import Folder from '../../Components/Folder';
import DetailForm from '../../Components/DetailForm';
const DetailPresenter = ({ data, detailData }) => {
  const folder_data = data;
  return (
    <>
      <Gnb />
      <SearchInput />
      <Wrapper>
        <Folder {...{ folder_data }} />
        <DetailForm {...{ folder_data, detailData }} />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
`;
export default DetailPresenter;
