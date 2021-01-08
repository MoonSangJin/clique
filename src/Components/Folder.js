import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Example from '../assets/img/example.jpg';
import whiteBlank from '../assets/img/whiteBlank.jpg';
import folder from '../assets/img/folder.svg';
import option from '../assets/img/option.svg';
import verticalLine from '../assets/img/verticalLine.svg';
import isFavorite from '../assets/img/isFavorite.png';
import PopoverController from './Popover/PopoverController';
import DropdownMenu from '../Modules/Folder/DropdownMenu';

const mockedTextForShare = 'this is text for sharing about bookmarks';

export default function Folder({ folder_data }) {
  const [isOpenDropdownMenu, setIsOpenDropdownMenu] = useState(false);
  const [profileElementHolder, setProfileElementHolder] = useState(null);
  const dotMenuRef = React.createRef();

  const { folder_title, time, favorite } = folder_data;

  useEffect(() => {
    setProfileElementHolder(dotMenuRef.current);
  }, [dotMenuRef]);

  const openDropdownMenu = () => {
    setIsOpenDropdownMenu(true);
  };

  const closeDropdownMenu = () => {
    setIsOpenDropdownMenu(false);
  };
  return (
    <Container>
      <FolderImage {...{}} /> {/* 폴더 이미지 들어갈 곳*/}
      <FavoriteRow>
        <IsFavorite {...{ favorite }} />
      </FavoriteRow>
      <TextRow>
        <FolderName>{folder_title}</FolderName>
        <FolderTime>{time}</FolderTime>
      </TextRow>
      <FaviconRow>
        <Icon>
          <DefaultFolder src={folder} alt={folder} />
          <VerticalLine src={verticalLine} />
          <FavIcon src={folder} />
          <FavIcon src={folder} />
          <FavIcon src={folder} />
          <FavIcon src={folder} />
          <FavIcon src={folder} />
          <FavIcon src={folder} />
        </Icon>
        <PopoverController ref={dotMenuRef} onClick={openDropdownMenu}>
          <OptionIcon src={option} alt={option} />
        </PopoverController>

        <DropdownMenu
          isOpen={isOpenDropdownMenu}
          closeHandler={closeDropdownMenu}
          anchorEl={profileElementHolder}
          sharedText={mockedTextForShare}
        />
      </FaviconRow>
    </Container>
  );
}

const Container = styled.div`
  width: 320px;
  height: 482px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.08);
  border-radius: 10px;

  margin-bottom: 30px;
`;
const FolderImage = styled.div`
  width: 100%;
  height: 279.42px;
  background-image: url(${({ favIconUrl }) => favIconUrl || Example});
  background-size: cover;
  border-radius: 10px 10px 0 0;
`;
const FavoriteRow = styled.div`
  text-align: right;
`;
const IsFavorite = styled.img.attrs(({ favorite }) =>
  favorite ? { src: `${isFavorite}` } : { src: `${whiteBlank}` }
)`
  width: 41.12px;
  height: 47.9px;
  margin-right: 30px;
`;
const TextRow = styled.div`
  margin-left: 32px;
`;
const FolderName = styled.div`
  display: block;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
  /* identical to box height */

  letter-spacing: -0.02em;

  color: #070701;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const FolderTime = styled.div`
  display: block;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height */

  letter-spacing: -0.02em;

  color: #90a0ad;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const FaviconRow = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
`;
const Icon = styled.div`
  display: flex;
  align-items: center;
  width: 210px;
  overflow-x: hidden;
`;
const DefaultFolder = styled.img`
  width: 30px;
  height: 25px;
`;
const VerticalLine = styled.img`
  margin-left: 10px;
  margin-right: 10px;
`;
const FavIcon = styled.img`
  width: 26px;
  height: 26px;
`;
const OptionIcon = styled.img`
  &:hover {
    cursor: pointer;
  }
`;
