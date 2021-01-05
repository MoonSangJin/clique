import React from 'react';
import Popover from '@material-ui/core/Popover';


const WrappedPopover = ({ isOpen, closeHandler, menuList, anchorEl }) => {

  return isOpen ? (
    <Popover
      open={isOpen}
      onClose={closeHandler}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
    >
      <div>
        The content of the Popover.
      </div>
      <div>
        The content of the Popover.
      </div>
      <div>
        The content of the Popover.
      </div>
      <div>
        The content of the Popover.
      </div>
    </Popover>
  ) : null;
};

export default WrappedPopover;
