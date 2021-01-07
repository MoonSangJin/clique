import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import backSpace from '../assets/img/backSpace';

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
          <WhiteButton>Open All</WhiteButton>
          <PurpleButton>Add</PurpleButton>
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
        </Right>
      </UrlRow>
    </Container>
  );
}

const Container = styled.div`
  width: 1232px;
  height: 856px;
  background: #ffffff;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
`;
const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
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
`;
const UrlImage = styled.img`
  margin-right: 10px;
`;
const UrlTitle = styled.div`
  width: 751px;
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
`;
const Url = styled.div`
  width: 238px;
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
`;
const WhiteButton = styled.div`
  width: 86px;
  height: 36px;
  border: 1.5px solid #7785ff;
  box-sizing: border-box;
  border-radius: 3px;

  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  /* identical to box height */

  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: -0.02em;

  color: #7785ff;
  &:hover {
    cursor: pointer;
  }
`;
const PurpleButton = styled.div`
  width: 86px;
  height: 36px;
  background: #7785ff;
  border-radius: 3px;

  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  /* identical to box height */

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  letter-spacing: -0.02em;

  color: #ffffff;

  &:hover {
    cursor: pointer;
  }
`;
const BackSpace = styled.img`
  margin-right: 10px;
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
`;
const Left = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
`;
const Right = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;
