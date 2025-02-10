import React from 'react';
import { render, screen } from '@testing-library/react';
import Page from '../page';

describe('Page', () => {
  it('renders the welcome message', () => {
    render(<Page />);
    const heading = screen.getByText(/Welcome to Your Next.js App/i);
    expect(heading).toBeInTheDocument();
  });

  it('renders the get started button', () => {
    render(<Page />);
    const button = screen.getByText(/Get started/i);
    expect(button).toBeInTheDocument();
  });

  it('renders the learn more button', () => {
    render(<Page />);
    const button = screen.getByText(/Learn more/i);
    expect(button).toBeInTheDocument();
  });
});