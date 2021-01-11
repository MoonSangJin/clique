import React, { useState, useEffect } from 'react';
import PopupPresenter from './PopupPresenter';
const PopupContainer = () => {
  const [tabs, setTabs] = useState([]);
  const searchUrl = () =>
    chrome.tabs.query({ lastFocusedWindow: true }, (tabs) => setTabs(tabs));

  useEffect(() => {
    searchUrl();
  }, []);
  return <PopupPresenter {...{ tabs }}></PopupPresenter>;
};
export default PopupContainer;
