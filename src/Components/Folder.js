import React from 'react';
import styled from 'styled-components';
import Example from '../assets/img/example.png';
import folder from '../assets/img/folder.svg';
import option from '../assets/img/option.svg';
import verticalLine from '../assets/img/verticalLine.svg';
import LargeText from '../Components/LargeText';
import GrayText from '../Components/GrayText';

export default function Folder({ favIconUrl, title, url, completeList }) {
  return (
    <Container>
      <FolderImage {...{ favIconUrl }} />
      <TextRow>
        <LargeText text={`${title}`} fontSize={20} fontWeight={'normal'} />
        <GrayText text={`${url}`} />
      </TextRow>
      <FaviconRow>
        <Icon>
          <DefaultFolder src={folder} alt={folder} />
          <VerticalLine src={verticalLine} />
          {completeList.map((data, index) => {
            return (
              <img key={index} src={data.favIconUrl} alt={data.favIconUrl} />
            );
          })}
          <img src={folder} />
          <img src={folder} />
          <img src={folder} />
          <img src={folder} />
          <img src={folder} />
          <img src={folder} />
        </Icon>
        <OptionIcon src={option} alt={option} />
      </FaviconRow>
    </Container>
  );
}

const Container = styled.div`
  width: 372px;
  height: 482px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: space-around;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.08);
`;
const FolderImage = styled.div`
  width: 372px;
  height: 279.42px;
  background-image: url(${(props) => props.favIconUrl || { Example }});
  background-size: cover;
`;
const TextRow = styled.div`
  margin-left: 35px;
`;
const FaviconRow = styled.div`
  display: flex;
  justify-content: space-around;
`;
const Icon = styled.div`
  display: flex;
  width: 225px;
  overflow-x: hidden;
`;
const DefaultFolder = styled.img``;
const VerticalLine = styled.img`
  margin-left: 10px;
  margin-right: 10px;
`;
const OptionIcon = styled.img``;
