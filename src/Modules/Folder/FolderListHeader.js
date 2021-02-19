import React, { useEffect, useState } from 'react';
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
  const [sortingMenuElementHolder, setsortingMenuElementHolder] = useState(
    null
  );
  const sortingMenuRef = React.createRef();
  const [ascending, setAscending] = useState(false);

  useEffect(() => {
    setsortingMenuElementHolder(sortingMenuRef.current);
  }, [sortingMenuRef]);

  const openDropdownSort = () => {
    setIsOpenDropdownSort(true);
  };

  const closeDropdownSort = () => {
    setIsOpenDropdownSort(false);
  };

  const setOrderDirection = () => {
    if (ascending) {
      chrome.storage.sync.set({
        ordering: 'DESCENDING',
      });
      setAscending(false);
    } else {
      chrome.storage.sync.set({
        ordering: 'ASSCENDING',
      });
      setAscending(true);
    }
  };

  const setSortMeasure = (sortMeasure) => (_event) => {
    closeDropdownSort();
    chrome.storage.sync.set({
      sortMeasure: sortMeasure,
    });
  };

  const check = () => {
    closeDropdownSort();
    chrome.storage.sync.get(['sortMeasure'], (result) => console.log(result));
    chrome.storage.sync.get(['ordering'], (result) => console.log(result));
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
        <PopoverController ref={sortingMenuRef} onClick={openDropdownSort}>
          <SortTitle>Sort by:</SortTitle>
        </PopoverController>

        <SortTypeContents>Date Created</SortTypeContents>
        <DownArrowImage
          onClick={setOrderDirection}
          src={DownArrowSrc}
          ascending={ascending}
        />
      </SortTypeSelectorWrapper>

      <DropdownSort
        isOpen={isOpenDropdownSort}
        closeHandler={closeDropdownSort}
        anchorEl={sortingMenuElementHolder}
        {...{
          setSortMeasure,
          check,
        }}
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
  ${(props) => props.ascending && `transform:rotate(180deg)`}
`;

export default FolderListHeader;
