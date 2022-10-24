import React, { useContext, useEffect, MouseEvent } from 'react';
import { RestaurantType } from '../../allTypes';
import { sendVote } from '../../Services/server-service';
import { mainContext } from '../main-box/main-box';
import './restaurant-option.css';
import { Socket } from "socket.io-client";

interface Iprops  {
  socket: Socket,
  restaurant: RestaurantType
}

const RestaurantOption = (props: Iprops) => {
  const { votes, setVotes, setPage, setFormData, formData } = useContext(mainContext);

  const submitHandler = async (event: MouseEvent<HTMLButtonElement>, restaurantData: RestaurantType) => {
    event.preventDefault();
    const voteData = { ...formData, restaurant: restaurantData };
    const response =  await sendVote(voteData);
    const newVotes = [...votes, voteData]
    props.socket.emit('vote', newVotes)
    setVotes(newVotes);
    if (response) setFormData(voteData);
  };

  useEffect(() => {
    if (formData.movie.id && formData.restaurant.place_id) setPage('vote');
  }, [formData]);

  return (
    <div data-testid="restaurantOptionDiv" className="restaurant-option">
      <div className="restaurant-left">
        <img className="restaurant-poster" src={props.restaurant.photos[0].imgsrc} alt={props.restaurant.name}/>
      </div>
      <div className="restaurant-right">
        <div className="restaurant-text">
          <h1 className="restaurant-title">{props.restaurant.name}</h1>
        </div>
        <button
          className="restaurant-vote-button"
          onClick={(event) => {
            submitHandler(event, props.restaurant);
          }}
        >
          + 1
        </button>
      </div>
    </div>
  );
};
export default RestaurantOption;
