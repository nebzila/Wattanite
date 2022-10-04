import {movies, restaurants} from '../../test/mocks'
import {render, screen, fireEvent, cleanup, waitForElementToBeRemoved} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MoviePage from '../movie-page/movie-page';
import {rest} from 'msw'
import {setupServer} from 'msw/node'
import MovieOption from './movie-option';



describe('Movie Page Component', () => {


  test('should render Movie Options', async () => {



    render(<MovieOption {...movies[0]}/>)


    screen.getAllByTestId('movieOptionDiv')



});

})