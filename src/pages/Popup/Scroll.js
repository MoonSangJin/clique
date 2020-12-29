import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.form`
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
  const [checkList, setCheckList] = useState([]);

  const handleClick = (e) => {
    const { id, name, value, src, checked } = e.target;
    console.log(e.target);

    checked
      ? setCheckList((checkList) => [
          ...checkList,
          { tab: id, title: name, url: value, favIconUrl: src },
        ])
      : setCheckList((checkList) => checkList.filter((i) => i.tab !== id));
  };

  const submitList = (e) => {
    chrome.storage.sync.set({ key: checkList }, function () {
      console.log('checkList 저장');
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (checkList.length === 0) {
      alert('At least one should be checked');
    } else {
      e.target.reset();
      setCheckList([]);
      alert('저장되었습니다.');
    }
  };

  const check = () => {
    console.log(checkList);
  };

  return (
    <Container onSubmit={handleSubmit}>
      {tabs.map(({ favIconUrl, title, url }, index) => (
        <ListRow key={index}>
          <CheckBox
            id={index}
            name={title}
            value={url}
            src={favIconUrl}
            type="checkbox"
            onClick={handleClick}
          />
          <Image src={favIconUrl} />
          <Title> {title}</Title>
        </ListRow>
      ))}
      <button onClick={submitList}>완료</button>

      <button type="button" onClick={check}>
        check
      </button>
    </Container>
  );
}
