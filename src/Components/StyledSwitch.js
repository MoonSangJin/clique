import React from 'react';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';


const CustomSwitch = withStyles({
  switchBase: {
    '&$checked': {
      color: '#7785ff',
    },
    '&$checked + $track': {
      backgroundColor: '#7785ff',
    },
  },
  checked: {},
  track: {},
})(Switch);

const StyledSwitch = ({ ...rest }) => {
  return (
    <CustomSwitch {...rest} />
  );
};

export default StyledSwitch;
