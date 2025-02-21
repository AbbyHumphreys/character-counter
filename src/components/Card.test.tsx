import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card.tsx';
import '@testing-library/jest-dom';

describe('CardComponent', () => {
    test('renders the card', () => {
        render(<Card />);

    // Check for the card
    const card = screen.getByTestId('card');
    expect(card).toBeInTheDocument();

    })
})