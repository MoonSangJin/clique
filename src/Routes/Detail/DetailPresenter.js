import React from 'react';
import styled from 'styled-components';

import Gnb from '../../Components/Gnb';
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
  width: 85%;
  display: flex;
  margin: 0 auto;
  border: solid 1px black;
`;

export default DetailPresenter;
