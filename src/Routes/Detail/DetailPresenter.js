import React from 'react';
import styled from 'styled-components';

import Folder from '../../Components/Folder';
import DetailForm from '../../Components/DetailForm';


const DetailPresenter = ({ data, detailData }) => {
  const folder_data = data;
  return (
    <>
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
`;

export default DetailPresenter;
