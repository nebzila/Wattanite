/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from 'react';
import { mainContext } from '../main-box/main-box';
import WinnerMovie from '../winner-movie/winner-movie';
import WinnerRestaurant from '../winner-restaurant/winner-restaurant';
import Loading from '../loading/loading';
import { getWinners } from '../../Services/server-service';
import './winner-page.css';
import { WinnerType } from '../../allTypes';
import Confetti from 'react-confetti';

const WinnerPage = () => {

  const [winnerList, setWinnerList] = useState<WinnerType>();
  const { formData } = useContext(mainContext);

  const [windowSize, setWindowSize] = useState(getWindowSize());

  function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
  }

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  useEffect(() => {
    getWinners(formData.name).then((result) => {
      console.log('result of getWinners', result)
      setWinnerList(result);
      console.log('after setting winnerList', winnerList)
    });
  }, []);

  return !winnerList ? (
    <>
      <h1 className="loader">Collecting results...</h1>
      <Loading></Loading>
    </>
  ) : (
    <div className="winner-page">
      <h1>Winners!</h1>
      <div className="winners">
        <Confetti
          width={windowSize.innerWidth}
          height={windowSize.innerHeight}
        />
        <WinnerMovie movie={winnerList.movie}/>
        <WinnerRestaurant restaurant={{...winnerList.restaurant}}/>
      </div>
    </div>
  );
};

export default WinnerPage;
