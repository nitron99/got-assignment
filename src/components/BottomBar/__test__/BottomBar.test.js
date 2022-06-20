import { render, screen, cleanup } from '@testing-library/react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import renderer from "react-test-renderer";
import BottomBar from '../BottomBar';
import "@testing-library/jest-dom";

afterEach(() => {
    cleanup();
})

test("should render Bottom Bar in mobile view", () => {
    render(
    <Router>
        <Routes>   
            <Route path="*" element= {<BottomBar />}/>
        </Routes>
    </Router>
    );

    var bar = screen.getByTestId("bottomBar")
    expect(bar).toBeInTheDocument();
})