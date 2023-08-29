import { render, screen } from '@testing-library/react';
import DashboardError from '../../app/dashboard/error';

describe('dashboard error page', () => {
  it('renders the error message', () => {
    const error = new Error('test error');
    render(<DashboardError error={error} reset={() => {}} />);
    expect(screen.getByText('Something went wrong!')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveTextContent('Try again');
  });

  it('calls the reset function when button is clicked', () => {
    const error = new Error('test error');
    const reset = jest.fn();
    render(<DashboardError error={error} reset={reset} />);
    screen.getByRole('button').click();
    expect(reset).toHaveBeenCalled();
  });

  it('logs the error to the console', () => {
    const error = new Error('test error');
    const spy = jest.spyOn(console, 'error');
    render(<DashboardError error={error} reset={() => {}} />);
    expect(spy).toHaveBeenCalledWith(error);
  });

  it('renders a generic error message if no error is provided', () => {
    const error = new Error('test error');
    render(<DashboardError error={error} reset={() => {}} />);
    expect(screen.getByText('Something went wrong!')).toBeInTheDocument();
  });

  it('renders a generic error message if the error has no message', () => {
    const error = new Error();
    render(<DashboardError error={error} reset={() => {}} />);
    expect(screen.getByText('Something went wrong!')).toBeInTheDocument();
  });

  it('renders a generic error message if the error is undefined', () => {
    const error = new Error(undefined);
    render(<DashboardError error={error} reset={() => {}} />);
    expect(screen.getByText('Something went wrong!')).toBeInTheDocument();
  });
});
