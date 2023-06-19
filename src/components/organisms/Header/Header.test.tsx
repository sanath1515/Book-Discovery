import { render, screen, cleanup } from "@testing-library/react";
import Header from "./Header";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import store from "../../../store/store";

afterEach(cleanup);

describe("Header Testing", () => {
  it("Checking The title", () => {
    render(
      <Router>
        <Provider store={store}>
          <Header />
        </Provider>
      </Router>
    );

    expect(screen.getByText("Explore")).toBeInTheDocument();
    expect(screen.getByText("Z-Athena")).toBeInTheDocument();
    expect(screen.getByText("Home")).toBeInTheDocument();
  });
});
