import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import FavoriteFolderSrc from '../../assets/img/favoriteFolder.svg';
import FolderSrc from '../../assets/img/folder.svg';

const SearchedItem = ({ info, type }) => {
  const history = useHistory();
  let name = '';
  let iconSrc = '';
  let onClickHandler;

  if (type === 'FOLDER') {
    name = info.name;
    iconSrc = info.isFavorite ? FavoriteFolderSrc : FolderSrc;
    onClickHandler = () => {
      history.push(`/detail/${info.id}`);
    }
  } else if (type === 'BOOKMARK') {
    name = info.title;
    iconSrc = info.faviconUrl || '';
    onClickHandler = () => (window.location.href = info.url);
  }

  return (
    <ItemWrapper onClick={onClickHandler}>
      <Icon src={iconSrc} />
      <Name>{name}</Name>
    </ItemWrapper>
  );
};

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 42px;
  padding: 0 28px;
  align-items: center;

  :hover {
    background-color: #f5f7f8;
  }
`;

const Icon = styled.img`
  width: 28px;
  height: 28px;
`;

const Name = styled.div`
  margin-left: 16px;
  max-width: 300px;
  max-height: 24px;

  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #070701;
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export default SearchedItem;
