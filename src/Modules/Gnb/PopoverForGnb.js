import React from 'react';
import Popover from '@material-ui/core/Popover';
import styled from 'styled-components';

const positionSettings = {
  hover: {
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'left',
    },
    transformOrigin: {
      vertical: 'bottom',
      horizontal: 'left',
    },
  },
  bottom: {
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

const PopoverForGnb = ({
                          isOpen,
                          closeHandler,
                          anchorEl,
                          children,
                          position = 'hover',
                        }) => {
  return !!anchorEl && isOpen ? (
    <StyledPopover
      open={isOpen}
      onClose={closeHandler}
      anchorEl={anchorEl}
      anchorOrigin={positionSettings[position].anchorOrigin}
      transformOrigin={positionSettings[position].transformOrigin}
    >
      {children}
    </StyledPopover>
  ) : null;
};

const StyledPopover = styled(Popover)`
  .MuiPaper-rounded {
    top: 0 !important;
    border-radius: 8px;
  }
`;

export default PopoverForGnb;
