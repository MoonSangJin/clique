import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import Popover from '../../Components/Popover';
import { removeUserInfo } from '../../Store/User/actions';
import { removeAccessToken } from '../../Utils/tokenHandler';


const ProfileMenu = ({
  isOpen,
  closeHandler,
  anchorEl,
  email,
  profileImageSrc,
}) => {
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
        removeAccessToken().then(() => {
          dispatch(removeUserInfo());
          closeHandler();
        });
      },
    },
  ];

  return (
    <Popover
      isOpen={isOpen}
      closeHandler={closeHandler}
      anchorEl={anchorEl}
      position={'hover'}
    >
      <MenuWrapper>

        <Panel>
          <ProfilePanel>
            <Information>
              <Username>{email ? email.split('@')[0] : ''}</Username>
              {/*<EditProfile>Edit Profile</EditProfile>*/}
            </Information>
            <ProfileImage src={profileImageSrc} />
          </ProfilePanel>
        </Panel>
        {
          profileMenuInfo.map((info) => (
            <MenuItem key={info.menuName} onClick={info.onClickFunction}>
              {info.menuName}
            </MenuItem>
          ))
        }
      </MenuWrapper>
    </Popover>
  );
};

const MenuWrapper = styled.div`
  padding: 14px 16px 17px 16px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

const Panel = styled.div`
  width: 171px;
  padding-bottom: 15px;
  border-bottom: solid 1px #dee3e6;
`;

const ProfilePanel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Information = styled.div`
  display: flex;
  align-items: center;
`;

const Username = styled.div`
  margin-left: 5px;

  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.02em;
  color: #070701;
`;

const EditProfile = styled.div`
  margin-top: 2px;

  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.02em;
  color: #7785ff;
`;

const ProfileImage = styled.img`
  width: 32px;
  height: 32px;
`;

const MenuItem = styled.div`
  margin-top: 14px;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.02em;
  color: #90a0ad;

  &:hover {
    cursor: pointer;
  }
`;

export default ProfileMenu;
