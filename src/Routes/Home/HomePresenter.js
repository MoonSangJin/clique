import React from 'react';
import styled from 'styled-components';
import Gnb from '../../Components/Gnb';
import Background from '../../Components/Background';
import SearchInput from '../../Components/SearchInput';
import FolderRow from '../../Components/FolderRow';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { dumbStateIncrease, dumbStateIncreaseByAmount } from '../../Store/User/actions';


const Container = styled.div``;

const HomeScreenPresenter = () => {
  const userReducer = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  const increase = () => {
    dispatch(dumbStateIncrease());
  };

  const increaseWithValue = () => {
    dispatch(dumbStateIncreaseByAmount(5));
  };


  return (
    <Container>
      <Gnb />
      <Link to="/detail/">detail</Link>
      <Background />
      <SearchInput />
      <FolderRow />
      asdf
      <div>
        {userReducer.dumbState}
      </div>
      <button onClick={increase}>increase</button>
      <button onClick={increaseWithValue}>increase with value</button>
    </Container>
  );
};
export default HomeScreenPresenter;
