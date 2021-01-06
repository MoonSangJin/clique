import React from 'react';

import Popover from '../../Components/Popover';
import ProfileMenuItem from './ProfileMenuItem';


const ProfileMenu = ({ isOpen, closeHandler, anchorEl }) => {

  return (
    <Popover isOpen={isOpen} closeHandler={closeHandler} anchorEl={anchorEl}>
      <ProfileMenuItem>
        1111
      </ProfileMenuItem>
      <ProfileMenuItem>
        1111
      </ProfileMenuItem>
      <ProfileMenuItem>
        1111
      </ProfileMenuItem>
      <ProfileMenuItem>
        1111
      </ProfileMenuItem>
    </Popover>
  );
};

export default ProfileMenu;
