import React from 'react';
import HomePresenter from './HomePresenter';

const HomeScreenContainer = () => {
  chrome.storage.sync.set({ key: 'im sangjin' }, function () {
    console.log('Value is set to ');
  });

  chrome.storage.sync.get(['key'], function (result) {
    console.log(result.key);
  });
  return <HomePresenter></HomePresenter>;
};
export default HomeScreenContainer;
