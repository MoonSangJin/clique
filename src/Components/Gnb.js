import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Logo from './Logo';
import Profile from './Profile';
import defaultImage from '../assets/img/defaultImage';
import PopoverController from './Popover/PopoverController';
import ProfileMenu from '../Modules/Gnb/ProfileMenu';


export default function Gnb() {
  const [isOpenDropdownMenu, setIsOpenDropdownMenu] = useState(false);
  const [profileElementHolder, setProfileElementHolder] = useState(null);
  const ref = React.createRef();

  useEffect(() => {
    setProfileElementHolder(ref.current);
  }, [ref]);

  const openDropdownMenu = () => {
    setIsOpenDropdownMenu(true);
  };

  const closeDropdownMenu = () => {
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
          <PopoverController onClick={openDropdownMenu} ref={ref}>
            <Profile profileImageSrc={defaultImage} />
          </PopoverController>
        </ProfileWrapper>

        <ProfileMenu
          isOpen={isOpenDropdownMenu}
          closeHandler={closeDropdownMenu}
          anchorEl={profileElementHolder}
          profileImageSrc={defaultImage}
        />
      </Wrapper>
    </>
  );
}


const Wrapper = styled.div`
  width: 100%;
  height: 65px;
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
