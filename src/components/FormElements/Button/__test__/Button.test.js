import { render, screen, cleanup } from '@testing-library/react';
// eslint-disable-next-line no-unused-vars
import renderer from "react-test-renderer";
import Button from '../Button';
import "@testing-library/jest-dom";

afterEach(() => {
    cleanup();
})

test("should render Button with Ripple", () => {
    render(<Button />);

    var btn = screen.getByTestId("button")
    expect(btn).toBeInTheDocument();
})