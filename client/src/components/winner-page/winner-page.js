/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from 'react';
import { mainContext } from '../main-box/main-box';
import WinnerMovie from '../winner-movie/winner-movie';
import WinnerRestaurant from '../winner-restaurant/winner-restaurant';
import Loading from '../loading/loading';
import { getWinners } from '../../Services/server-service';
import './winner-page.css';

const WinnerPage = () => {
  const CTX = useContext(mainContext);
  const [winnerList, setWinnerList] = useState([]);

  useEffect(() => {
    console.log('getting winners');
    getWinners().then((result) => {
      setWinnerList(result);
    });
  }, []);
  // i dont think i'll need to slice anymore
  return !winnerList[0] ? (
    <>
      <h1 className="loader">Collecting results...</h1>
      <Loading></Loading>
    </>
  ) : (
    <div className="winner-page">
      <h1>Winners!</h1>
      <div className="winners">
        <WinnerMovie
          className="movie-winner"
          value={winnerList[0].movie}
        ></WinnerMovie>
        <WinnerRestaurant
          className="restaurant-winner"
          value={winnerList[0].restaurant}
        />
      </div>
    </div>
  );
};

export default WinnerPage;
