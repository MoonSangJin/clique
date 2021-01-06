import React from 'react';
import Popover from '@material-ui/core/Popover';


const positionSettings = {
  'hover': {
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'right',
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'right',
    },
  },
  'bottom': {
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'center',
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'center',
    },
  },
};


const WrappedPopover = ({ isOpen, closeHandler, anchorEl, children, position = 'hover' }) => {
  return isOpen ? (
    <Popover
      open={isOpen}
      onClose={closeHandler}
      anchorEl={anchorEl}
      anchorOrigin={positionSettings[position].anchorOrigin}
      transformOrigin={positionSettings[position].transformOrigin}
    >
      {children}
    </Popover>
  ) : null;
};

export default WrappedPopover;
