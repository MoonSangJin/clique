import React, { useEffect, useState } from 'react';
import PopupPresenter from './PopupPresenter';
import axios from 'axios';
import { HOST } from '../../Constants/requests';
import NotSignInPage from './NotSignInPage';


let token;
const searchToken = () => {
  chrome.storage.sync.get(['access'], function(result) {
    token = result.access;
  });
};
searchToken();

const PopupContainer = () => {
  const [tabs, setTabs] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const searchUrl = () => {
    chrome.tabs.query({ lastFocusedWindow: true }, (tabs) => setTabs(tabs));
  };

  const postServer = async (state) => {
    try {
      await axios.post(
        HOST + '/bookmark',
        state,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert('Bookmarks are saved successfully!');
      window.close();
    } catch (error) {
      alert('fail');
    }
  };

  useEffect(() => {
    searchUrl();
  }, []);

  return (
    isLoggedIn ?
      <PopupPresenter {...{ tabs, postServer }} /> :
      <NotSignInPage />
  );
};
export default PopupContainer;
