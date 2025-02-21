import React from 'react';
import { render, screen } from '@testing-library/react';
import LetterDensity  from './LetterDensity.tsx';
import '@testing-library/jest-dom';

describe('Letter Density Component', () => {
    test('renders the letter density component', () => {
        const mockLetterData = [
            { letter: 'A', value: 10 },
            { letter: 'B', value: 5 },
            { letter: 'C', value: 2 },
        ];

        render(<LetterDensity letterData={mockLetterData}/>);

    // Check for the letter density component
    const letterDensity = screen.getByTestId('letter-density');
    expect(letterDensity).toBeInTheDocument();

    })
})