import OptionIcon from '../../Components/OptionIcon';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import DropdownMenu from './DropdownMenu';
import PopoverController from '../../Components/Popover/PopoverController';


const BookmarkItem = ({ detailData }) => {
  const { faviconUrl, title, url } = detailData;
  const [isOpenDropdownMenu, setIsOpenDropdownMenu] = useState(false);
  const [dotMenuElementHolder, setDotMenuElementHolder] = useState(null);
  const dotMenuRef = React.createRef();

  useEffect(() => {
    setDotMenuElementHolder(dotMenuRef.current);
  }, [dotMenuRef]);

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
      />
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

export default BookmarkItem;
