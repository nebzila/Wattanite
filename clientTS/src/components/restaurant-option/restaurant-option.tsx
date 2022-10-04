import React, { useContext, useEffect, MouseEvent } from 'react';
import { RestaurantType } from '../../allTypes';
import { sendVote } from '../../Services/server-service';
import { mainContext } from '../main-box/main-box';
import './restaurant-option.css';

const RestaurantOption = (restaurant: RestaurantType) => {
  const { setPage, setFormData, formData } = useContext(mainContext);

  const submitHandler = async (event: MouseEvent<HTMLButtonElement>, restaurantData: RestaurantType) => {
    event.preventDefault();
    const voteData = { ...formData, restaurant: restaurantData };
    const response =  await sendVote(voteData);
    console.log('saved to DB')
    if (response) setFormData(voteData);
    console.log('changed formData')
  };

  useEffect(() => {
    if (formData.movie.id && formData.restaurant.place_id) setPage('winner');
  }, [formData]);

  return (
    <div data-testid="restoptid" className="restaurant-option">
      <div className="restaurant-left">
        <img className="restaurant-poster" src={restaurant.photos[0].imgsrc} />
      </div>
      <div className="restaurant-right">
        <div className="restaurant-text">
          <h1 className="restaurant-title">{restaurant.name}</h1>
        </div>
        <button
          className="restaurant-vote-button"
          onClick={(event) => {
            submitHandler(event, restaurant);
          }}
        >
          + 1
        </button>
      </div>
    </div>
  );
};
export default RestaurantOption;
