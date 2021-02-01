import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import folder from '../assets/img/folder.svg';
import verticalLine from '../assets/img/verticalLine.svg';
import FavoriteIconSrc from '../assets/img/isFavorite.png';
import PopoverController from './Popover/PopoverController';
import DropdownMenu from '../Modules/Folder/DropdownMenu';
import OptionIcon from './OptionIcon';
import Modal from './Modal';

import checkGray from '../assets/img/checkGray.png';
import deleteFolderModalImage from '../assets/img/deleteModalImage';
import defaultImage from '../assets/img/FolderItemImages/1.png';
import blankListFolder from '../assets/img/blankListFolder.png';

import {
  deleteBookmarkFolderRequest,
  renameBookmarkFolderRequest,
  updateIsFavoriteBookmarkFolderRequest,
} from '../Store/Bookmark/actions';
import { getTimeDeltaString } from '../Utils/datetimeHandler';


export default function Folder({ folderData, folderCoverImageSrc }) {
  const bookmarkReducer = useSelector((state) => state.bookmarkReducer);
  const dispatch = useDispatch();

  const [isOpenDropdownMenu, setIsOpenDropdownMenu] = useState(false);
  const [dotMenuElementHolder, setDotMenuElementHolder] = useState(null);
  const dotMenuRef = React.createRef();

  const [isOpenShareSuccessModal, setIsOpenShareSuccessModal] = useState(false);
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
        <Container>
          <FolderImage src={folderCoverImageSrc || defaultImage} />
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
  height: 366px;
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
  height: 210px;
  background-image: url(${({ src }) => src});
  background-size: cover;
  border-radius: 8px 8px 0 0;
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
  margin-top: 45px;
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
