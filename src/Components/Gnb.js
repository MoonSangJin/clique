import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Logo from './Logo';
import Profile from './Profile';
import defaultImage from '../assets/img/defaultImage';
import PopoverController from './Popover/PopoverController';
import ProfileMenu from '../Modules/Gnb/ProfileMenu';
import { useDispatch, useSelector } from 'react-redux';
import { setUserInfo } from '../Store/User/actions';


export default function Gnb() {
  const userReducer = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const [isOpenDropdownMenu, setIsOpenDropdownMenu] = useState(false);
  const [profileElementHolder, setProfileElementHolder] = useState(null);
  const ref = React.createRef();

  useEffect(() => {
    setProfileElementHolder(ref.current);
  }, [ref]);

  useEffect(() => {
    chrome.storage.sync.get(['access'], function(result) {
      if (result.access) {
        // Todo(maitracle): access token이 있을 경우 profile 정보를 받아서 store에 함께 저장한다.
        dispatch(setUserInfo({
            id: -1,
            email: '',
            profileImageUrl: '',
          }),
        );
      }
    });
  }, [dispatch]);

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

        {
          userReducer.user.isLoggedIn ?
            <ProfileWrapper>
              <PopoverController onClick={openDropdownMenu} ref={ref}>
                <Profile profileImageSrc={defaultImage} />
              </PopoverController>
            </ProfileWrapper>
            :
            <ProfileWrapper>
              <Profile profileImageSrc={defaultImage} />
            </ProfileWrapper>
        }

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
