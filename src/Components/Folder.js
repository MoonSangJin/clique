import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import folder from '../assets/img/folder.svg';
import favoriteFolder from '../assets/img/favoriteFolder.svg';
import defaultFolderImage from '../assets/img/deafultFolderCover';
import verticalLine from '../assets/img/verticalLine.svg';
import FavoriteIconSrc from '../assets/img/isFavorite.png';
import PopoverController from './Popover/PopoverController';
import DropdownMenu from '../Modules/Folder/DropdownMenu';
import OptionIcon from './OptionIcon';
import Modal from './Modal';
import ChangeCoverModal from './Modal/ChangeCoverModal';

import coverImageOne from '../assets/img/FolderItemImages/1';
import coverImageTwo from '../assets/img/FolderItemImages/2';
import coverImageThree from '../assets/img/FolderItemImages/3';
import coverImageFour from '../assets/img/FolderItemImages/4';
import coverImageFive from '../assets/img/FolderItemImages/5';
import coverImageSix from '../assets/img/FolderItemImages/6';
import coverImageSeven from '../assets/img/FolderItemImages/7';
import coverImageEight from '../assets/img/FolderItemImages/8';
import coverImageNine from '../assets/img/FolderItemImages/9';
import coverImageTen from '../assets/img/FolderItemImages/10';
import coverImageEleven from '../assets/img/FolderItemImages/11';
import coverImageTwelve from '../assets/img/FolderItemImages/12';

import checkGray from '../assets/img/checkGray.png';
import deleteFolderModalImage from '../assets/img/deleteModalImage';
import blankListFolder from '../assets/img/blankListFolder.png';

import {
  changeCoverBookmarkFolderRequest,
  deleteBookmarkFolderRequest,
  renameBookmarkFolderRequest,
  updateIsFavoriteBookmarkFolderRequest,
} from '../Store/Bookmark/actions';
import { getTimeDeltaString } from '../Utils/datetimeHandler';


