import React, { useState, useEffect } from 'react';
import PopupPresenter from './PopupPresenter';
import axios from 'axios';
import qs from 'qs';
const token =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjEwNTAxMTY0LCJqdGkiOiIxZWNlMWRkYjY5NDU0ZjYwOTM4ZWMwYzVjOTJiODZlZiIsInVzZXJfaWQiOjR9.PIu-1s6rGKTW1ClLiWYCVynQY0ccJV4Ml8yox_vgItY';

const PopupContainer = () => {
  const [tabs, setTabs] = useState([]);
  const searchUrl = () => {
    chrome.tabs.query({ lastFocusedWindow: true }, (tabs) => setTabs(tabs));
  };

  const mock_data = {
    bookmarks: [
      {
        title: 'hi',
        url: 'http://someurl598494811.com',
        scroll_pos: 10,
        favicon_url: 'http://www.naver.com',
      },
      {
        title: 'hi2',
        url: 'http://someurl55156511.com',
        scroll_pos: 20,
        favicon_url: 'http://www.naver.com',
      },
    ],
  };

  const postServer = async (state) => {
    try {
      const data = await axios.post(
        'http://ec2-52-78-239-231.ap-northeast-2.compute.amazonaws.com/bookmark',
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
    postServer(mock_data);
  }, []);
  return <PopupPresenter {...{ tabs }}></PopupPresenter>;
};
export default PopupContainer;
