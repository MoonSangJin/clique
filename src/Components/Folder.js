import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Example from '../assets/img/example.jpg';
import folder from '../assets/img/folder.svg';
import verticalLine from '../assets/img/verticalLine.svg';
import FavoriteIconSrc from '../assets/img/isFavorite.svg';
import PopoverController from './Popover/PopoverController';
import DropdownMenu from '../Modules/Folder/DropdownMenu';
import OptionIcon from './OptionIcon';
import { useSelector } from 'react-redux';


const mockedTextForShare = 'this is text for sharing about bookmarks';

export default function Folder({ folder_data }) {
  const bookmarkReducer = useSelector((state) => state.bookmarkReducer);
  const [isOpenDropdownMenu, setIsOpenDropdownMenu] = useState(false);
  const [profileElementHolder, setProfileElementHolder] = useState(null);
  const dotMenuRef = React.createRef();

  useEffect(() => {
    setProfileElementHolder(dotMenuRef.current);
  }, [dotMenuRef]);

  const openDropdownMenu = () => {
    setIsOpenDropdownMenu(true);
  };

  const closeDropdownMenu = () => {
    setIsOpenDropdownMenu(false);
  };

  const getBookmarkList = () => {
    return bookmarkReducer.bookmarkList.filter((bookmark) => {
      return Number(bookmark.bookmark_folder_id) === folder_data.id;
    })
  };

  return (
    <StyledLink to={`/detail/${folder_data.id}`}>
      <Container>
        <FolderImage /> {/* 폴더 이미지 들어갈 곳*/}
        <ContentsWrapper>
          <TitleWrapper>
            <TextRow>
              <FolderName>{folder_data.name}</FolderName>
              <FolderTime>
                {/*현재 서버에서 time 정보는 보내주지 않는다*/}
              </FolderTime>
            </TextRow>
            {folder_data.is_favorite ? <FavoriteIcon src={FavoriteIconSrc} /> : null}
          </TitleWrapper>
          <MenuWrapper>
            <FaviconWrapper>
              <FaviconFolder src={folder} alt={folder} />
              <VerticalLine src={verticalLine} />
              {
                getBookmarkList().map((bookmark) => {
                  return <FaviconImage src={bookmark.favicon_url} />
                })
              }
            </FaviconWrapper>
            <PopoverController ref={dotMenuRef} onClick={openDropdownMenu}>
              <OptionIcon />
            </PopoverController>
            <DropdownMenu
              isOpen={isOpenDropdownMenu}
              closeHandler={closeDropdownMenu}
              anchorEl={profileElementHolder}
              sharedText={mockedTextForShare}
            />
          </MenuWrapper>
        </ContentsWrapper>
      </Container>
    </StyledLink>
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
  background-image: url(${({ favIconUrl }) => favIconUrl || Example});
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
  height: 37px;
`;

const FolderName = styled.div`
  width: 200px;
  display: block;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.02em;

  color: #070701;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const FolderTime = styled.div`
  height: 18px;
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
  width: 14px;
  height: 14px;
`;
