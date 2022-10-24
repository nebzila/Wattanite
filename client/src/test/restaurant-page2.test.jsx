import {render,act,  screen, waitForElementToBeRemoved} from '@testing-library/react';
import { rest } from 'msw';
import RestaurantPage from '../components/restaurant-page/restaurant-page';
import {getRestaurants} from '../Services/server-service'
import { restaurants } from './mocks';
// import {restaurants} from './mocks'




jest.mock('../Services/server-service')

describe('Restaurant Page Component', () => {

  test('should render restaurant Options - Jest Mock Version', async () => {
    getRestaurants.mockResolvedValue(restaurants.results);
    render(<RestaurantPage/>)

    await waitForElementToBeRemoved(() => screen.queryByTestId('loadingdiv'));

    screen.getByText('Pizza Express')
    await screen.findAllByTestId('restaurantOptionDiv')
  });



  });

