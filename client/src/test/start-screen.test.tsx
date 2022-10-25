import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import StartScreen from '../components/start-screen/start-screen';


describe('Start Screen Component', () => {

  test('should render the start form correctly', () => {
    render(<StartScreen/>)
    screen.getByText(/Postcode/)
    screen.getByText(/Name/)
    screen.getByPlaceholderText('Enter your postcode...') // if doesn't find the test will fail
    screen.getByPlaceholderText('Enter your name...')
    screen.getByRole('button', {name: "Start"})
  })

  test('Text should appear in input boxes', async () => {
    render(<StartScreen/>)
    const postCodeInput = screen.getByPlaceholderText('Enter your postcode...') // if doesn't find the test will fail
    const nameInput = screen.getByPlaceholderText('Enter your name...')
    const submitBtn = screen.getByRole('button', {name: "Start"})

    await userEvent.type(postCodeInput, "SW2022")
    await userEvent.type(nameInput, "AlexGeorge")

    expect(screen.getByDisplayValue("SW2022")).toHaveAttribute('name','postcode')
   expect(screen.getByDisplayValue("AlexGeorge")).toHaveAttribute('name','name')

  })
})