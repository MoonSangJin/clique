import React from 'react';
import styled from 'styled-components';

import Folder from '../Components/Folder';
import FolderListHeader from '../Modules/Folder/FolderListHeader';
import BlankListFolderSrc from '../assets/img/blankListFolder.png';
import { Link } from 'react-router-dom';


export default function FolderRow({ bookmarkFolderList, isLoggedIn, type, setListToCardType, setListToListType }) {
  return (
    <>
      <FolderListHeader {...{type, setListToCardType, setListToListType}} />
      {isLoggedIn ? (
        <>
          {
            bookmarkFolderList.length === 0 ?
              <EmptyListWrapper>
                <Image src={BlankListFolderSrc} />
                <Description>You have not yet created a Bookmark Folder with Clique.</Description>
                <AdditionalDescription>Folders appears here once created.</AdditionalDescription>
                <StyledLink to={'#'}>
                  <ToSignInButton>
                    Learn how to use&nbsp;<Bold>Clique!</Bold>
                  </ToSignInButton>
                </StyledLink>
              </EmptyListWrapper>
              : null
          }
          <Container>
            {
              bookmarkFolderList.map((folderData, index) => {
                return (
                  <FolderWrapper
                    key={index}
                    type={type}
                  >
                    <Folder
                      {...{ folderData }}
                      type={type}
                    />
                  </FolderWrapper>
                );
              })
            }
          </Container>
        </>
      ) : (
        <EmptyListWrapper>
          <Image src={BlankListFolderSrc} />
          <Description>Sign in Clique and manage your bookmarks</Description>
          <StyledLink to={'/sign-in'}>
            <ToSignInButton>
              Sign in&nbsp;<Bold>Clique</Bold>
            </ToSignInButton>
          </StyledLink>
        </EmptyListWrapper>
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
  
  &:nth-child(${props => props.type === 'card' ? '4n' : '2n'}) {
    margin-right: 0;
  }
`;

const EmptyListWrapper = styled.div``;

const Image = styled.img`
  display: block;
  width: 64px;
  height: 64px;
  margin: 59px auto 0 auto;
`;

const Description = styled.div`
  margin-top: 14px;
  
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #070701;
`;

const AdditionalDescription = styled.div`
  margin-top: 5px;

  font-size: 12px;
  line-height: 18px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #90A0AD;
`;

const StyledLink = styled(Link)`
  all: unset;
`;

const ToSignInButton = styled.button`
  display: block;
  width: 223px;
  height: 43px;
  margin: 58px auto 200px auto;
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
  
  cursor: pointer;
`;

const Bold = styled.span`
  font-weight: bold;
`;
