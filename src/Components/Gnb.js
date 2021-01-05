import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Logo from './Logo';
import Profile from './Profile';
import DropdownMenu from './DropdownMenu';


export default function Gnb() {
  return (
    <>
      <Wrapper>
        <StyledLink to="/" style={{ all: 'unset' }}>
          <LogoWrapper>
            <Logo />
          </LogoWrapper>
        </StyledLink>
        <ProfileWrapper onClick={() => console.log('clicked')}>
          <Profile />
        </ProfileWrapper>
      </Wrapper>
      <DropdownMenu anchorEl={Wrapper} />
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
