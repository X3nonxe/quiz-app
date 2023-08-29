import { render, screen } from '@testing-library/react';
import Page from '../app/page';

describe('Page', () => {
  it('should render the page', () => {
    render(<Page />);
    const h1 = screen.getByText('Hello World');
    expect(h1).toBeInTheDocument();
  });

	it('should render the button', () => {
		render(<Page />);
		const button = screen.getByRole('button', { name: 'Click me' });
		expect(button).toBeInTheDocument();
	});
});
