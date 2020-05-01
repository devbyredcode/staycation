import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom'
import Button from './index';

test("Test Disabled Button (button should has isDisabled props)", () => {
    const { container } = render(<Button isDisabled></Button>);

    expect(container.querySelector("span.disabled")).toBeInTheDocument();
});

test("Test Link Button (button should has href props)", () => {
    const { container } = render(<Router><Button type="link"></Button></Router>);

    expect(container.querySelector("a")).toBeInTheDocument();
});