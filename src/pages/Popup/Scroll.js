import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import check from '../../assets/img/check.svg';
import popUpLogo from '../../assets/img/popUpLogo.svg';

export default function Scroll({ tabs }) {
  const [bookmarks, setBookmarks] = useState([]);
  const [folder, setFolder] = useState({});
  const [newFolderName, setNewFolderName] = useState('');

  const handleClick = (e) => {
    const { id, name, value, src, checked } = e.target;
    console.log(e.target);
    chrome.storage.local.get([`${name}`], (result) => {
      if (result[name].scroll !== 0) {
        //scroll저장하기 누르면
        console.log('스크롤 정보 O 페이지');
        const scrollResult = result[name].scroll; //scroll 위치 가져와서 저장

        checked
          ? setBookmarks((bookmarks) => [
              ...bookmarks,
              {
                title: name,
                url: value,
                favIconUrl: src,
                scrollPos: scrollResult,
              },
            ])
          : setBookmarks((bookmarks) =>
              bookmarks.filter((i) => i.title !== name)
            );
      } else {
        //scroll저장하기 안누르거나||scroll 정보 없음(scroll안함)
        console.log('스크롤 정보 X 페이지');
        checked
          ? setBookmarks((bookmarks) => [
              ...bookmarks,
              {
                title: name,
                url: value,
                favIconUrl: src,
                scrollPos: null,
              },
            ])
          : setBookmarks((bookmarks) =>
              bookmarks.filter((i) => i.title !== name)
            );
      }
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
    }
    if (bookmarks.length === 0) {
      alert('At least one should be checked');
      setNewFolderName('');
    } else {
      e.target.reset();
      setBookmarks([]);
      alert('저장되었습니다.');

      setFolder({ bookmark_folder_name: newFolderName, bookmarks: bookmarks });
      setNewFolderName('');
    }
  };

  const check = () => {
    console.log(bookmarks);
    console.log(folder);
  };

  const getChromeLocal = () => {};

  return (
    <SubmitForm onSubmit={handleSubmit}>
      <button onClick={getChromeLocal}>getChromeLocal</button>
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

      <InputRow>
        <Font>Add to</Font>
        <Input
          type="text"
          placeholder="Enter existing folder name"
          list="folderList"
        />
        <datalist id="folderList">
          <option value="폴더이름1"></option>
          <option value="폴더이름2"></option>
          <option value="폴더이름3"></option>
          <option value="폴더이름4"></option>
        </datalist>
      </InputRow>

      <ScrollPositionRow>
        <ScrollPositionLabel htmlFor="scrollPosition" />
        Remember my last scroll position
        <ScrollPosition type="radio" id="scrollPosition" />
      </ScrollPositionRow>
      <ButtonRow>
        <CompleteButton>Save</CompleteButton>
      </ButtonRow>

      <button type="button" onClick={check}>
        check
      </button>
    </SubmitForm>
  );
}

const SubmitForm = styled.form`
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
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.03em;

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
  margin: 10px;
  font-size: 14px;
  color: #90a0ad;

  margin-left: 15px;
`;
const InputRow = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 20px;
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
const ScrollPositionRow = styled.div`
  display: flex;
  font-size: 14px;
`;
const ScrollPositionLabel = styled.label``;
const ScrollPosition = styled.input``;
