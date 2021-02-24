import React, { useEffect, useState } from 'react';
import PopupPresenter from './PopupPresenter';
import NotSignInPage from './NotSignInPage';
import { getAccessToken } from '../../Utils/tokenHandler';
import { request } from '../../Utils/request';


const PopupContainer = () => {
  const [tabs, setTabs] = useState([]);
  const [token, setToken] = useState('');
  const [bookmarkFolderList, setBookmarkFolderList] = useState([]);

  const searchUrl = () => {
    chrome.tabs.query({ lastFocusedWindow: true }, (tabs) => setTabs(tabs));
  };

  const postServer = async (state) => {
    try {
      const res = await request({
        url: '/bookmark-folder',
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
        data: state,
      });

      const errorMessagePrefix = 'Failed to save the following : \n';
      const failedToCreateBookmarksMessage = res.data.failedToCreateBookmarks.reduce((accumulator, bookmark) => {
        return `${accumulator}${bookmark.title} (${bookmark.url})\n`;
      }, errorMessagePrefix);

      if (failedToCreateBookmarksMessage === errorMessagePrefix) {
        alert('Bookmarks are saved successfully!');
        window.close();
      } else {
        alert(failedToCreateBookmarksMessage);
      }
    } catch (error) {
      alert('Failed to save bookmarks.');
    }
  };

  useEffect(() => {
    searchUrl();
  }, []);

  useEffect(() => {
    getAccessToken().then((res) => {
      if (res) {
        setToken(res);
      } else {
        setToken('');
      }
    });
  }, []);

  useEffect(() => {
    if (token) {
      request({
        url: '/bookmark-folder',
        method: 'GET',
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((res) => {
          setBookmarkFolderList(res.data);
        })
    }
  }, [token]);

  return token ? (
    <PopupPresenter {...{ tabs, postServer, bookmarkFolderList }} />
  ) : (
    <NotSignInPage />
  );
};
export default PopupContainer;
