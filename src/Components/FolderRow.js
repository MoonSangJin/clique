import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Folder from '../Components/Folder';
import ListFolder from '../Components/ListFolder';
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export default function FolderRow() {
  const [completeList, setCompleteList] = useState([]);
  const [favorite, setFavorite] = useState(true);

  useEffect(() => {
    chrome.storage.sync.get(['key'], function (result) {
      if (result.key) {
        setCompleteList(result.key);
      }
    });
  }, []);

  return (
    <Container>
      {completeList.map((data, index) => {
        return (
          <div key={index}>
            <Folder
              favIconUrl={data.favIconUrl}
              title={data.title}
              url={data.url}
              completeList={completeList}
              favorite={favorite}
            />
            <ListFolder
              favIconUrl={data.favIconUrl}
              title={data.title}
              url={data.url}
              completeList={completeList}
              favorite={favorite}
            />
          </div>
        );
      })}
    </Container>
  );
}
