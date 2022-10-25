/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from 'react';
import { mainContext } from '../main-box/main-box';
import WinnerMovie from '../winner-movie/winner-movie';
import WinnerRestaurant from '../winner-restaurant/winner-restaurant';
import Loading from '../loading/loading';
import { getWinners } from '../../Services/server-service';
import './vote-page.css';
import { WinnerType, Iprops, MovieType, RestaurantType } from '../../allTypes';
import Confetti from 'react-confetti';
import WinnerPage from '../winner-page/winner-page';
import { result } from 'cypress/types/lodash';
import { Socket } from 'socket.io-client';

const VotePage = (props: Iprops) => {

  const { winnersList, setWinnersList, end, setEnd, votes, formData, setVotes } = useContext(mainContext);

  const [clicked, setClicked] = useState<number>(0)

  const calculateWinners = () => {
    const resultsMovie: any = {};
    const resultsRests: any = {};
    votes.forEach( (vote) => {
      if (resultsMovie[vote.movie.title]) {
      resultsMovie[vote.movie.title] +=1
      } else resultsMovie[vote.movie.title] =1
      if (resultsRests[vote.restaurant.name]) {
        resultsRests[vote.restaurant.name] +=1
        } else resultsRests[vote.restaurant.name] =1
    })

    const finalMovieTitle = calcWinnerfromCountObj(resultsMovie)
    const finalRestName = calcWinnerfromCountObj(resultsRests)


    const WinnerMovie = votes.filter((vote)=>
    {
      return vote.movie.title === finalMovieTitle
    })

    const WinnerRestaurant = votes.filter((vote)=>
    {
      return vote.restaurant.name === finalRestName
    })

    return {movie:WinnerMovie[0].movie, restaurant:WinnerRestaurant[0].restaurant}

  }

  const calcWinnerfromCountObj = (resultsObj: any) => {
    let maxIndex: number = 0;
    let maxVal: number = 0;
    Object.keys(resultsObj)
    const valArr: number[] = Object.values(resultsObj)
    valArr.forEach((val: number, index: number, array: number[]) => {
      if (array[maxIndex] < val) {
        maxIndex = index
        maxVal = val;
      };
    })
    // what if multiple of same? - can add randomization later
    const finalIdentifier: string = Object.keys(resultsObj)[maxIndex]
    return finalIdentifier;
  }

  const clickHandler = () => {
    const calculatedWinners = calculateWinners();
    props.socket.emit('end', calculatedWinners)
    setWinnersList(calculatedWinners)
    setEnd(true)
  }
  return !end ? (<div className='votes'>
    <h1 className='userText'> Votes: </h1>
    {votes.map((vote) =>
    <>
    <div className='userContainer'>
    <h1 className='username'>{vote.name}:</h1>
    <div className='voteContainer'>
    <WinnerMovie movie={vote.movie}></WinnerMovie>
    <WinnerRestaurant restaurant={vote.restaurant}></WinnerRestaurant>
    </div>
    </div>
</>

    )}
    <button onClick={clickHandler}> End Game </button>
  </div>) : (
    <WinnerPage movie={winnersList!.movie} restaurant={winnersList!.restaurant}></WinnerPage>
  )

};

export default VotePage;
