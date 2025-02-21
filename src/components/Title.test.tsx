import React from 'react';
import { render, screen } from '@testing-library/react';
import Title from './Title';
import '@testing-library/jest-dom';

describe('Title Component', () => {
    test('renders the Title', () => {
        render(<Title/>);

    // Check for the title
    const title = screen.getByText(/Analyze your text in real-time./i)
    expect(title).toBeInTheDocument();
    })
})