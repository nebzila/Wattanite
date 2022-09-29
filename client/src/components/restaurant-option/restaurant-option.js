import React, { useContext, useEffect } from 'react';
import { sendVote } from '../../Services/server-service';
import { mainContext } from '../main-box/main-box';
import './restaurant-option.css';

const RestaurantOption = (props) => {
  const { setPage, setFormData, formData } = useContext(mainContext);

  const submitHandler = async (event, restaurantData) => {
    event.preventDefault();
    console.log(restaurantData);
    const restData = { ...formData, restaurant: restaurantData };
    console.log('RESTDATA:', restData);
    await setFormData(restData);
    console.log('formdata: ', formData);
    sendVote(restData);
  };

  useEffect(() => {
    if (formData.movie.id && formData.restaurant.place_id) setPage('winner');
  }, [formData]);

  return (
    <div className="restaurant-option">
      <div className="restaurant-left">
        <img className="restaurant-poster" src={props.value.photos[0].imgsrc} />
      </div>
      <div className="restaurant-right">
        <div className="restaurant-text">
          <h1 className="restaurant-title">{props.value.name}</h1>
        </div>
        <button
          className="restaurant-vote-button"
          onClick={(event) => {
            submitHandler(event, props.value);
          }}
        >
          + 1
        </button>
      </div>
    </div>
  );
};
export default RestaurantOption;
