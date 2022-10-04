import {movies, restaurants} from './mocks'
import {render, screen, fireEvent, cleanup, waitForElementToBeRemoved} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MoviePage from '../components/movie-page/movie-page';
import {rest} from 'msw'
import {setupServer} from 'msw/node'
import MovieOption from '../components/movie-option/movie-option';



describe('Movie Page Component', () => {


  test('should render Movie Options', async () => {



    render(<MovieOption {...movies.results[0]}/>)


    screen.getAllByTestId('movieOptionDiv')



});

})