export default function Folder({ folderData, type }) {
  const bookmarkReducer = useSelector((state) => state.bookmarkReducer);
  const dispatch = useDispatch();

  const [isOpenDropdownMenu, setIsOpenDropdownMenu] = useState(false);
  const [dotMenuElementHolder, setDotMenuElementHolder] = useState(null);
  const dotMenuRef = React.createRef();

  const [isOpenShareSuccessModal, setIsOpenShareSuccessModal] = useState(false);
  const [isOpenChangeCoverModal, setIsOpenChangeCoverModal] = useState(false);
  const [isOpenDeleteFolderModal, setIsOpenDeleteFolderModal] = useState(false);
  const [isOpenRenameFolderModal, setIsOpenRenameFolderModal] = useState(false);

  const [newFolderName, setNewFolderName] = useState(folderData.name);

  useEffect(() => {
    setDotMenuElementHolder(dotMenuRef.current);
  }, [dotMenuRef]);

  const openDropdownMenu = (e) => {
    e.preventDefault();
    setIsOpenDropdownMenu(true);
  };

  const closeDropdownMenu = () => {
    setIsOpenDropdownMenu(false);
  };

  const getBookmarkList = () => {
    return bookmarkReducer.bookmarkList.filter((bookmark) => {
      return folderData.id === Number(bookmark.bookmarkFolderId);
    });
  };

  const getSharedText = () => {
    let sharedText = 'This bookmarks are shared by Clique\n';
    sharedText += `Folder name: ${folderData.name}\n\n`;

    getBookmarkList().forEach((bookmark) => {
      sharedText += `${bookmark.title}\n${bookmark.url}\n\n`;
    });

    return sharedText;
  };

  const handleUpdateIsFavorite = () => {
    closeDropdownMenu();
    dispatch(updateIsFavoriteBookmarkFolderRequest({folderId: folderData.id, isFavorite: !folderData.isFavorite}));
  };

  const handleShareTextSuccess = () => {
    closeDropdownMenu();
    setIsOpenShareSuccessModal(true);
  };

  const openChangeCoverModal = (e) => {
    e.preventDefault();
    setIsOpenChangeCoverModal(true);
  };

  const handleChangeCover = (coverUrl) => () => {
    dispatch(changeCoverBookmarkFolderRequest({ folderId: folderData.id, coverUrl }));
    setIsOpenChangeCoverModal(false);
  };

  const openDeleteFolderModal = () => {
    closeDropdownMenu();
    setIsOpenDeleteFolderModal(true);
  };

  const handleDeleteFolder = () => {
    dispatch(deleteBookmarkFolderRequest({ folderId: folderData.id }));
    setIsOpenDeleteFolderModal(false);
  };

  const openRenameFolderModal = () => {
    closeDropdownMenu();
    setIsOpenRenameFolderModal(true);
  };

  const handleRenameFolder = () => {
    dispatch(
      renameBookmarkFolderRequest({
        folderId: folderData.id,
        name: newFolderName,
      })
    );
    setIsOpenRenameFolderModal(false);
  };

  const handleNewFolderName = (e) => {
    setNewFolderName(e.target.value);
  };

  return (
    <>
      <StyledLink to={`/detail/${folderData.id}`}>
        {
          type === 'card' ?
            <Container>
              <FolderImage src={folderData.coverImageUrl || defaultFolderImage}>
                <ChangeCoverButton onClick={openChangeCoverModal}>
                  Change cover
                </ChangeCoverButton>
              </FolderImage>
              <ContentsWrapper>
                <TitleWrapper>
                  <TextRow>
                    <FolderName isFavorite={folderData.isFavorite}>{folderData.name}</FolderName>
                    <FolderTime>
                      Created {getTimeDeltaString(new Date(), folderData.createdAt)}
                    </FolderTime>
                  </TextRow>
                  {folderData.isFavorite ? (
                    <FavoriteIcon src={FavoriteIconSrc} />
                  ) : null}
                </TitleWrapper>
                <MenuWrapper>
                  <FaviconWrapper>
                    <FaviconFolder src={folder} alt={folder} />
                    <VerticalLine src={verticalLine} />
                    {getBookmarkList().map((bookmark) => {
                      return (
                        <FaviconImage key={bookmark.id} src={bookmark.faviconUrl} />
                      );
                    })}
                  </FaviconWrapper>
                  <PopoverController ref={dotMenuRef} onClick={openDropdownMenu}>
                    <OptionIcon />
                  </PopoverController>
                </MenuWrapper>
              </ContentsWrapper>
            </Container>
            :
            <ListCardContainer>
              {
                folderData.isFavorite ? <FaviconFolder src={favoriteFolder} alt={folder} /> :
                  <FaviconFolder src={folder} alt={folder} />
              }
              <ListCardTitle>
                {folderData.name}
              </ListCardTitle>
              <ListCardMenuWrapper>
                {getBookmarkList().map((bookmark) => {
                  return (
                    <FaviconImage key={bookmark.id} src={bookmark.faviconUrl} />
                  );
                })}
                <ListCardActionWrapper>
                  <PopoverController ref={dotMenuRef} onClick={openDropdownMenu}>
                    <OptionIcon />
                  </PopoverController>
                </ListCardActionWrapper>

              </ListCardMenuWrapper>
            </ListCardContainer>
        }
      </StyledLink>

      <DropdownMenu
        isOpen={isOpenDropdownMenu}
        closeHandler={closeDropdownMenu}
        anchorEl={dotMenuElementHolder}
        sharedText={getSharedText()}
        shareTextSuccessHandler={handleShareTextSuccess}
        isFavorite={folderData.isFavorite}
        handleUpdateIsFavorite={handleUpdateIsFavorite}
        {...{ openDeleteFolderModal, openRenameFolderModal }}
      />
      <Modal
        isOpen={isOpenShareSuccessModal}
        closeHandler={() => setIsOpenShareSuccessModal(false)}
      >
        <ModalContentsWrapper>
          <ModalImage src={checkGray} />
          <PhrasesWrapper>
            <ModalTitle>Success!</ModalTitle>
            <ModalPhrases>
              Bookmark links have been copied to clipboard.
            </ModalPhrases>
          </PhrasesWrapper>
          <ModalButtonWrapper>
            <ModalButton onClick={() => setIsOpenShareSuccessModal(false)}>
              OK
            </ModalButton>
          </ModalButtonWrapper>
        </ModalContentsWrapper>
      </Modal>

      <ChangeCoverModal
        isOpen={isOpenChangeCoverModal}
        closeHandler={() => setIsOpenChangeCoverModal(false)}
      >
        <ChangeCoverModalContentsWrapper>
          <ChangeCoverModalHeader>
            <ChangeCoverModalTitle>Gallery</ChangeCoverModalTitle>
          </ChangeCoverModalHeader>
          <Divider />
          <CoverImageList>
            <CoverImageListItem src={coverImageOne} onClick={handleChangeCover(coverImageOne)} />
            <CoverImageListItem src={coverImageTwo} onClick={handleChangeCover(coverImageTwo)} />
            <CoverImageListItem src={coverImageThree} onClick={handleChangeCover(coverImageThree)} />
            <CoverImageListItem src={coverImageFour} onClick={handleChangeCover(coverImageFour)} />
          </CoverImageList>
          <CoverImageList>
            <CoverImageListItem src={coverImageFive} onClick={handleChangeCover(coverImageFive)} />
            <CoverImageListItem src={coverImageSix} onClick={handleChangeCover(coverImageSix)} />
            <CoverImageListItem src={coverImageSeven} onClick={handleChangeCover(coverImageSeven)} />
            <CoverImageListItem src={coverImageEight} onClick={handleChangeCover(coverImageEight)} />
          </CoverImageList>
          <CoverImageList>
            <CoverImageListItem src={coverImageNine} onClick={handleChangeCover(coverImageNine)} />
            <CoverImageListItem src={coverImageTen} onClick={handleChangeCover(coverImageTen)} />
            <CoverImageListItem src={coverImageEleven} onClick={handleChangeCover(coverImageEleven)} />
            <CoverImageListItem src={coverImageTwelve} onClick={handleChangeCover(coverImageTwelve)} />
          </CoverImageList>
        </ChangeCoverModalContentsWrapper>
      </ChangeCoverModal>

      <Modal
        isOpen={isOpenDeleteFolderModal}
        closeHandler={() => setIsOpenDeleteFolderModal(false)}
      >
        <ModalContentsWrapper>
          <ModalImage src={deleteFolderModalImage} />
          <PhrasesWrapper>
            <ModalTitle>
              Are you sure you want to delete this folder?
            </ModalTitle>
          </PhrasesWrapper>
        </ModalContentsWrapper>
        <ModalButtonWrapper>
          <ModalWhiteButton onClick={() => setIsOpenDeleteFolderModal(false)}>
            Cancel
          </ModalWhiteButton>
          <ModalButton onClick={handleDeleteFolder}>Yes</ModalButton>
        </ModalButtonWrapper>
      </Modal>

      <Modal
        isOpen={isOpenRenameFolderModal}
        closeHandler={() => setIsOpenRenameFolderModal(false)}
      >
        <ModalContentsWrapper>
          <ModalImage src={blankListFolder} />
          <PhrasesWrapper>
            <ModalTitle>Rename Bookmark Folder</ModalTitle>
          </PhrasesWrapper>
        </ModalContentsWrapper>

        <ModalInput onChange={handleNewFolderName} value={newFolderName} />

        <ModalButtonWrapper>
          <ModalWhiteButton onClick={() => setIsOpenRenameFolderModal(false)}>
            Cancel
          </ModalWhiteButton>
          <ModalButton onClick={handleRenameFolder}>Save</ModalButton>
        </ModalButtonWrapper>
      </Modal>
    </>
  );
}

