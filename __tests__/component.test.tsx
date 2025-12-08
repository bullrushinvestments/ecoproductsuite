import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for more assertion methods
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

jest.mock('./SomeExternalDependency', () => ({
  useSomeExternalAPI: jest.fn(),
}));

describe('Core Functionality Component Tests', () => {
  beforeEach(() => {
    (useSomeExternalAPI as jest.Mock).mockReturnValue({
      data: [],
      loading: false,
      error: null,
    });
  });

  test('renders without crashing', () => {
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/core functionality/i)).toBeInTheDocument();
  });

  test('displays loading state when fetching data', async () => {
    (useSomeExternalAPI as jest.Mock).mockReturnValue({
      data: [],
      loading: true,
      error: null,
    });
    render(<CoreFunctionalityComponent />);
    await waitFor(() => expect(screen.getByText(/loading/i)).toBeInTheDocument());
  });

  test('displays error message when fetching fails', async () => {
    (useSomeExternalAPI as jest.Mock).mockReturnValue({
      data: [],
      loading: false,
      error: new Error('Fetching failed'),
    });
    render(<CoreFunctionalityComponent />);
    await waitFor(() => expect(screen.getByText(/fetching failed/i)).toBeInTheDocument());
  });

  test('handles user interaction with buttons', () => {
    const mockHandleClick = jest.fn();
    render(
      <CoreFunctionalityComponent
        onClick={mockHandleClick}
      />
    );
    fireEvent.click(screen.getByRole('button'));
    expect(mockHandleClick).toHaveBeenCalled();
  });

  test('validates input fields for empty values', async () => {
    render(<CoreFunctionalityComponent />);
    fireEvent.change(screen.getByLabelText(/input label/i), { target: { value: '' } });
    fireEvent.submit(screen.getByRole('form'));
    await waitFor(() => expect(screen.getByText(/cannot be empty/i)).toBeInTheDocument());
  });

  test('checks accessibility features', () => {
    render(<CoreFunctionalityComponent />);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label');
    expect(button).toBeEnabled();
    expect(button).not.toBeDisabled();
  });
});

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for more assertion methods
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

jest.mock('./SomeExternalDependency', () => ({
  useSomeExternalAPI: jest.fn(),
}));

describe('Core Functionality Component Tests', () => {
  beforeEach(() => {
    (useSomeExternalAPI as jest.Mock).mockReturnValue({
      data: [],
      loading: false,
      error: null,
    });
  });

  test('renders without crashing', () => {
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/core functionality/i)).toBeInTheDocument();
  });

  test('displays loading state when fetching data', async () => {
    (useSomeExternalAPI as jest.Mock).mockReturnValue({
      data: [],
      loading: true,
      error: null,
    });
    render(<CoreFunctionalityComponent />);
    await waitFor(() => expect(screen.getByText(/loading/i)).toBeInTheDocument());
  });

  test('displays error message when fetching fails', async () => {
    (useSomeExternalAPI as jest.Mock).mockReturnValue({
      data: [],
      loading: false,
      error: new Error('Fetching failed'),
    });
    render(<CoreFunctionalityComponent />);
    await waitFor(() => expect(screen.getByText(/fetching failed/i)).toBeInTheDocument());
  });

  test('handles user interaction with buttons', () => {
    const mockHandleClick = jest.fn();
    render(
      <CoreFunctionalityComponent
        onClick={mockHandleClick}
      />
    );
    fireEvent.click(screen.getByRole('button'));
    expect(mockHandleClick).toHaveBeenCalled();
  });

  test('validates input fields for empty values', async () => {
    render(<CoreFunctionalityComponent />);
    fireEvent.change(screen.getByLabelText(/input label/i), { target: { value: '' } });
    fireEvent.submit(screen.getByRole('form'));
    await waitFor(() => expect(screen.getByText(/cannot be empty/i)).toBeInTheDocument());
  });

  test('checks accessibility features', () => {
    render(<CoreFunctionalityComponent />);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label');
    expect(button).toBeEnabled();
    expect(button).not.toBeDisabled();
  });
});