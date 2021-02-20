import React from 'react';
import styled from 'styled-components';

import Popover from '../../Components/Popover';

const DropdownSort = ({ isOpen, closeHandler, anchorEl, setSortMeasure }) => {
  return (
    <Popover
      isOpen={isOpen}
      closeHandler={closeHandler}
      anchorEl={anchorEl}
      position={'hover'}
    >
      <MenuWrapper>
        <MenuItem onClick={setSortMeasure('ALPHABETICAL')}>
          Alphabetical
        </MenuItem>
        <MenuItem onClick={setSortMeasure('CREATED_AT')}>Created at</MenuItem>
        <MenuItem onClick={setSortMeasure('MODIFIED_AT')}>Modified at</MenuItem>
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
  height: 40px;
  padding-left: 28px;

  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #070701;

  &:hover {
    cursor: pointer;
    background-color: #f5f7f8;
  }
`;

export default DropdownSort;
