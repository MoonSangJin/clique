import React, { useState } from 'react';
import styled from 'styled-components';
import check from '../../assets/img/check.png';
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
    window.close();
  };

  const reset = (e) => {
    e.target.reset();
    setBookmarks([]);
    setNewFolderName('');
  };

  const checkAll = () => {
    console.log(bookmarks);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <LogoRow>
        <LogoImage src={popUpLogo} />
        <CheckAll>
          Check all
        </CheckAll>
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
              <CheckLabel htmlFor={index} />
            <Image src={favIconUrl} />
            <Title>{title}</Title>
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
        />
      </InputRow>
      <ButtonRow>
        <CompleteButton>Save</CompleteButton>
      </ButtonRow>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px 21px 25px 23px;
`;

const LogoRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const LogoImage = styled.img`
  width: 51px;
  height: 24px;
`;

const CheckAll = styled.div`
  font-family: Poppins;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #7785FF;
  
  &:hover {
    cursor: pointer;
  }
`;

const List = styled.div`
  max-height: 200px;
  margin-top: 37px;
  overflow: auto;

  ::-webkit-scrollbar {
    width: 5px;
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: rgba(144, 160, 173, 0.5);
  }
`;

const ListRow = styled.div`
  display: flex;
  align-items: center;
  height: 18px;
  margin-bottom: 22px;
`;

const CheckLabel = styled.label`
  width: 17px;
  height: 17px;
  border-radius: 5px;
  border: 1.5px solid #d7dde2;
  box-sizing: border-box;

  &:hover {
    cursor: pointer;
  }
`;

const CheckBox = styled.input`
  display: none;

  &:checked + ${CheckLabel} {
    background-image: url(${check});
    background-size: 100% 100%;
  }
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

const InputRow = styled.div`
  display: flex;
  margin-top: 22px;
  align-items: center;
`;

const Font = styled.div`
  font-family: Poppins;
  font-size: 10px;
  line-height: 15px;
  letter-spacing: -0.02em;
  color: #90a0ad;
`;

const Input = styled.input`
  all: unset;
  width: 204px;
  height: 30px;
  margin-left: 26px;
  background-color: #f5f7f8;
  border: 1px solid #dee3e6;
  box-sizing: border-box;
  border-radius: 8px;
  text-indent: 12px;

  ::placeholder {
    font-size: 12px;
    line-height: 20px;
    color: #b5bdc2;
    letter-spacing: -0.02em;
  }
  ::-webkit-calendar-picker-indicator {
    color: #90a0ad;
  }
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CompleteButton = styled.button`
  all: unset;
  width: 64px;
  height: 27px;
  margin-top: 20px;
  background: #7785ff;
  border-radius: 3px;

  font-family: Poppins;
  font-weight: bold;
  font-size: 10px;
  line-height: 15px;
  color: #ffffff;
  text-align: center;

  &:hover {
    cursor: pointer;
  }
`;
