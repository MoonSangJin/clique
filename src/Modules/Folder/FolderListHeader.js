import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import CardFolderButtonSelectedSrc from '../../assets/img/cardFolderButtonSelected.png';
import CardFolderButtonSrc from '../../assets/img/cardFolderButton.png';
import ListFolderButtonSelectedSrc from '../../assets/img/listFolderButtonSelected.png';
import ListFolderButtonSrc from '../../assets/img/listFolderButton.png';
import DownArrowSrc from '../../assets/img/downArrow.png';

import DropdownSort from './DropdownSort';
import PopoverController from '../../Components/Popover/PopoverController';

const FolderListHeader = ({ type, setListToCardType, setListToListType }) => {
  const [isOpenDropdownSort, setIsOpenDropdownSort] = useState(false);
  const [dotMenuElementHolder, setDotMenuElementHolder] = useState(null);
  const dotMenuRef = React.createRef();

  const bookmarkReducer = useSelector((state) => state.bookmarkReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    setDotMenuElementHolder(dotMenuRef.current);
  }, [dotMenuRef]);

  const openDropdownSort = (e) => {
    e.preventDefault();
    setIsOpenDropdownSort(true);
  };

  const closeDropdownMenu = () => {
    setIsOpenDropdownSort(false);
  };

  const sortByAlphabetical = () => {
    console.log('let me set alphabetical');
    /* 기존에 가져온 폴더정보 순서를 어케 바꿀까 */
    console.log(bookmarkReducer.bookmarkFolderList);
  };
  return (
    <Wrapper>
      <ListTypeButtonWrapper>
        {type === 'card' ? (
          <>
            <ListTypeButton
              src={CardFolderButtonSelectedSrc}
              onClick={setListToCardType}
            />
            <ListTypeButton
              src={ListFolderButtonSrc}
              onClick={setListToListType}
            />
          </>
        ) : (
          <>
            <ListTypeButton
              src={CardFolderButtonSrc}
              onClick={setListToCardType}
            />
            <ListTypeButton
              src={ListFolderButtonSelectedSrc}
              onClick={setListToListType}
            />
          </>
        )}
      </ListTypeButtonWrapper>

      <SortTypeSelectorWrapper>
        <PopoverController ref={dotMenuRef} onClick={openDropdownSort}>
          <SortTitle>Sort by:</SortTitle>
        </PopoverController>

        <SortTypeContents>Date Created</SortTypeContents>
        <DownArrowImage src={DownArrowSrc} />
      </SortTypeSelectorWrapper>

      <DropdownSort
        isOpen={isOpenDropdownSort}
        closeHandler={closeDropdownMenu}
        anchorEl={dotMenuElementHolder}
        {...{ sortByAlphabetical }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  height: 29px;
`;

const ListTypeButtonWrapper = styled.div``;

const ListTypeButton = styled.img`
  width: 29px;
  height: 29px;

  margin-right: 8px;
  cursor: pointer;
`;

const SortTypeSelectorWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const SortTitle = styled.div`
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -0.02em;
  color: #b9b9b9;

  &:hover {
    cursor: pointer;
  }
`;

const SortTypeContents = styled.span`
  margin-left: 10px;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.02em;
  color: #90a0ad;
`;

const DownArrowImage = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 10px;

  &:hover {
    cursor: pointer;
  }
`;

export default FolderListHeader;
