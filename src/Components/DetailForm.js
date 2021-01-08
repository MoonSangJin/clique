import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import backSpace from '../assets/img/backSpace';
import DetailWhiteButton from './DetailWhiteButton';
import DetailPurpleButton from './DetailPurpleButton';
import OptionIcon from './OptionIcon';
export default function DetailForm({ folder_data, detailData }) {
  const { folder_title } = folder_data;
  const { favIconUrl, title, url } = detailData;
  return (
    <Container>
      <TitleRow>
        <Left>
          <BackSpace src={backSpace} />
          <Title>{folder_title}</Title>
        </Left>
        <Right>
          <DetailWhiteButton />
          <DetailPurpleButton />
        </Right>
      </TitleRow>
      <GrayHorizontail />
      <UrlRow>
        <Left>
          <UrlImage src={favIconUrl} />
          <UrlTitle>{title}</UrlTitle>
        </Left>
        <Right>
          <Url>{url}</Url>
          <OptionIcon />
        </Right>
      </UrlRow>
    </Container>
  );
}

const Container = styled.div`
  width: 1100px;
  background: #ffffff;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;

  margin-left: 30px;
`;
const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 13px;
`;
const BackSpace = styled.img`
  width: 30px;
  height: 30px;

  margin: 5px;
`;
const Title = styled.div`
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  /* identical to box height */
  letter-spacing: -0.02em;
  color: #070701;

  margin: 5px;
`;
const GrayHorizontail = styled.div`
  margin-left: 10px;
  margin-right: 10px;
  height: 0px;
  border: 1px solid rgba(222, 227, 230, 0.8);
`;
const UrlRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 13px;
`;
const UrlImage = styled.img`
  width: 30px;
  height: 30px;

  margin: 5px;
`;
const UrlTitle = styled.div`
  width: 600px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
  /* identical to box height */
  letter-spacing: -0.02em;
  color: #000000;

  margin: 10px;
`;
const Url = styled.div`
  width: 200px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 23px;
  /* identical to box height */

  letter-spacing: -0.02em;
  text-decoration-line: underline;
  color: #90a0ad;

  margin-right: 15px;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;
const Right = styled.div`
  display: flex;
  align-items: center;
`;
