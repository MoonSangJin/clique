import React from 'react';
import styled from 'styled-components';

import check from '../../assets/img/check.png';
import notChecked from '../../assets/img/notChecked.png';
import icon128 from '../../assets/img/icon-128.png';


export default function ListRowItem({
  index,
  favIconUrl,
  title,
  isChecked,
  handleClick,
}) {
  return (
    <ListRow key={index}>
      <CheckBox src={isChecked ? check : notChecked} onClick={handleClick} />
      <Image src={favIconUrl} onError={(e) => e.target.src = icon128} onClick={handleClick} />
      <Title value={title} onChange={() => console.log('chaged')} />
    </ListRow>
  );
}

const ListRow = styled.div`
  display: flex;
  align-items: center;
  height: 32px;
  margin-bottom: 8px;
`;

const CheckBox = styled.img`
  width: 17px;
  height: 17px;
`;

const Image = styled.img`
  height: 14px;
  margin-left: 14px;
`;


const Title = styled.input`
  display: block;
  width: 200px;
  padding: 5px 0 7px;
  margin-right: 11px;
  margin-left: 11px;
  height: 28px;
  
  
  border: 1px solid transparent;
  border-bottom-color: #ccc;
  transition: 0.4s;
  
  :focus {
    padding: 5px 10px 7px;
    outline: none;
    transition: 0.4s;
    border: 1px solid #7785FF;
  }

  font-size: 12px;
  line-height: 18px;
  letter-spacing: -0.03em;
  color: #070701;
`;
