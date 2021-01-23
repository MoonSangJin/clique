import React from 'react';
import styled from 'styled-components';

import backSpace from '../assets/img/backSpace';
import DetailWhiteButton from './DetailWhiteButton';
import DetailPurpleButton from './DetailPurpleButton';
import OptionIcon from './OptionIcon';

const BookmarkItem = ({ detailData }) => {
  const { faviconUrl, title, url } = detailData;

  return (
    <ExternalLink href={url} target={'_blank'}>
      <UrlRow>
        <UrlImage src={faviconUrl} />
        <UrlTitle>{title}</UrlTitle>
        <Url>{url}</Url>
        <OptionIcon />
      </UrlRow>
    </ExternalLink>
  );
};

export default function DetailForm({ folderData, detailDataList }) {
  const openAllBookmarks = () => {
    detailDataList.forEach((detailData) => {
      window.open(detailData.url, '_blank');
    });
  };

  const goBack = () => window.history.back();

  return (
    <Container>
      <TitleRow>
        <Left>
          <BackSpace onClick={goBack} src={backSpace} />
          <Title>{folderData.name}</Title>
        </Left>
        <Right>
          <DetailWhiteButton onClick={openAllBookmarks} />
          <DetailPurpleButtonWrapper>
            <DetailPurpleButton />
          </DetailPurpleButtonWrapper>
        </Right>
      </TitleRow>
      <GrayHorizontail />
      <UrlListWrapper>
        {detailDataList.map((detailData) => {
          return <BookmarkItem key={detailData.id} {...{ detailData }} />;
        })}
      </UrlListWrapper>
    </Container>
  );
}

const ExternalLink = styled.a`
  all: unset;

  &:hover {
    cursor: pointer;
  }
`;

const Container = styled.div`
  min-height: calc(100vh - 122px);
  width: 100%;
  background: #ffffff;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.08);
  border-radius: 8px;

  margin-left: 20px;
  padding: 24px 34px;
  box-sizing: border-box;
`;

const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BackSpace = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 12px;
  
  cursor: pointer;
`;

const Title = styled.div`
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #070701;
`;

const DetailPurpleButtonWrapper = styled.div`
  margin-left: 14px;
`;

const GrayHorizontail = styled.div`
  margin-top: 16px;
  height: 0;
  border: 1px solid rgba(222, 227, 230, 0.8);
`;

const UrlListWrapper = styled.div`
  margin-top: 20px;

  max-height: 500px;
  overflow: scroll;
`;

const UrlRow = styled.div`
  display: flex;
  align-items: center;
  height: 44px;

  box-sizing: border-box;

  :hover {
    background-color: #f5f7f8;
  }
`;

const UrlImage = styled.img`
  width: 16px;
  height: 16px;
  margin: 0 17px 0 16px;
  flex-shrink: 0;
`;

const UrlTitle = styled.div`
  // Todo(maitracle): 이유는 모르지만 width값을 부여해야만 flex 속성이 작용하여 적절한 가로크기를 찾아간다.
  //                  이유를 찾아 width 속성 없이 해결한다.
  width: 10px;
  margin-right: 76px;
  flex: 1 1 10px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  font-family: Poppins;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.02em;
  color: #000000;
`;

const Url = styled.div`
  width: 178px;
  display: block;
  overflow: hidden;
  height: 21px;
  margin-right: 14px;
  text-overflow: ellipsis;
  text-align: right;
  white-space: nowrap;

  font-family: Poppins;
  font-size: 12px;
  line-height: 17px;
  letter-spacing: -0.02em;
  text-decoration-line: underline;
  color: #90a0ad;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
`;
