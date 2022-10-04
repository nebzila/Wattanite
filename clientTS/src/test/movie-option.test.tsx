import { movies } from './mocks'
import {render, screen } from '@testing-library/react';
import MovieOption from '../components/movie-option/movie-option';

describe('Movie Page Component', () => {

  test('should render Movie Options', async () => {

    render(<MovieOption {...movies.results[0]}/>)

    screen.getAllByTestId('movieOptionDiv')

  });

})