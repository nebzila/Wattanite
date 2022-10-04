import {render, screen, fireEvent, cleanup} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MainBox from '../components/main-box/main-box';
// import {rest} from 'msw'
// import {setupServer} from 'msw/node'
import {movies, restaurants} from './mocks'
import MoviePage from '../components/movie-page/movie-page';
import { getMovies } from '../Services/server-service';





describe('Main Box Component', () => {


  test('should render Loading after submit', async () => {
    render(<MainBox> </MainBox>);
    const submitBtn = screen.getByRole('button', {name: "Start"})
    const postCodeInput = screen.getByPlaceholderText('Enter your postcode...') // if doesn't find the test will fail
    const nameInput = screen.getByPlaceholderText('Enter your name...')
    await userEvent.type(postCodeInput, "SW2022")
    await userEvent.type(nameInput, "AlexGeorge")

    fireEvent.submit(submitBtn)

    expect(screen.getByTestId('loadingdiv')).toBeInTheDocument()
  })



})