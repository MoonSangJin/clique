import React from 'react';
import styled from 'styled-components';

import FolderRow from '../../Components/FolderRow';
import SearchInput from '../../Modules/Folder/SearchInput';
import ChangeCoverModal from '../../Components/Modal/ChangeCoverModal';

import BackgroundOne from '../../assets/img/SearchInputBackgrounds/search1.png';
import BackgroundTwo from '../../assets/img/SearchInputBackgrounds/search2.jpg';
import BackgroundThree from '../../assets/img/SearchInputBackgrounds/search3.jpg';
import BackgroundFour from '../../assets/img/SearchInputBackgrounds/search4.jpg';
import BackgroundFive from '../../assets/img/SearchInputBackgrounds/search5.jpg';
import BackgroundSix from '../../assets/img/SearchInputBackgrounds/search6.jpg';
import BackgroundSeven from '../../assets/img/SearchInputBackgrounds/search7.jpg';
import BackgroundEight from '../../assets/img/SearchInputBackgrounds/search8.jpg';
import BackgroundNine from '../../assets/img/SearchInputBackgrounds/search9.jpg';
import BackgroundTen from '../../assets/img/SearchInputBackgrounds/search10.jpg';
import BackgroundEleven from '../../assets/img/SearchInputBackgrounds/search11.jpg';
import BackgroundTwelve from '../../assets/img/SearchInputBackgrounds/search12.jpg';


const HomeScreenPresenter = ({
  searchInputHandler,
  bookmarkFolderList,
  bookmarkList,
  isLoggedIn,
  listType,
  setListToCardType,
  setListToListType
}) => {
  return (
    <>
      <Container>
        <SearchInputWrapper searchInputBackgroundUrl={searchInputHandler.backgroundUrl}>
          <SearchInput {...{ bookmarkFolderList, bookmarkList }} />
          <ChangeCoverButton onClick={() => searchInputHandler.isOpenModalHandler(true)}>
            Change Cover
          </ChangeCoverButton>
        </SearchInputWrapper>

        <FolderRowWrapper>
          <FolderRow {...{ bookmarkFolderList, isLoggedIn, type: listType, setListToCardType, setListToListType }} />
        </FolderRowWrapper>
      </Container>

      <ChangeCoverModal
        isOpen={searchInputHandler.isOpenChangeBackgroundModal}
        closeHandler={() => searchInputHandler.isOpenModalHandler(false)}
      >
        <ChangeCoverModalContentsWrapper>
          <ChangeCoverModalHeader>
            <ChangeCoverModalTitle>Gallery</ChangeCoverModalTitle>
          </ChangeCoverModalHeader>
          <Divider />
          <CoverImageList>
            <CoverImageListItem src={BackgroundOne} onClick={searchInputHandler.changeCover(BackgroundOne)} />
            <CoverImageListItem src={BackgroundTwo} onClick={searchInputHandler.changeCover(BackgroundTwo)} />
            <CoverImageListItem src={BackgroundThree} onClick={searchInputHandler.changeCover(BackgroundThree)} />
            <CoverImageListItem src={BackgroundFour} onClick={searchInputHandler.changeCover(BackgroundFour)} />
          </CoverImageList>
          <CoverImageList>
            <CoverImageListItem src={BackgroundFive} onClick={searchInputHandler.changeCover(BackgroundFive)} />
            <CoverImageListItem src={BackgroundSix} onClick={searchInputHandler.changeCover(BackgroundSix)} />
            <CoverImageListItem src={BackgroundSeven} onClick={searchInputHandler.changeCover(BackgroundSeven)} />
            <CoverImageListItem src={BackgroundEight} onClick={searchInputHandler.changeCover(BackgroundEight)} />
          </CoverImageList>
          <CoverImageList>
            <CoverImageListItem src={BackgroundNine} onClick={searchInputHandler.changeCover(BackgroundNine)} />
            <CoverImageListItem src={BackgroundTen} onClick={searchInputHandler.changeCover(BackgroundTen)} />
            <CoverImageListItem src={BackgroundEleven} onClick={searchInputHandler.changeCover(BackgroundEleven)} />
            <CoverImageListItem src={BackgroundTwelve} onClick={searchInputHandler.changeCover(BackgroundTwelve)} />
          </CoverImageList>
        </ChangeCoverModalContentsWrapper>
      </ChangeCoverModal>
    </>
  );
};


const Container = styled.div``;

const SearchInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 70px 0;
  background-image: url(${props => props.searchInputBackgroundUrl});
  background-size: cover;
`;

const ChangeCoverButton = styled.button`
  
`;

const FolderRowWrapper = styled.div`
  width: 1185px;
  margin: 50px auto 0 auto;
`;

const ChangeCoverModalContentsWrapper = styled.div`
  width: 790px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.12);
`;

const ChangeCoverModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 56px;
  padding: 0 26px;
`;

const ChangeCoverModalTitle = styled.div`
  flex-grow: 1;
  
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #7785FF;
`;

const Divider = styled.div`
  margin-bottom: 23px;
  border-bottom: 1px solid rgba(222, 227, 230, 0.8);
`;

const CoverImageList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 26px;
`;

const CoverImageListItem = styled.div`
  width: 234px;
  height: 114px;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  margin-right: 10px;
  margin-bottom: 13px;
  cursor: pointer;
  
  &:nth-child(4n) {
    margin-right: 0;
  }
`;


export default HomeScreenPresenter;
