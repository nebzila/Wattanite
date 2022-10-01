/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from 'react';
import { mainContext } from '../main-box/main-box';
import WinnerMovie from '../winner-movie/winner-movie';
import WinnerRestaurant from '../winner-restaurant/winner-restaurant';
import Loading from '../loading/loading';
import { getWinners } from '../../Services/server-service';
import './winner-page.css';
import { WinnerType } from '../../allTypes';

const WinnerPage = () => {

  const [winnerList, setWinnerList] = useState<WinnerType[]>([]);

  useEffect(() => {
    getWinners().then((result) => {
      setWinnerList(result);
    });
  }, []);
 
  return !winnerList[0] ? (
    <>
      <h1 className="loader">Collecting results...</h1>
      <Loading></Loading>
    </>
  ) : (
    <div className="winner-page">
      <h1>Winners!</h1>
      <div className="winners">
        <WinnerMovie {...winnerList[0].movie}/>
        <WinnerRestaurant {...winnerList[0].restaurant}/>
      </div>
    </div>
  );
};

export default WinnerPage;
