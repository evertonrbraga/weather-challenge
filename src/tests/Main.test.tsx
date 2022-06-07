import { render, screen, fireEvent } from '@testing-library/react';
import Main from '../pages/Main';

describe('<Main />', () => {
  it('should render the Main title', () => {
    render(<Main />);
    const title = screen.getByText(/dados climáticos/i);
    
    expect(title).toBeInTheDocument();
  });

  it('should api have been called', async () => {
    render(<Main />);

    const button = screen.getByText(/buscar/i);
    const handleWeather = jest.fn()

    fireEvent.click(button)
    handleWeather()
    
    expect(handleWeather).toHaveBeenCalled()
  });
})
