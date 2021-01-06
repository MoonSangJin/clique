import React from 'react';
import Popover from '@material-ui/core/Popover';


const WrappedPopover = ({ isOpen, closeHandler, anchorEl, children }) => {

  return isOpen ? (
    <Popover
      open={isOpen}
      onClose={closeHandler}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
    >
      {children}
    </Popover>
  ) : null;
};

export default WrappedPopover;
