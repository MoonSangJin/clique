import React from 'react';
import styled from 'styled-components';
import folder from '../assets/img/folder.svg';
import favoriteFolder from '../assets/img/favoriteFolder.svg';
import option from '../assets/img/option.svg';

export default function ListFolder({
  favIconUrl,
  title,
  url,
  completeList,
  favorite,
}) {
  return (
    <Container>
      <ListTitle>
        <Folder {...{ favorite }} />
        <Text>{title}</Text>
      </ListTitle>

      <Icon>
        {completeList.map((data, index) => {
          return (
            <FavIcon key={index} src={data.favIconUrl} alt={data.favIconUrl} />
          );
        })}
        <FavIcon src={folder} />
        <FavIcon src={folder} />
        <FavIcon src={folder} />
        <FavIcon src={folder} />
        <FavIcon src={folder} />
        <FavIcon src={folder} />
      </Icon>

      <OptionIcon src={option} alt={option} />
    </Container>
  );
}

const Container = styled.div`
  width: 772px;
  height: 75px;
  display: flex;
  justify-content: space-around;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.08);
`;
const ListTitle = styled.div`
  width: 330px;
  display: flex;
  align-items: center;
`;
const Folder = styled.img.attrs(({ favorite }) =>
  favorite ? { src: `${favoriteFolder}` } : { src: `${folder}` }
)``;

const Text = styled.div`
  display: block;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
  /* identical to box height */
  letter-spacing: -0.02em;

  margin-left: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  width: 155px;
  overflow-x: hidden;
`;
const FavIcon = styled.img`
  width: 26px;
  height: 26px;
`;
const OptionIcon = styled.img``;
