import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import check from '../../assets/img/check.png';
import notChecked from '../../assets/img/notChecked.png';

export default function ListRowItem({
  index,
  favIconUrl,
  title,
  isChecked,
  handleClick,
}) {
  return (
    <ListRow key={index} onClick={handleClick}>
      <CheckBox src={isChecked ? check : notChecked} />
      <Image src={favIconUrl} />
      <Title>{title}</Title>
    </ListRow>
  );
}

const ListRow = styled.div`
  display: flex;
  align-items: center;
  height: 18px;
  margin-bottom: 22px;
`;

const CheckBox = styled.img`
  width: 17px;
  height: 17px;
`;

const Image = styled.img`
  height: 14px;
  margin-left: 14px;
`;

const Title = styled.div`
  display: block;
  max-width: 175px;
  margin-right: 35px;
  margin-left: 11px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  font-family: Poppins;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -0.03em;
  color: #070701;
`;
