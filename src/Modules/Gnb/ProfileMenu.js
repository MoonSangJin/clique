import React from 'react';
import styled from 'styled-components';

import Popover from '../../Components/Popover';


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
    onClickFunction: () => null,
  },
];


const ProfileMenu = ({ isOpen, closeHandler, anchorEl, profileImageSrc }) => {

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
          profileMenuInfo.map((info) =>
            <MenuItem key={info.menuName} onClicl={info.onClickFunction}>{info.menuName}</MenuItem>)
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
  width: 54px;
  height: 54px;
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

export default ProfileMenu;
