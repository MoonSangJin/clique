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
import CheckGraySrc from '../assets/img/checkGray.png';
import DefaultImageSrc from '../assets/img/FolderItemImages/1.png';

import { deleteBookmarkFolderRequest } from '../Store/Bookmark/actions';

export default function Folder({ folder_data, folderCoverImageSrc }) {
  const dispatch = useDispatch();

  const bookmarkReducer = useSelector((state) => state.bookmarkReducer);

  const [isOpenDropdownMenu, setIsOpenDropdownMenu] = useState(false);
  const [profileElementHolder, setProfileElementHolder] = useState(null);
  const dotMenuRef = React.createRef();

  const [isOpenShareSuccessModal, setIsOpenShareSuccessModal] = useState(false);
  const [isOpenDeleteFolderModal, setIsOpenDeleteFolderModal] = useState(false);

  useEffect(() => {
    setProfileElementHolder(dotMenuRef.current);
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
      return Number(bookmark.bookmark_folder_id) === folder_data.id;
    });
  };

  const getSharedText = () => {
    let sharedText = 'This bookmarks are shared by Clique\n';
    sharedText += `Folder name: ${folder_data.name}\n\n`;

    getBookmarkList().forEach((bookmark) => {
      sharedText += `${bookmark.title}\n${bookmark.url}\n\n`;
    });

    return sharedText;
  };

  const handleShareTextSuccess = () => {
    closeDropdownMenu();
    setIsOpenShareSuccessModal(true);
  };

  const handleDeleteFolder = () => {
    closeDropdownMenu();
    setIsOpenDeleteFolderModal(true);
  };
  const dispatchDeleteFolder = () => {
    dispatch(deleteBookmarkFolderRequest({ folderId: folder_data.id }));
    setIsOpenDeleteFolderModal(false);
  };
  return (
    <>
      <StyledLink to={`/detail/${folder_data.id}`}>
        <Container>
          <FolderImage src={folderCoverImageSrc || DefaultImageSrc} />
          {/* 폴더 이미지 들어갈 곳*/}
          <ContentsWrapper>
            <TitleWrapper>
              <TextRow>
                <FolderName>{folder_data.name}</FolderName>
                <FolderTime>Last updated 1 day ago</FolderTime>
              </TextRow>
              {folder_data.is_favorite ? (
                <FavoriteIcon src={FavoriteIconSrc} />
              ) : null}
            </TitleWrapper>
            <MenuWrapper>
              <FaviconWrapper>
                <FaviconFolder src={folder} alt={folder} />
                <VerticalLine src={verticalLine} />
                {getBookmarkList().map((bookmark) => {
                  return (
                    <FaviconImage
                      key={bookmark.id}
                      src={bookmark.favicon_url}
                    />
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
        anchorEl={profileElementHolder}
        sharedText={getSharedText()}
        shareTextSuccessHandler={handleShareTextSuccess}
        {...{ handleDeleteFolder }}
      />

      <Modal
        isOpen={isOpenShareSuccessModal}
        closeHandler={() => setIsOpenShareSuccessModal(false)}
      >
        <ModalContentsWrapper>
          <CheckGrayImage src={CheckGraySrc} />
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
          <CheckGrayImage src={CheckGraySrc} />
          <PhrasesWrapper>
            <ModalTitle>지우시겠습니까?</ModalTitle>
            <ModalPhrases>진짜 지울거냐고</ModalPhrases>
          </PhrasesWrapper>
          <ModalButtonWrapper>
            <ModalButton onClick={dispatchDeleteFolder}>OK</ModalButton>
            <ModalButton onClick={() => setIsOpenDeleteFolderModal(false)}>
              NO
            </ModalButton>
          </ModalButtonWrapper>
        </ModalContentsWrapper>
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
  width: 185px;
  display: block;
  font-family: Poppins;
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

  font-family: Poppins;
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

const CheckGrayImage = styled.img`
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
  width: 72px;
`;

const ModalButton = styled.button`
  all: unset;
  width: 100%;
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
`;
