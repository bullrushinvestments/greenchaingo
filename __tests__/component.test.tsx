import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toBeInTheDocument
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

// Mock API and other dependencies
jest.mock('./api', () => ({
  fetchData: jest.fn().mockResolvedValue({
    data: {
      key1: 'value1',
      key2: 'value2'
    }
  })
}));

describe('Core Functionality Component Tests', () => {
  test('renders component with initial state', () => {
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test('fetches data on mount and displays it', async () => {
    const { getByTestId } = render(<CoreFunctionalityComponent />);
    await waitFor(() => expect(getByTestId('data-testid-key1')).toHaveTextContent('value1'));
    await waitFor(() => expect(getByTestId('data-testid-key2')).toHaveTextContent('value2'));
  });

  test('handles data fetching errors', async () => {
    (fetchData as jest.Mock).mockRejectedValue(new Error('Failed to fetch'));

    render(<CoreFunctionalityComponent />);
    const errorElement = await screen.findByRole('alert');
    expect(errorElement).toBeInTheDocument();
    expect(errorElement).toHaveTextContent(/failed to fetch/i);
  });

  test('handles user interactions', () => {
    render(<CoreFunctionalityComponent />);

    fireEvent.click(screen.getByTestId('submit-button'));
    expect(fetchData).toHaveBeenCalledTimes(1);
  });

  test('tests loading state transitions', async () => {
    const { rerender } = render(<CoreFunctionalityComponent />);
    
    // Initial load
    await waitFor(() => screen.getByText(/loading/i));

    // Simulate data fetching completion
    (fetchData as jest.Mock).mockResolvedValueOnce({
      data: {
        key1: 'value1',
        key2: 'value2'
      }
    });
    rerender(<CoreFunctionalityComponent />);
    
    await waitFor(() => screen.getByText(/value1/i));
  });

  test('tests accessibility features', () => {
    render(<CoreFunctionalityComponent />);

    const button = screen.getByRole('button');
    expect(button).toBeVisible();
    expect(button).toHaveAttribute('aria-label', 'submit-button');

    fireEvent.click(screen.getByRole('button'));
    expect(fetchData).toHaveBeenCalledTimes(1);
  });
});

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toBeInTheDocument
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

// Mock API and other dependencies
jest.mock('./api', () => ({
  fetchData: jest.fn().mockResolvedValue({
    data: {
      key1: 'value1',
      key2: 'value2'
    }
  })
}));

describe('Core Functionality Component Tests', () => {
  test('renders component with initial state', () => {
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test('fetches data on mount and displays it', async () => {
    const { getByTestId } = render(<CoreFunctionalityComponent />);
    await waitFor(() => expect(getByTestId('data-testid-key1')).toHaveTextContent('value1'));
    await waitFor(() => expect(getByTestId('data-testid-key2')).toHaveTextContent('value2'));
  });

  test('handles data fetching errors', async () => {
    (fetchData as jest.Mock).mockRejectedValue(new Error('Failed to fetch'));

    render(<CoreFunctionalityComponent />);
    const errorElement = await screen.findByRole('alert');
    expect(errorElement).toBeInTheDocument();
    expect(errorElement).toHaveTextContent(/failed to fetch/i);
  });

  test('handles user interactions', () => {
    render(<CoreFunctionalityComponent />);

    fireEvent.click(screen.getByTestId('submit-button'));
    expect(fetchData).toHaveBeenCalledTimes(1);
  });

  test('tests loading state transitions', async () => {
    const { rerender } = render(<CoreFunctionalityComponent />);
    
    // Initial load
    await waitFor(() => screen.getByText(/loading/i));

    // Simulate data fetching completion
    (fetchData as jest.Mock).mockResolvedValueOnce({
      data: {
        key1: 'value1',
        key2: 'value2'
      }
    });
    rerender(<CoreFunctionalityComponent />);
    
    await waitFor(() => screen.getByText(/value1/i));
  });

  test('tests accessibility features', () => {
    render(<CoreFunctionalityComponent />);

    const button = screen.getByRole('button');
    expect(button).toBeVisible();
    expect(button).toHaveAttribute('aria-label', 'submit-button');

    fireEvent.click(screen.getByRole('button'));
    expect(fetchData).toHaveBeenCalledTimes(1);
  });
});