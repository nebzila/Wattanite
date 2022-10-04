import {movies, restaurants} from './mocks'
import {render, screen, fireEvent, cleanup, waitForElementToBeRemoved} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MoviePage from '../components/movie-page/movie-page';
import {rest} from 'msw'
import {setupServer} from 'msw/node'



describe('Movie Page Component', () => {


  test('should render Movie Options', async () => {


    render(<MoviePage/>)
    // on load there is a useEffect (not happening in testing)
    await waitForElementToBeRemoved(() => screen.queryByTestId('loadingdiv'));

    screen.getAllByTestId('moviePage-div')

});

test('should render Blonde movie correctly', async () => {
  render(<MoviePage/>)

  // on load there is a useEffect (not happening in testing)
  await waitForElementToBeRemoved(() => screen.queryByTestId('loadingdiv'));

  screen.getAllByTestId('moviePage-div')
  screen.getByText('Blonde') //title

});

})