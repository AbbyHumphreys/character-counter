import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';
import '@testing-library/jest-dom';

import logoDarkTheme from '../assets/images/logo-dark-theme.svg';
import lightModeButton from '../assets/images/icon-sun.svg';

describe('Header Component', () => {
    test('renders the logo, heading, and light/dark mode button', () => {
        render(<Header />);

    // Check for the logo
    const logo = screen.getByAltText('Character Counter Logo');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', logoDarkTheme);

    //Check the light/dark mode button
    const button = screen.getByAltText('Dark or Light Mode Button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('src', lightModeButton);
    })
})