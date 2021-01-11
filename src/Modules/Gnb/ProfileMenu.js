import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import Popover from '../../Components/Popover';
import { removeUserInfo } from '../../Store/User/actions';
import { Link } from 'react-router-dom';


const ProfileMenu = ({ isOpen, closeHandler, anchorEl, profileImageSrc, isLoggedIn }) => {
  const dispatch = useDispatch();

  const profileMenuInfo = [
    {
      menuName: 'Help & Support',
      onClickFunction: () => null,
    },
    {
      menuName: 'Getting Started',
      onClickFunction: () => null,
    },
    {
      menuName: 'Sign Out',
      onClickFunction: () => {
        chrome.storage.sync.remove(['access'], () => {
          dispatch(removeUserInfo());
        });
      },
    },
  ];

  const notLoggedInMenu = [
    {
      menuName: 'Sign In',
      linkSrc: '/sign-in/',
    },
    {
      menuName: 'Sign up',
      linkSrc: '/sign-up/',
    },
  ];

  return (
    <Popover isOpen={isOpen} closeHandler={closeHandler} anchorEl={anchorEl} position={'hover'}>
      <MenuWrapper>
        <Panel>
          <ProfilePanel>
            <Information>
              <Username>
                Username
              </Username>
              <EditProfile>
                Edit Profile
              </EditProfile>
            </Information>
            <ProfileImage src={profileImageSrc} />
          </ProfilePanel>
        </Panel>
        {
          isLoggedIn ?
            profileMenuInfo.map((info) =>
              <MenuItem key={info.menuName} onClick={info.onClickFunction}>{info.menuName}</MenuItem>) :
            notLoggedInMenu.map((info) =>
              <MenuItem key={info.menuName}><StyledLink to={info.linkSrc}>{info.menuName}</StyledLink></MenuItem>)
        }
      </MenuWrapper>
    </Popover>
  );
};


const MenuWrapper = styled.div`
  padding: 26px 24px; 
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

const Panel = styled.div`
  width: 182px;
  padding-bottom: 18px;
  border-bottom: solid 1px #DEE3E6;
`;

const ProfilePanel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Information = styled.div`
`;

const Username = styled.div`
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #070701;
`;

const EditProfile = styled.div`
  margin-top: 2px;
  
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.02em;
  color: #7785FF;
`;

const ProfileImage = styled.img`
  width: 32px;
  height: 32px;
`;

const MenuItem = styled.div`
  margin-top: 18px;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #90A0AD;
  
  &:hover {
    cursor: pointer;
  }
`;

const StyledLink = styled(Link)`
  all: unset;
`;

export default ProfileMenu;
