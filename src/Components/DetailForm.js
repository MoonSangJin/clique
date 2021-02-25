import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import backSpace from '../assets/img/backSpace';
import DetailWhiteButton from './DetailWhiteButton';
import DetailPurpleButton from './DetailPurpleButton';
import Modal from './Modal';
import { crawlPage } from '../Utils/crawlHandler';
import Input from './Input';
import BookmarkItem from '../Modules/Bookmark/BookmarkItem';
import { fetchBookmarkFolderRequest, fetchBookmarkRequest } from '../Store/Bookmark/actions';
import { useDispatch, useSelector } from 'react-redux';
import openBookmark from '../Utils/openBookmark';
import { logOpenBookmarkAll } from '../Services/googleAnalytics';


export default function DetailForm({ folderData, detailDataList, handleAddBookmark }) {
  const bookmarkReducer = useSelector((state) => state.bookmarkReducer);
  const dispatch = useDispatch();

  const [isOpenAddBookmarkModal, setIsOpenAddBookmarkModal] = useState(false);
  const [newBookmarkInfo, setNewBookmarkInfo] = useState({
    bookmarkFolderId: folderData.id,
    url: '',
    title: '',
    scrollPos: 0,
    faviconUrl: '',
  });

  useEffect(() => {
    if (!bookmarkReducer.isInitializedBookmarkFolderList) {
      dispatch(fetchBookmarkFolderRequest());
    }
  }, [bookmarkReducer.isInitializedBookmarkFolderList, dispatch]);

  useEffect(() => {
    if (!bookmarkReducer.isInitializedBookmarkList) {
      dispatch(fetchBookmarkRequest());
    }
  }, [bookmarkReducer.isInitializedBookmarkList, dispatch]);

  const changeUrl = (e) => {
    setNewBookmarkInfo((bookmarkInfo) => ({ ...bookmarkInfo, url: e.target.value }));
  };

  const changeTitle = (e) => {
    setNewBookmarkInfo((bookmarkInfo) => ({ ...bookmarkInfo, title: e.target.value }));
  };

  const goBack = () => window.history.back();

  const openAllBookmarks = () => {
    logOpenBookmarkAll(folderData.id);

    detailDataList.forEach((detailData) => {
      openBookmark(detailData.url, detailData.scrollPos, '_blank');
    });
  };

  const fetchPageInfoFromUrl = async () => {
    const crawledInfo = await crawlPage(newBookmarkInfo.url);
    setNewBookmarkInfo((bookmarkInfo) => ({
      ...bookmarkInfo,
      ...crawledInfo,
    }));
  };

  const closeModalAndClearBookmarkInfo = () => {
    setNewBookmarkInfo({
      bookmarkFolderId: folderData.id,
      url: '',
      title: '',
      scrollPos: 0,
      faviconUrl: '',
    });
    setIsOpenAddBookmarkModal(false);
  };

  const addBookmarkAndCloseModal = () => {
    handleAddBookmark(newBookmarkInfo);
    closeModalAndClearBookmarkInfo();
  };

  return (
    <>
      <Container>
        <TitleRow>
          <Left>
            <BackSpace onClick={goBack} src={backSpace} />
            <Title>{folderData.name}</Title>
          </Left>
          <Right>
            <DetailWhiteButton onClick={openAllBookmarks} />
            <DetailPurpleButtonWrapper>
              <DetailPurpleButton onClick={() => setIsOpenAddBookmarkModal(true)} />
            </DetailPurpleButtonWrapper>
          </Right>
        </TitleRow>
        <GrayHorizontail />
        <UrlListWrapper>
          {detailDataList.map((detailData) => {
            return <BookmarkItem key={detailData.id} {...{ detailData }} />;
          })}
        </UrlListWrapper>
      </Container>
      <Modal
        isOpen={isOpenAddBookmarkModal}
        closeHandler={closeModalAndClearBookmarkInfo}
      >
        <ModalContentsWrapper>
          <ModalTitle>
            Add to <ModalFolderName>{folderData.name}</ModalFolderName>
          </ModalTitle>

          <ModalInputWrapper>
            <Input value={newBookmarkInfo.url} onChange={changeUrl} placeholder={'https://'} validationMessage={''}
                   onBlur={fetchPageInfoFromUrl} />
          </ModalInputWrapper>

          <div>
            <Input value={newBookmarkInfo.title} onChange={changeTitle} placeholder={'Enter bookmark name'} validationMessage={''} />
          </div>

          <ModalButtonWrapper>
            <ModalCancelButton onClick={closeModalAndClearBookmarkInfo}>Cancel</ModalCancelButton>
            <ModalSaveButton onClick={addBookmarkAndCloseModal}>Save</ModalSaveButton>
          </ModalButtonWrapper>
        </ModalContentsWrapper>
      </Modal>
    </>
  );
}

const Container = styled.div`
  min-height: calc(100vh - 122px);
  width: 100%;
  background: #ffffff;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.08);
  border-radius: 8px;

  margin-left: 20px;
  padding: 24px 34px;
  box-sizing: border-box;
`;

const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BackSpace = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 12px;
  
  cursor: pointer;
`;

const Title = styled.div`
  max-width: 640px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #070701;
`;

const DetailPurpleButtonWrapper = styled.div`
  margin-left: 14px;
`;

const GrayHorizontail = styled.div`
  margin-top: 16px;
  height: 0;
  border: 1px solid rgba(222, 227, 230, 0.8);
`;

const UrlListWrapper = styled.div`
  margin-top: 20px;

  max-height: 500px;
  overflow: scroll;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
`;

const ModalContentsWrapper = styled.div`
  width: 500px;
`;

const ModalTitle = styled.div`
  font-size: 16px;
  line-height: 24px;
  align-items: center;
  letter-spacing: -0.02em;
  color: #000000;
`;

const ModalFolderName = styled.span`
  color: #7785FF;
  font-weight: 600;
`;

const ModalInputWrapper = styled.div`
  margin-top: 31px;
  width: 100%;
`;

const ModalButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ModalCancelButton = styled.button`
  width: 72px;
  height: 33px;
  border: 1px solid #7785FF;
  border-radius: 3px;
  background-color: white;
  box-sizing: border-box;
  
  font-weight: bold;
  font-size: 10px;
  line-height: 15px;
  letter-spacing: -0.02em;
  color: #7785FF;
`;

const ModalSaveButton = styled.button`
  width: 72px;
  height: 33px;
  background: #7785FF;
  border: 0;
  border-radius: 3px;
  margin-left: 8px;
  
  font-weight: bold;
  font-size: 10px;
  line-height: 15px;
  letter-spacing: -0.02em;
  color: #FFFFFF;
`;
