import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Logo from './Logo';
import Profile from './Profile';
import Popover from './Popover';
import PopoverController from './Popover/PopoverController';


export default function Gnb() {
  const [isOpenDropdownMenu, setIsOpenDropdownMenu] = useState(false);
  const [profileElementHolder, setProfileElementHolder] = useState(null);
  const ref = React.createRef();

  useEffect(() => {
    setProfileElementHolder(ref.current);
  }, [ref]);

  const openIsOpenDropdownMenu = () => {
    setIsOpenDropdownMenu(true);
  };

  const closeIsOpenDropdownMenu = () => {
    setIsOpenDropdownMenu(false);
  };

  return (
    <>
      <Wrapper>
        <StyledLink to="/" style={{ all: 'unset' }}>
          <LogoWrapper>
            <Logo />
          </LogoWrapper>
        </StyledLink>
        <ProfileWrapper>
          <PopoverController onClick={openIsOpenDropdownMenu} ref={ref}>
            <Profile />
          </PopoverController>
        </ProfileWrapper>

        <Popover isOpen={isOpenDropdownMenu} closeHandler={closeIsOpenDropdownMenu} anchorEl={profileElementHolder} />
      </Wrapper>
    </>
  );
}


const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledLink = styled(Link)`
  all: unset;
`;

const LogoWrapper = styled.div`
  margin-left: 10px;
`;

const ProfileWrapper = styled.div`
  margin-right: 30px;
`;
