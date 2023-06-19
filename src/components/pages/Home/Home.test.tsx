import { render } from '@testing-library/react';
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import store from "../../../store/store";
import Home from './Home';

describe("Home Page Test", () => {
    const page = () => {
        render(
            <Router>
                <Provider store={store}>
                    <Home />
                </Provider>
            </Router>
        );
    }

    it("Match Snapshot", () => {
        expect(page).toMatchSnapshot();
    });

    it("To be Required", () => {
        const container = () => render(
            <Router>
                <Provider store={store}>
                    <Home />
                </Provider>
            </Router>
        );
        expect(container).toBeRequired;
    })
})