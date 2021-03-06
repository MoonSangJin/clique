import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CreatableSelect from 'react-select/creatable';

import logoSrc from '../../assets/img/logo';
import { isValidUrl, refineUrl } from '../../Utils/urlHandler';
import ListRowItem from './ListRowItem';
import { useEventListener } from '../../hooks/useEventListener';


export default function SubmitForm({ tabs, postServer, bookmarkFolderList }) {
  const [bookmarks, setBookmarks] = useState([]);
  const [folderName, setFolderName] = useState('');

  useEffect(() => {
    let activeTabTitle = '';

    tabs.forEach((tab) => {
      if (tab.active) {
        activeTabTitle = tab.title;
      }
    });

    chrome.storage.local.get([activeTabTitle], (result) => {
      setBookmarks(
        tabs.map((tab) => {
          return {
            title: tab.title,
            url: tab.url,
            favIconUrl: tab.favIconUrl,
            isChecked: tab.active,
            scrollPos:
              tab.title === activeTabTitle
                ? result[activeTabTitle]?.scroll
                : 0.0,
          };
        })
      );
    });
  }, [tabs]);

  const listenEnterKeyPress = (e) => {
    if(e.key === 'Enter') {
      handleSubmit();
    }
  };

  useEventListener('keydown', listenEnterKeyPress);

  const handleClick = (clickedBookmarkIndex) => {
    const pageTitle = bookmarks[clickedBookmarkIndex].title;

    chrome.storage.local.get([pageTitle], (result) => {
      const scrollResult = result[pageTitle]?.scroll;

      setBookmarks((respondedBookmarks) => {
        return respondedBookmarks.map((bookmark, index) => {
          return index === clickedBookmarkIndex
            ? {
                ...bookmark,
                isChecked: !bookmark.isChecked,
                scrollPos: scrollResult,
              }
            : bookmark;
        });
      });
    });
  };

  const getCheckedBookmarks = (originBookmarks) =>
    originBookmarks.filter((bookmark) => bookmark.isChecked);

  const getValidBookmarks = (originBookmarks) =>
    originBookmarks.filter((bookmark) => isValidUrl(bookmark.url));

  const changeInputNewFolder = (changedValue, actionMeta) => {
    if (actionMeta.action === 'input-change') {
      setFolderName(changedValue);
    }
  };

  const handleSubmit = () => {
    if (folderName === '') {
      alert('Please enter folder name');
      return;
    }

    const bookmarksForPayload = getValidBookmarks(
      getCheckedBookmarks(bookmarks)
    ).map((bookmark) => {
      return {
        title: bookmark.title,
        url: refineUrl(bookmark.url),
        scroll_pos: bookmark.scrollPos || 0.0,
        favicon_url: bookmark.favIconUrl?.includes('http') ? bookmark.favIconUrl : '',
      };
    });

    if (bookmarksForPayload.length === 0) {
      alert('At least one should be checked');
      return;
    }

    const postData = {
      bookmark_folder_name: folderName,
      bookmarks: bookmarksForPayload,
    };

    postServer(postData);
  };

  const handleCheckAll = () => {
    const bookmarkTitleList = bookmarks.map((bookmark) => bookmark.title);
    const isCheckedAllResult = isCheckedAll();

    chrome.storage.local.get(bookmarkTitleList, (result) => {
      setBookmarks((respondedBookmarks) => {
        return respondedBookmarks.map((bookmark) => {
          return {
            ...bookmark,
            scrollPos: result[bookmark.title]?.scroll || 0.0,
            isChecked: !isCheckedAllResult,
          };
        });
      });
    });
  };

  const isCheckedAll = () => bookmarks.findIndex((bookmark) => bookmark.isChecked === false) === -1;

  return (
    <FormWrapper>
      <LogoRow>
        <LogoImage src={logoSrc} />
        <CheckAll onClick={handleCheckAll}>{isCheckedAll() ? 'Uncheck all' : 'Check all'}</CheckAll>
      </LogoRow>
      <List>
        {bookmarks.map(({ favIconUrl, title, url, isChecked }, index) => (
          <ListRowItem
            key={index}
            {...{ index, favIconUrl, title, url, isChecked }}
            handleClick={() => handleClick(index)}
          />
        ))}
      </List>
      <InputRow>
        <Font>Folder</Font>
        <CreatableSelectWrapper>
          <CreatableSelect
            placeholder={'Select or create'}
            onInputChange={changeInputNewFolder}
            maxMenuHeight={150}
            options={bookmarkFolderList.map((folder) => ({label: folder.name, value: folder.name}))}
          />
        </CreatableSelectWrapper>
      </InputRow>

      <ButtonRow>
        <CompleteButton onClick={handleSubmit}>Save</CompleteButton>
      </ButtonRow>
    </FormWrapper>
  );
}

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 21px 25px 23px;
`;

const LogoRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const LogoImage = styled.img`
  height: 28px;
  margin-left: -7px;
`;

const CheckAll = styled.div`
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #7785ff;

  &:hover {
    cursor: pointer;
  }
`;

const List = styled.div`
  max-height: 200px;
  margin-top: 28px;
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

const InputRow = styled.div`
  display: flex;
  margin-top: 22px;
  align-items: center;
`;

const Font = styled.div`
  font-size: 14px;
  line-height: 15px;
  letter-spacing: -0.02em;
  color: #90a0ad;
`;

const CreatableSelectWrapper = styled.div`
  width: 214px;
  margin-left: 26px;
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

  font-weight: bold;
  font-size: 10px;
  line-height: 15px;
  color: #ffffff;
  text-align: center;

  &:hover {
    cursor: pointer;
  }
`;
