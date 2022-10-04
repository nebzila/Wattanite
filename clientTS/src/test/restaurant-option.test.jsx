import { restaurants } from './mocks'
import { render, screen, fireEvent, cleanup, waitForElementToBeRemoved} from '@testing-library/react';
import RestaurantOption from '../components/restaurant-option/restaurant-option';

describe('Restaurant Page Component', () => {

  test('should render Restaurant Options', async () => {

    render(<RestaurantOption {...restaurants.results[0]}/>)

    screen.getAllByTestId('restaurantOptionDiv')

});

})