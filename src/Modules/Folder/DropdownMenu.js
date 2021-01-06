import React from 'react';
import styled from 'styled-components';

import Popover from '../../Components/Popover';


const FolderDropdownMenuInfo = [
  {
    menuName: 'Add to favorites',
    onClickFunction: () => null,
  },
  {
    menuName: 'Share',
    onClickFunction: () => null,
  },
  {
    menuName: 'Rename',
    onClickFunction: () => null,
  },
  {
    menuName: 'Delete folder',
    onClickFunction: () => null,
  },
];


const DropdownMenu = ({ isOpen, closeHandler, anchorEl }) => {
  return (
    <Popover isOpen={isOpen} closeHandler={closeHandler} anchorEl={anchorEl} position={'hover'}>
      <MenuWrapper>
        {
          FolderDropdownMenuInfo.map((info) =>
            <MenuItem key={info.menuName} onClick={info.onClickFunction}>{info.menuName}</MenuItem>)
        }
      </MenuWrapper>
    </Popover>
  );
};


const MenuWrapper = styled.div`
  padding: 17px 0;
  width: 193px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  height: 47px;
  padding-left: 28px;

  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #070701;
  
  &:hover {
    cursor: pointer;
    background-color: #F5F7F8;
  }
`;

export default DropdownMenu;
