import React from 'react';
import styled from 'styled-components';

import Folder from '../../Components/Folder';
import DetailForm from '../../Components/DetailForm';

const DetailPresenter = ({ data, detailDataList, handleAddBookmark }) => {
  const folderData = data;
  return (
    <>
      <Wrapper>
        <FolderWrapper>
          <Folder {...{ folderData }} type={'card'} />
        </FolderWrapper>

        <BookmarksWrapper>
          <DetailForm {...{ folderData, detailDataList, handleAddBookmark }} />
        </BookmarksWrapper>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  max-width: 1185px;
  margin: 0 auto;
  display: flex;
`;

const FolderWrapper = styled.div`
  flex: 0 0;
`;

const BookmarksWrapper = styled.div`
  flex: 1 1;
`;

export default DetailPresenter;
