import { render, screen, cleanup } from '@testing-library/react';
// eslint-disable-next-line no-unused-vars
import renderer from "react-test-renderer";
import HomePage from '../HomePage';
import "@testing-library/jest-dom";

afterEach(() => {
    cleanup();
})

test("should render Home Page with Skeleton", () => {
    render(<HomePage />);

    var elm = screen.getByTestId("home")
    expect(elm).toBeInTheDocument();
})