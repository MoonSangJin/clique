import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Example from '../assets/img/example.jpg';
import folder from '../assets/img/folder.svg';
import verticalLine from '../assets/img/verticalLine.svg';
import isFavorite from '../assets/img/isFavorite.svg';
import PopoverController from './Popover/PopoverController';
import DropdownMenu from '../Modules/Folder/DropdownMenu';
import OptionIcon from './OptionIcon';


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
      <FolderImage /> {/* 폴더 이미지 들어갈 곳*/}
      <FavoriteRow>
        {
          favorite ? <IsFavorite src={isFavorite} /> : null
        }
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
          <OptionIcon />
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
  width: 372px;
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
  height: 46px;
`;

const IsFavorite = styled.img`
  width: 30px;
  height: 46px;
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

  letter-spacing: -0.02em;

  color: #90a0ad;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const FaviconRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 60px 32px 0 32px;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  max-width: 293px;
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
