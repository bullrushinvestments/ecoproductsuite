import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toBeInTheDocument
import DesignArchitectureComponent from './DesignArchitectureComponent';

// Mock API response and other dependencies
jest.mock('./api', () => ({
  fetchData: jest.fn(),
}));

describe('Design Architecture Component Tests', () => {
  test('renders loading state when data is fetching', async () => {
    (fetchData as jest.Mock).mockResolvedValueOnce({} as any);
    render(<DesignArchitectureComponent />);
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });

  test('displays error message on API failure', async () => {
    (fetchData as jest.Mock).mockRejectedValueOnce(new Error('API Failure'));
    render(<DesignArchitectureComponent />);
    await waitFor(() => screen.getByText(/An error occurred/i));
  });

  test('renders design architecture data correctly when fetched successfully', async () => {
    const mockData = { id: '123', name: 'Sample Design' };
    (fetchData as jest.Mock).mockResolvedValueOnce(mockData);
    render(<DesignArchitectureComponent />);
    await waitFor(() => screen.getByText(/Sample Design/i));
  });

  test('handles user interaction with design elements', async () => {
    const mockData = { id: '123', name: 'Sample Design' };
    (fetchData as jest.Mock).mockResolvedValueOnce(mockData);
    render(<DesignArchitectureComponent />);
    fireEvent.click(screen.getByText(/Select/i));
    expect(screen.getByText(/Selected Sample Design/i)).toBeInTheDocument();
  });

  test('ensures component is accessible', () => {
    const mockData = { id: '123', name: 'Sample Design' };
    (fetchData as jest.Mock).mockResolvedValueOnce(mockData);
    render(<DesignArchitectureComponent />);
    expect(screen.getByText(/Select/i)).toBeVisible();
    expect(screen.getByText(/Select/i)).toHaveAttribute('role', 'button');
  });

  test('handles edge cases such as empty data response', async () => {
    (fetchData as jest.Mock).mockResolvedValueOnce({});
    render(<DesignArchitectureComponent />);
    await waitFor(() => screen.getByText(/No design available/i));
  });
});

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toBeInTheDocument
import DesignArchitectureComponent from './DesignArchitectureComponent';

// Mock API response and other dependencies
jest.mock('./api', () => ({
  fetchData: jest.fn(),
}));

describe('Design Architecture Component Tests', () => {
  test('renders loading state when data is fetching', async () => {
    (fetchData as jest.Mock).mockResolvedValueOnce({} as any);
    render(<DesignArchitectureComponent />);
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });

  test('displays error message on API failure', async () => {
    (fetchData as jest.Mock).mockRejectedValueOnce(new Error('API Failure'));
    render(<DesignArchitectureComponent />);
    await waitFor(() => screen.getByText(/An error occurred/i));
  });

  test('renders design architecture data correctly when fetched successfully', async () => {
    const mockData = { id: '123', name: 'Sample Design' };
    (fetchData as jest.Mock).mockResolvedValueOnce(mockData);
    render(<DesignArchitectureComponent />);
    await waitFor(() => screen.getByText(/Sample Design/i));
  });

  test('handles user interaction with design elements', async () => {
    const mockData = { id: '123', name: 'Sample Design' };
    (fetchData as jest.Mock).mockResolvedValueOnce(mockData);
    render(<DesignArchitectureComponent />);
    fireEvent.click(screen.getByText(/Select/i));
    expect(screen.getByText(/Selected Sample Design/i)).toBeInTheDocument();
  });

  test('ensures component is accessible', () => {
    const mockData = { id: '123', name: 'Sample Design' };
    (fetchData as jest.Mock).mockResolvedValueOnce(mockData);
    render(<DesignArchitectureComponent />);
    expect(screen.getByText(/Select/i)).toBeVisible();
    expect(screen.getByText(/Select/i)).toHaveAttribute('role', 'button');
  });

  test('handles edge cases such as empty data response', async () => {
    (fetchData as jest.Mock).mockResolvedValueOnce({});
    render(<DesignArchitectureComponent />);
    await waitFor(() => screen.getByText(/No design available/i));
  });
});