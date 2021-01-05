import React from 'react';

const PopoverController = React.forwardRef(({ children, onClick }, ref) => (
  <div ref={ref} onClick={onClick}>
    {children}
  </div>
));


export default PopoverController;
