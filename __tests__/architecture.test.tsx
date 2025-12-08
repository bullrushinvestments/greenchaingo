import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers
import DesignArchitectureComponent from './DesignArchitectureComponent';

jest.mock('./api', () => ({
  fetchData: jest.fn(),
}));

describe('Design Architecture Component Tests', () => {
  const mockData = { /* Mock data structure */ };

  beforeEach(() => {
    (fetchData as jest.Mock).mockResolvedValue(mockData);
  });

  test('renders without crashing', async () => {
    render(<DesignArchitectureComponent />);
    expect(await screen.findByText(/loading/i)).toBeInTheDocument();
    await waitFor(() => expect(screen.queryByText(/loading/i)).not.toBeInTheDocument());
    expect(screen.getByRole('heading')).toHaveTextContent(/design architecture/);
  });

  test('displays error message on API failure', async () => {
    (fetchData as jest.Mock).mockRejectedValue(new Error('API Error'));
    render(<DesignArchitectureComponent />);
    await waitFor(() => expect(screen.getByText(/api error/i)).toBeInTheDocument());
  });

  test('handles user interaction with buttons', async () => {
    render(<DesignArchitectureComponent />);
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    await waitFor(() => expect(fetchData).toHaveBeenCalled());
  });

  test('tests accessibility features', async () => {
    render(<DesignArchitectureComponent />);
    const button = screen.getByRole('button', { name: /submit/i });
    expect(button).toBeVisible();
    fireEvent.click(button);
    await waitFor(() => expect(document.body).toHaveFocus());
  });

  test('renders loading state when data is being fetched', async () => {
    render(<DesignArchitectureComponent />);
    const loadingIndicator = screen.getByText(/loading/i);
    expect(loadingIndicator).toBeInTheDocument();
    await waitFor(() => expect(screen.queryByText(/loading/i)).not.toBeInTheDocument());
  });
});

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers
import DesignArchitectureComponent from './DesignArchitectureComponent';

jest.mock('./api', () => ({
  fetchData: jest.fn(),
}));

describe('Design Architecture Component Tests', () => {
  const mockData = { /* Mock data structure */ };

  beforeEach(() => {
    (fetchData as jest.Mock).mockResolvedValue(mockData);
  });

  test('renders without crashing', async () => {
    render(<DesignArchitectureComponent />);
    expect(await screen.findByText(/loading/i)).toBeInTheDocument();
    await waitFor(() => expect(screen.queryByText(/loading/i)).not.toBeInTheDocument());
    expect(screen.getByRole('heading')).toHaveTextContent(/design architecture/);
  });

  test('displays error message on API failure', async () => {
    (fetchData as jest.Mock).mockRejectedValue(new Error('API Error'));
    render(<DesignArchitectureComponent />);
    await waitFor(() => expect(screen.getByText(/api error/i)).toBeInTheDocument());
  });

  test('handles user interaction with buttons', async () => {
    render(<DesignArchitectureComponent />);
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    await waitFor(() => expect(fetchData).toHaveBeenCalled());
  });

  test('tests accessibility features', async () => {
    render(<DesignArchitectureComponent />);
    const button = screen.getByRole('button', { name: /submit/i });
    expect(button).toBeVisible();
    fireEvent.click(button);
    await waitFor(() => expect(document.body).toHaveFocus());
  });

  test('renders loading state when data is being fetched', async () => {
    render(<DesignArchitectureComponent />);
    const loadingIndicator = screen.getByText(/loading/i);
    expect(loadingIndicator).toBeInTheDocument();
    await waitFor(() => expect(screen.queryByText(/loading/i)).not.toBeInTheDocument());
  });
});