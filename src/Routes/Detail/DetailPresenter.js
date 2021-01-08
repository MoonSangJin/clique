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
      <Wrapper>
        <Folder {...{ folder_data }} />
        <DetailForm {...{ folder_data, detailData }} />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 90%;
  display: flex;
  margin: 0 auto;
`;
export default DetailPresenter;
