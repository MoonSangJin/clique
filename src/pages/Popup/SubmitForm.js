import React, { useState } from 'react';
import styled from 'styled-components';
import check from '../../assets/img/check.svg';
import popUpLogo from '../../assets/img/popUpLogo.svg';

export default function SubmitForm({ tabs, postServer }) {
  const [bookmarks, setBookmarks] = useState([]);
  const [newFolderName, setNewFolderName] = useState('');

  const handleClick = (e) => {
    const { name, value, src, checked } = e.target;
    console.log(e.target);
    chrome.storage.local.get([`${name}`], (result) => {
      const scrollResult = result[name].scroll;

      checked
        ? setBookmarks((bookmarks) => [
            ...bookmarks,
            {
              title: name,
              url: value,
              scroll_pos: scrollResult, //scroll안했으면 0이 들어가있음
              favicon_url: src,
            },
          ])
        : setBookmarks((bookmarks) =>
            bookmarks.filter((i) => i.title !== name)
          );
    });
  };

  const changeInputNewFolder = (e) => {
    const { value } = e.target;
    setNewFolderName(value);
    console.log(`폴더 이름 ${value}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newFolderName === '') {
      alert('폴더 이름을 입력하세요');
      reset(e);
      return;
    }
    if (bookmarks.length === 0) {
      alert('At least one should be checked');
      reset(e);
      return;
    }

    const postData = {
      bookmark_folder_name: newFolderName,
      bookmarks: bookmarks,
    };
    postServer(postData);

    reset(e);
    alert('저장되었습니다.');
  };

  const reset = (e) => {
    e.target.reset();
    setBookmarks([]);
    setNewFolderName('');
  };

  const check = () => {
    console.log(bookmarks);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <LogoRow>
        <LogoImage src={popUpLogo} />
      </LogoRow>
      <List>
        {tabs.map(({ favIconUrl, title, url }, index) => (
          <ListRow key={index}>
            <CheckBox
              id={index}
              name={title}
              value={url}
              src={favIconUrl}
              onClick={handleClick}
              type="checkbox"
            />
            <CheckLabel htmlFor={index}></CheckLabel>
            <Image src={favIconUrl} />
            <Title> {title}</Title>
          </ListRow>
        ))}
      </List>
      <InputRow>
        <Font>Create</Font>
        <Input
          type="text"
          value={newFolderName}
          onChange={changeInputNewFolder}
          placeholder="Enter new folder name"
        ></Input>
      </InputRow>
      <ButtonRow>
        <CompleteButton>Save</CompleteButton>
      </ButtonRow>

      <button type="button" onClick={check}>
        check
      </button>
    </Form>
  );
}

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const LogoRow = styled.div``;
const LogoImage = styled.img`
  width: 70px;
  height: 33px;

  margin: 15px;
`;
const List = styled.div`
  height: 200px;
  overflow: auto;

  ::-webkit-scrollbar {
    width: 5px;
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: rgba(144, 160, 173, 0.5);
  }

  margin: 10px;
`;
const ListRow = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 5px;
`;
const Image = styled.img`
  width: 19px;
  height: 19px;

  margin: 5px;
`;
const Title = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height */
  letter-spacing: -0.03em;
  color: #070701;

  margin: 3px;
`;
const CheckLabel = styled.label`
  width: 28px;
  height: 23px;
  border-radius: 5px;
  border: 1.5px solid #d7dde2;
  box-sizing: border-box;
  border-radius: 5px;
  margin: 5px;
  &:hover {
    cursor: pointer;
  }
`;

const CheckBox = styled.input`
  display: none;
  &:checked + ${CheckLabel} {
    background: #7785ff;
    background-image: url(${check});
    background-size: 100% 100%;
  }
`;

const Input = styled.input`
  all: unset;
  width: 238px;
  height: 40px;
  background: #f5f7f8;
  border: 1px solid #dee3e6;
  box-sizing: border-box;
  border-radius: 10px;
  text-indent: 10px;
  ::placeholder {
    font-size: 14px;
    line-height: 20px;
    color: #b5bdc2;
    letter-spacing: -0.02em;
  }
  ::-webkit-calendar-picker-indicator {
    color: #90a0ad;

    margin-right: 10px;
  }

  margin-right: 10px;
`;
const Font = styled.div`
  height: 20px;

  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  /* identical to box height */
  letter-spacing: -0.02em;
  color: #90a0ad;
`;
const InputRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 20px;
  margin-left: 20px;
`;
const CompleteButton = styled.button`
  all: unset;
  width: 86px;
  height: 36px;
  font-weight: bold;
  font-size: 14px;
  background: #7785ff;
  border-radius: 3px;
  color: #ffffff;
  text-align: center;

  &:hover {
    cursor: pointer;
  }
`;
const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
`;
