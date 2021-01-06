import React from 'react';
import styled from 'styled-components';

import Popover from '../../Components/Popover';
import { CopyToClipboard } from 'react-copy-to-clipboard';


const DropdownMenu = ({ isOpen, closeHandler, anchorEl, sharedText }) => {
  return (
    <Popover isOpen={isOpen} closeHandler={closeHandler} anchorEl={anchorEl} position={'hover'}>
      <MenuWrapper>
        <MenuItem>Add to favorites</MenuItem>
        <CopyToClipboard
          text={sharedText}
          onCopy={closeHandler}
        >
          <MenuItem>Share</MenuItem>
        </CopyToClipboard>
        <MenuItem>Rename</MenuItem>
        <MenuItem>Delete folder</MenuItem>
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
