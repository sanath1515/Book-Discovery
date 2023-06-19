import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import store from "../../../store/store";
import Explore from "./Explore";

afterEach(cleanup);

describe("Explore Testing", () => {
  it("Matches Snapshot", () => {
    const { container } = render(
      <Router>
      <Provider store={store}>
      <Explore name={""} />
      </Provider>
      </Router>
    );
    expect(container).toMatchSnapshot();
  });

  it("Checking Fields", () => {
    render(
      <Router>
      <Provider store={store}>
      <Explore name={"Explore"} />
      </Provider>
      </Router>
    );

    expect(screen.getByText("Explore")).toBeInTheDocument();
  });
  it("Should click correctly", () => {
    const { getByTestId } = render(
      <Router>
        <Provider store={store}>
        <Explore name={""} />
        </Provider>
      </Router>
    );
    expect(fireEvent.click(getByTestId("explore"))).toBeTruthy();
  });
});
