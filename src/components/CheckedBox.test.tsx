import React from 'react';
import { render, screen } from '@testing-library/react';
import CheckedBox from './CheckedBox';
import '@testing-library/jest-dom';

describe('CheckedBox Component', () => {
    test('renders the check box', () => {
        render(<CheckedBox />);

    // Check for the radiobutton input
    const checkbox = screen.getByTestId('checkbox');
    expect(checkbox).toBeInTheDocument();

    })
})