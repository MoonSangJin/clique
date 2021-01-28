import OptionIcon from '../../Components/OptionIcon';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import DropdownMenu from './DropdownMenu';
import PopoverController from '../../Components/Popover/PopoverController';
import { useDispatch } from 'react-redux';
import Modal from '../../Components/Modal';
import { deleteBookmarkRequest, renameBookmarkRequest } from '../../Store/Bookmark/actions';


const BookmarkItem = ({ detailData }) => {
  const { faviconUrl, title, url, id } = detailData;
  const [isOpenDropdownMenu, setIsOpenDropdownMenu] = useState(false);
  const [isOpenRenameBookmarkModal, setIsOpenRenameBookmarkModal] = useState(false);
  const [newBookmarkTitle, setNewBookmarkTitle] = useState('');
  const [dotMenuElementHolder, setDotMenuElementHolder] = useState(null);
  const dotMenuRef = React.createRef();
  const dispatch = useDispatch();

  useEffect(() => {
    setDotMenuElementHolder(dotMenuRef.current);
  }, [dotMenuRef]);

  const openRenameModalAndFillInputBox = () => {
    setNewBookmarkTitle(title);
    setIsOpenDropdownMenu(false);
    setIsOpenRenameBookmarkModal(true);
  };

  const closeModalAndClearBookmarkInfo = () => {
    setIsOpenRenameBookmarkModal(false);
    setNewBookmarkTitle('');
  };

  const renameBookmark = () => {
    dispatch(renameBookmarkRequest({bookmarkId: id, title: newBookmarkTitle}));
    setIsOpenRenameBookmarkModal(false);
  };

  const deleteBookmark = () => {
    dispatch(deleteBookmarkRequest({bookmarkId: id}));
    setIsOpenDropdownMenu(false);
  };

  return (
    <>
      <UrlRow>
        <ExternalLink href={url} target={'_blank'}>
          <UrlImage src={faviconUrl} />
          <UrlTitle>{title}</UrlTitle>
          <Url>{url}</Url>
        </ExternalLink>
        <PopoverController ref={dotMenuRef} onClick={() => setIsOpenDropdownMenu(true)}>
          <OptionIcon />
        </PopoverController>
      </UrlRow>

      <DropdownMenu
        isOpen={isOpenDropdownMenu}
        closeHandler={() => setIsOpenDropdownMenu(false)}
        anchorEl={dotMenuElementHolder}
        openRenameBookmarkModal={openRenameModalAndFillInputBox}
        deleteBookmark={deleteBookmark}
      />

      <Modal
        isOpen={isOpenRenameBookmarkModal}
        closeHandler={closeModalAndClearBookmarkInfo}
      >
        <ModalContentsWrapper>
          <ModalTitle>Rename Bookmark</ModalTitle>
          <ModalInput onChange={(e) => setNewBookmarkTitle(e.target.value)} value={newBookmarkTitle} />
          <ModalButtonWrapper>
            <ModalCancelButton onClick={closeModalAndClearBookmarkInfo}>
              Cancel
            </ModalCancelButton>
            <ModalSaveButton onClick={renameBookmark}>Save</ModalSaveButton>
          </ModalButtonWrapper>
        </ModalContentsWrapper>
      </Modal>
    </>
  );
};


const ExternalLink = styled.a`
  all: unset;
  display: flex;
  width: 100%;
  flex-direction: row;

  &:hover {
    cursor: pointer;
  }
`;

const UrlRow = styled.div`
  display: flex;
  align-items: center;
  height: 44px;

  :hover {
    background-color: #f5f7f8;
  }
`;

const UrlImage = styled.img`
  width: 16px;
  height: 16px;
  margin: 0 17px 0 16px;
  flex-shrink: 0;
`;

const UrlTitle = styled.div`
  // Todo(maitracle): 이유는 모르지만 width값을 부여해야만 flex 속성이 작용하여 적절한 가로크기를 찾아간다.
  //                  이유를 찾아 width 속성 없이 해결한다.
  width: 10px;
  margin-right: 76px;
  flex: 1 1 10px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.02em;
  color: #000000;
`;

const Url = styled.div`
  width: 178px;
  display: block;
  overflow: hidden;
  height: 21px;
  margin-right: 14px;
  text-overflow: ellipsis;
  text-align: right;
  white-space: nowrap;

  font-size: 12px;
  line-height: 17px;
  letter-spacing: -0.02em;
  text-decoration-line: underline;
  color: #90a0ad;
`;

const ModalContentsWrapper = styled.div`

`;

const ModalTitle = styled.div`
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.02em;

  color: #000000;
`;

const ModalInput = styled.input`
  all: unset;
  width: 500px;
  height: 45px;
  background: #f5f7f8;
  border-radius: 50px;
  margin-top: 21px;
  text-indent: 23px;
`;

const ModalButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 39px;
`;

const ModalCancelButton = styled.button`
  all: unset;
  width: 72px;
  height: 33px;
  border-radius: 3px;
  background: #ffffff;
  &:hover {
    cursor: pointer;
  }

  font-weight: bold;
  font-size: 10px;
  line-height: 15px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #7785ff;
  border: 1px solid #7785ff;
`;

const ModalSaveButton = styled.button`
  all: unset;
  width: 72px;
  height: 33px;
  background: #7785ff;
  border-radius: 3px;
  &:hover {
    cursor: pointer;
  }

  font-weight: bold;
  font-size: 10px;
  line-height: 15px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #ffffff;
  border: 1px solid #7785ff;
  margin-left: 8px;
`;


export default BookmarkItem;
