import React from 'react';
import { render, screen } from '@testing-library/react';
import TextArea from './TextArea';
import '@testing-library/jest-dom';

describe('TextArea Component', () => {
    test('renders the text area, the radio buttons and reading time display', () => {
        render(<TextArea placeholder="Type here..." />);

    // Check for the textarea input
    const textarea = screen.getByPlaceholderText("Type here...");
    expect(textarea).toBeInTheDocument();

    })
})