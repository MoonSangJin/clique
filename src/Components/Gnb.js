import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


import Logo from './Logo';
import Profile from './Profile';
import defaultProfileImage from '../assets/img/Gnb/defaultProfile.png';
import guideImageSrc from '../assets/img/Gnb/guideImage';
import PopoverController from './Popover/PopoverController';
import ProfileMenu from '../Modules/Gnb/ProfileMenu';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserRequest } from '../Store/User/actions';
import { getAccessToken } from '../Utils/tokenHandler';


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
    const autoSignIn = () => {
      if (!userReducer.user.isLoggedIn) {
        getAccessToken().then((res) => {
          if (res) {
            dispatch(fetchUserRequest());
          }
        });
      }
    };

    autoSignIn();
  }, [dispatch, userReducer.user.isLoggedIn]);

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
          <Logo />
        </StyledLink>

        <RightMenuWrapper>
          <StyledLink to={'/guide/'}>
            <GuideImage src={guideImageSrc} />
          </StyledLink>
          {
            userReducer.user.isLoggedIn ?
              <PopoverController onClick={openDropdownMenu} ref={ref}>
                <Profile profileImageSrc={defaultProfileImage} />
              </PopoverController>
              :
              <StyledLink to={'/sign-in/'}>
                <Profile profileImageSrc={defaultProfileImage} />
              </StyledLink>
          }
        </RightMenuWrapper>
      </Wrapper>

      <ProfileMenu
        isOpen={isOpenDropdownMenu}
        email={userReducer.user.email}
        closeHandler={closeDropdownMenu}
        anchorEl={profileElementHolder}
        profileImageSrc={defaultProfileImage}
        isLoggedIn={userReducer.user.isLoggedIn}
      />
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
  width: 100%;
  height: 54px;
  align-items: center;
`;

const RightMenuWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const GuideImage = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 23px;
`;

const StyledLink = styled(Link)`
  all: unset;
  display: flex;
  align-items: center;
`;
