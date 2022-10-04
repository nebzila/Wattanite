import { restaurants } from './mocks'
import { render, screen, fireEvent, cleanup, waitForElementToBeRemoved } from '@testing-library/react';
import RestaurantPage from '../components/restaurant-page/restaurant-page';

describe('Restaurant Page Component', () => {

  test('should render Restaurant Options', async () => {

    render(<RestaurantPage/>)
    // on load there is a useEffect (not happening in testing)
    await waitForElementToBeRemoved(() => screen.queryByTestId('loadingdiv'));

    screen.getAllByTestId('restaurantPage-div')

  });

  test('should render Noodle House restaurant correctly', async () => {
    render(<RestaurantPage/>)

    // on load there is a useEffect (not happening in testing)
    await waitForElementToBeRemoved(() => screen.queryByTestId('loadingdiv'));

    screen.getAllByTestId('restaurantPage-div')
    screen.getByText('Noodle House')    //name

  });
})