import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Example from '../assets/img/example.png';
import folder from '../assets/img/folder.svg';
import option from '../assets/img/option.svg';
import verticalLine from '../assets/img/verticalLine.svg';
import isFavorite from '../assets/img/isFavorite.svg';
import PopoverController from './Popover/PopoverController';
import DropdownMenu from '../Modules/Folder/DropdownMenu';


const mockedTextForShare = 'this is text for sharing about bookmarks';


export default function Folder({
  favIconUrl,
  title,
  url,
  completeList,
  favorite,
}) {
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

  return (
    <Container>
      <FolderImage {...{ favIconUrl }} />
      <IsFavorite {...{ favorite }}>
        <img src={isFavorite} alt={'favorite icom'} />
      </IsFavorite>
      <TextRow>
        <FolderName>{title}</FolderName>
        <FolderTime>{url}</FolderTime>
      </TextRow>
      <FaviconRow>
        <Icon>
          <DefaultFolder src={folder} alt={folder} />
          <VerticalLine src={verticalLine} />
          {completeList.map((data, index) => {
            return (
              <FavIcon
                key={index}
                src={data.favIconUrl}
                alt={data.favIconUrl}
              />
            );
          })}
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
  width: 372px;
  height: 482px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: space-around;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
`;
const FolderImage = styled.div`
  width: 372px;
  height: 279.42px;
  background-image: url(${({ favIconUrl }) => favIconUrl || Example});
  background-size: cover;
`;
const IsFavorite = styled.div`
  ${({ favorite }) =>
    favorite ? `display: flex; flex-direction:row-reverse;` : `display:none`}
`;
const TextRow = styled.div`
  margin-left: 37px;
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
`;
const Icon = styled.div`
  display: flex;
  align-items: center;
  width: 200px;
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
`;
