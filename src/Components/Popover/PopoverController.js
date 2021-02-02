import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const PopoverController = React.forwardRef(({ children, onClick }, ref) => (
  <Wrapper ref={ref} onClick={onClick}>
    {children}
  </Wrapper>
));

export default PopoverController;