const StyledLink = styled(Link)`
  all: unset;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 282px;
  height: 290px;
  margin-bottom: 20px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.08);
  border-radius: 8px;

  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;

  &:hover {
    cursor: pointer;
    -webkit-transform: translateY(-8px);
    transform: translateY(-8px);
  }
`;

const FolderImage = styled.div`
  width: 100%;
  height: 170px;
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-position: center;
  border-radius: 8px 8px 0 0;
`;

const ChangeCoverButton = styled.button`

`;

const ContentsWrapper = styled.div`
  padding-left: 24px;
  padding-right: 24px;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const TextRow = styled.div`
  margin-top: 20px;
  flex-grow: 1;
`;

const FavoriteIcon = styled.img`
  width: 24px;
  height: 44px;
`;

const FolderName = styled.div`
  ${(props) => props.isFavorite ? 'width: 185px' : 'width: 230px'};
  display: block;

  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 21px;
  letter-spacing: -0.02em;
  color: #070701;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const FolderTime = styled.div`
  margin-top: 2px;

  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -0.02em;
  color: #90a0ad;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`;

const FaviconWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  overflow-x: hidden;
`;

const FaviconFolder = styled.img`
  width: 23px;
  height: 21px;
`;

const VerticalLine = styled.img`
  margin-left: 10px;
  margin-right: 10px;
`;

const FaviconImage = styled.img`
  height: 16px;
  margin-right: 10px;
`;

const ModalContentsWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const ModalImage = styled.img`
  width: 22px;
  height: 22px;
  margin-top: 1px;
`;

const PhrasesWrapper = styled.div`
  margin-left: 9px;
  width: 334px;
`;

const ModalTitle = styled.div`
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.02em;

  color: #000000;
`;

const ModalPhrases = styled.div`
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.02em;
  color: #90a0ad;
`;

const ModalButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 39px;
`;

const ModalButton = styled.button`
  all: unset;
  width: 72px;
  height: 33px;
  background: #7785ff;
  border-radius: 3px;
  &:hover {
    cursor: pointer;
  }

  font-weight: bold;
  font-size: 10px;
  line-height: 15px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #ffffff;
  border: 1px solid #7785ff;
  margin-left: 8px;
`;

const ModalWhiteButton = styled.button`
  all: unset;
  width: 72px;
  height: 33px;
  border-radius: 3px;
  background: #ffffff;
  &:hover {
    cursor: pointer;
  }

  font-weight: bold;
  font-size: 10px;
  line-height: 15px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #7785ff;
  border: 1px solid #7785ff;
`;

const ModalInput = styled.input`
  all: unset;
  width: 500px;
  height: 45px;
  background: #f5f7f8;
  border-radius: 50px;
  margin-top: 21px;
  text-indent: 23px;
`;

const ChangeCoverModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 56px;
  padding: 0 26px;
`;

const ChangeCoverModalContentsWrapper = styled.div`
  width: 790px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.12);
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
  
  &:nth-child(4n) {
    margin-right: 0;
  }
`;

const ListCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 581px;
  height: 56px;
  padding: 0 15px 0 24px;
  border-radius: 8px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.08);
  margin-bottom: 20px;
`;

const ListCardTitle = styled.span`
  margin-left: 12px;
  flex-grow: 1;
  margin-right: 30px;

  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.02em;
  color: #070701;
  overflow-x: hidden;
  text-overflow: ellipsis;
`;

const ListCardMenuWrapper = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ListCardActionWrapper = styled.div`
  margin-left: 25px;
`;
