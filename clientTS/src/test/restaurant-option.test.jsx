import { restaurants } from './mocks'
import { render, screen, fireEvent, cleanup, waitForElementToBeRemoved} from '@testing-library/react';
import RestaurantOption from '../components/restaurant-option/restaurant-option';
import * as socketIO from "socket.io-client";
const socket = socketIO.connect('http://localhost:3002');

describe('Restaurant Page Component', () => {

  test('should render Restaurant Options', async () => {

    render(<RestaurantOption restaurant={restaurants.results[0]} socket={socket}/>)

    // screen.getAllByTestId('restaurantOptionDiv')

});

})