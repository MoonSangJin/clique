import React, { useEffect, useState } from 'react';
import PopupPresenter from './PopupPresenter';
import axios from 'axios';
import { HOST } from '../../Constants/requests';
import NotSignInPage from './NotSignInPage';
import { getAccessToken } from '../../Utils/tokenHandler';

const PopupContainer = () => {
  const [tabs, setTabs] = useState([]);
  const [token, setToken] = useState('');
  const searchUrl = () => {
    chrome.tabs.query({ lastFocusedWindow: true }, (tabs) => setTabs(tabs));
  };

  const postServer = async (state) => {
    try {
      await axios.post(HOST + '/bookmark-folder', state, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert('Bookmarks are saved successfully!');
      window.close();
    } catch (error) {
      alert('fail');
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

  return token ? (
    <PopupPresenter {...{ tabs, postServer }} />
  ) : (
    <NotSignInPage />
  );
};
export default PopupContainer;
