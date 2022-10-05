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

const VotePage = (props: Iprops) => {

  const { votes, formData, setVotes } = useContext(mainContext);

  type winners = {
    movie: MovieType
    restaurant: RestaurantType
  }

  const [winnersList, setWinnersList] = useState<winners>()
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
    console.log(resultsObj)
    Object.keys(resultsObj)
    const valArr: number[] = Object.values(resultsObj)
    valArr.forEach((val: number, index: number, array: number[]) => {
      if (array[maxIndex] < val) {
        console.log(val)
        maxIndex = index
        maxVal = val;
      };
    })
    // what if multiple of same? - can add randomization later
    const finalIdentifier: string = Object.keys(resultsObj)[maxIndex]
    console.log('finalIdentifier')
    return finalIdentifier;
  }

  const clickHandler = () => {
    const calculatedWinners = calculateWinners();
    console.log('calculated winners to be: ', calculatedWinners)
    setWinnersList(calculatedWinners)
    setClicked(1)
  }
  return !clicked ? (<div>
    <h1> THE VOTES ARE: </h1>
    {votes.map((vote) =>
      <h1>{vote.name}</h1>

    )}
    <button onClick={clickHandler}> End Game </button>
  </div>) : (
    <WinnerPage movie={winnersList!.movie} restaurant={winnersList!.restaurant}></WinnerPage>
  )

};

export default VotePage;
