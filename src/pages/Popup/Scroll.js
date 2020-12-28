import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow-y: scroll;
`;

const ListRow = styled.div`
  display: flex;
`;
const Image = styled.img`
  width: 25px;
  height: 25px;
`;
const Title = styled.div`
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const CheckBox = styled.input`
  width: 20px;
  height: 20px;
`;

export default function Scroll({ tabs }) {
  const [checkList, setCheckList] = useState([{ tab: null, url: null }]);

  const handleClick = (e) => {
    const { id, name, checked } = e.target;
    console.log(checked);

    checked
      ? setCheckList((checkList) => [...checkList, { tab: id, url: name }])
      : setCheckList((checkList) => checkList.filter((i) => i.tab !== id));
  };

  function check() {
    console.log(checkList);
  }

  return (
    <Container>
      {tabs.map(({ favIconUrl, title, url }, index) => (
        <ListRow key={index}>
          <CheckBox
            id={index}
            name={url}
            type="checkbox"
            onClick={handleClick}
          />

          <Image src={favIconUrl} />
          <Title> {title}</Title>
        </ListRow>
      ))}
      <button onClick={check}>checklist</button>
    </Container>
  );
}
