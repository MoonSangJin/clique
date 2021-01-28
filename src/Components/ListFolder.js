import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import folder from '../assets/img/folder.svg';
import favoriteFolder from '../assets/img/favoriteFolder.svg';
import PopoverController from './Popover/PopoverController';
import DropdownMenu from '../Modules/Folder/DropdownMenu';
import OptionIcon from './OptionIcon';

const mockedTextForShare = 'this is text for sharing about bookmarks';

export default function ListFolder({ folder_data }) {
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
      <ListTitle>
        <Folder {...{ favorite }} />
        <Text>{folder_title}</Text>
      </ListTitle>

      <Icon>
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
    </Container>
  );
}

const Container = styled.div`
  width: 660px;
  height: 75px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
`;
const ListTitle = styled.div`
  width: 330px;
  display: flex;
  align-items: center;
`;
const Folder = styled.img.attrs(({ favorite }) =>
  favorite ? { src: `${favoriteFolder}` } : { src: `${folder}` }
)``;

const Text = styled.div`
  display: block;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
  /* identical to box height */
  letter-spacing: -0.02em;

  margin-left: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  width: 155px;
  overflow-x: hidden;
`;
const FavIcon = styled.img`
  width: 26px;
  height: 26px;
`;
