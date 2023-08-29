import { render, screen } from '@testing-library/react';
import GlobalError from '../app/global-error';

describe('GlobalError', () => {
  it('should render the error message', () => {
    render(<GlobalError error={new Error('Something went wrong')} reset={() => {}} />);
    const h2 = screen.getByText('Something went wrong!');
    expect(h2).toBeInTheDocument();
  });

  it('should render the button', () => {
    render(<GlobalError error={new Error('Something went wrong')} reset={() => {}} />);
    const button = screen.getByRole('button', { name: 'Try again' });
    expect(button).toBeInTheDocument();
  });
});
