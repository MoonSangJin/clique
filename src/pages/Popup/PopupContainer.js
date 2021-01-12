import React, { useState, useEffect } from 'react';
import PopupPresenter from './PopupPresenter';
import axios from 'axios';

const token =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjEwNTAxMTY0LCJqdGkiOiIxZWNlMWRkYjY5NDU0ZjYwOTM4ZWMwYzVjOTJiODZlZiIsInVzZXJfaWQiOjR9.PIu-1s6rGKTW1ClLiWYCVynQY0ccJV4Ml8yox_vgItY';

const PopupContainer = () => {
  const [tabs, setTabs] = useState([]);
  const searchUrl = () => {
    chrome.tabs.query({ lastFocusedWindow: true }, (tabs) => setTabs(tabs));
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
  }, []);

  return <PopupPresenter {...{ tabs, postServer }}></PopupPresenter>;
};
export default PopupContainer;
