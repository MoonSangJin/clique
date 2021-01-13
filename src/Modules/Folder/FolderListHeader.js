import React from 'react';
import styled from 'styled-components';

import CardFolderButtonSrc from '../../assets/img/cardFolderButton.png';
import ListFolderButtonSrc from '../../assets/img/listFolderButton.png';
import DownArrowSrc from '../../assets/img/downArrow.png';


const FolderListHeader = () => {
  return (
    <Wrapper>
      <ListTypeButtonWrapper>
        <ListTypeButton src={CardFolderButtonSrc} />
        <ListTypeButton src={ListFolderButtonSrc} />
      </ListTypeButtonWrapper>
      <SortTypeSelectorWrapper>
        <SortTitle>
          Sort by:
        </SortTitle>
        <SortTypeContents>Created</SortTypeContents>
        <DownArrowImage src={DownArrowSrc} />
      </SortTypeSelectorWrapper>
    </Wrapper>
  )
};


const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
  height: 29px;
`;

const ListTypeButtonWrapper = styled.div`
`;

const ListTypeButton = styled.img`
  width: 29px;
  height: 29px;
  
  margin-right: 8px;
`;

const SortTypeSelectorWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const SortTitle = styled.div`
  font-family: Poppins;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -0.02em;
  color: #B9B9B9;
`;

const SortTypeContents = styled.span`
  margin-left: 10px;
  font-family: Poppins;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.02em;
  color: #90A0AD;
`;

const DownArrowImage = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 10px;
`;

export default FolderListHeader;
