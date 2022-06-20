import { render, screen, cleanup } from '@testing-library/react';
// eslint-disable-next-line no-unused-vars
import renderer from "react-test-renderer";
import InputField from '../InputField';
import "@testing-library/jest-dom";

afterEach(() => {
    cleanup();
})

test("should render InputField", () => {
    render(<InputField />);

    var elm = screen.getByTestId("input")
    expect(elm).toBeInTheDocument();
})