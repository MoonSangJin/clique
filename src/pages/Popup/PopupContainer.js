import React, { useState, useEffect } from 'react';
import PopupPresenter from './PopupPresenter';
import axios from 'axios';
import { HOST } from '../../Constants/requests';

let token;
const searchToken = () => {
  chrome.storage.sync.get(['access'], function (result) {
    token = result.access;
  });
};
searchToken();

const PopupContainer = () => {
  const [tabs, setTabs] = useState([]);
  const searchUrl = () => {
    chrome.tabs.query({ lastFocusedWindow: true }, (tabs) => setTabs(tabs));
  };

  const postServer = async (state) => {
    try {
      const data = await axios.post(
        HOST + '/bookmark',
        state,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert('success');
      console.log(data);
    } catch (error) {
      console.log(error.response);
      alert('fail');
    }
  };

  useEffect(() => {
    searchUrl();
  }, []);

  return <PopupPresenter {...{ tabs, postServer }} />;
};
export default PopupContainer;
