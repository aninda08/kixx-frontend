import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { SelectItem } from './SelectItem';

const mockProps = {
  id: 'test-id',
  name: 'Test Item',
  logo: 'test-logo.png'
};

describe('SelectItem Component', () => {
  beforeEach(() => {
    // Reset the image loading mock
    jest.clearAllMocks();
  });

  it('renders with correct props', () => {
    render(<SelectItem {...mockProps} />);

    // Check if the name is displayed
    expect(screen.getByText(mockProps.name)).toBeInTheDocument();

    // Check if the image is rendered with correct props
    const imgElement = screen.getByAltText(mockProps.name);
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src', mockProps.logo);
    expect(imgElement).toHaveStyle('width: 20px');
    expect(imgElement).toHaveStyle('height: 20px');
  });

  it('renders in flex container with correct alignment', () => {
    render(<SelectItem {...mockProps} />);

    const container = screen.getByTestId('select-item-container');
    expect(container).toHaveStyle('display: flex');
    expect(container).toHaveStyle('align-items: center');
    expect(container).toHaveStyle('gap: 8px'); // gap={1} translates to 8px in MUI
  });

  it('handles missing logo gracefully', () => {
    render(<SelectItem {...mockProps} logo={''} />);

    // Check if the name is still displayed
    expect(screen.getByText(mockProps.name)).toBeInTheDocument();

    // Check if the image is rendered with empty logo
    const imgElement = screen.getByAltText(mockProps.name);
    expect(imgElement).toBeInTheDocument();
    // Since React removes empty src attributes, we check that src is not present
    expect(imgElement).not.toHaveAttribute('src');
  });

  it('handles missing name gracefully', () => {
    render(<SelectItem {...mockProps} name={''} />);

    // Check if the container is still rendered
    const container = screen.getByTestId('select-item-container');
    expect(container).toBeInTheDocument();

    // Check if the image is rendered with empty alt text
    const imgElement = screen.getByAltText('');
    expect(imgElement).toBeInTheDocument();
  });
});
