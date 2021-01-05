import React from 'react';
import styled from 'styled-components';

const DropdownWrapper = styled.div`
  border: solid 1px black;
`;

const MenuItem = () => {
  return (
    <div>
      menu item
    </div>
  )
};

export default function DropdownMenu({ isOpen, closeHandler, menuList, anchorEl }) {
  return isOpen ? (
    <DropdownWrapper anchorEl={anchorEl}>
      {menuList.map((menu) => {
        return <MenuItem />
      })}
      <MenuItem />
      <MenuItem />
      <MenuItem />
    </DropdownWrapper>
  ) : null;
}
