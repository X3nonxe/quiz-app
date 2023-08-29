import { render, screen } from '@testing-library/react';
import Page from '../../app/dashboard/page';

describe('Page', () => {
  it('should render the page', () => {
    render(<Page />);
    const h1 = screen.getByText('Hello, Dashboard Page!');
    expect(h1).toBeInTheDocument();
  });
});
