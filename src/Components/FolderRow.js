import React from 'react';
import styled from 'styled-components';

import Folder from '../Components/Folder';
import ListFolder from '../Components/ListFolder';
import FolderListHeader from '../Modules/Folder/FolderListHeader';
import FirstImageSrc from '../assets/img/FolderItemImages/1.png';
import SecondImageSrc from '../assets/img/FolderItemImages/2.png';
import ThirdImageSrc from '../assets/img/FolderItemImages/3.png';
import FourthImageSrc from '../assets/img/FolderItemImages/4.png';
import BlankListFolderSrc from '../assets/img/blankListFolder.png';
import { Link } from 'react-router-dom';

const mapIndexToImageSrc = {
  0: FirstImageSrc,
  1: SecondImageSrc,
  2: ThirdImageSrc,
  3: FourthImageSrc,
};

export default function FolderRow({ bookmarkFolderList, isLoggedIn, type }) {
  return (
    <>
      <FolderListHeader />
      {isLoggedIn ? (
        <Container>
          {type === 'card'
            ? bookmarkFolderList.map((folderData, index) => {
                return (
                  <FolderWrapper
                    key={index}
                  >
                    <Folder
                      {...{ folderData }}
                      folderCoverImageSrc={mapIndexToImageSrc[index % 4]}
                    />
                  </FolderWrapper>
                );
              })
            : bookmarkFolderList.map((folderData, index) => {
                return <ListFolder key={index} {...{ folderData }} />;
              })}
        </Container>
      ) : (
        <NotLoggedInWrapper>
          <Image src={BlankListFolderSrc} />
          <Description>Sign in Clique and manage yout bookmarks</Description>
          <StyledLink to={'/sign-in'}>
            <ToSignInButton>
              Sign in&nbsp;<Bold>Clique</Bold>
            </ToSignInButton>
          </StyledLink>
        </NotLoggedInWrapper>
      )}
    </>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin: 20px auto 0 auto;
`;

const FolderWrapper = styled.div`
  margin-right: 19px;
  
  &:nth-child(4n) {
    margin-right: 0;
  }
`;

const NotLoggedInWrapper = styled.div``;

const Image = styled.img`
  display: block;
  width: 64px;
  height: 64px;
  margin: 59px auto 0 auto;
`;

const Description = styled.div`
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  letter-spacing: -0.02em;

  color: #070701;
`;

const StyledLink = styled(Link)`
  all: unset;
`;

const ToSignInButton = styled.button`
  display: block;
  width: 223px;
  height: 43px;
  margin: 6px auto 200px auto;
  background: #7785ff;
  border-radius: 3px;
  border: none;
  align-items: center;

  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #ffffff;
`;

const Bold = styled.span`
  font-weight: bold;
`;
