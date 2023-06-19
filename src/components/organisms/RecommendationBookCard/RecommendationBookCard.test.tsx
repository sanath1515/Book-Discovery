import { render, cleanup, fireEvent, screen } from "@testing-library/react";
import RecommendationBookCard from "./RecommendationBookCard";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import store from "../../../store/store";

afterEach(cleanup);

describe("RecommdationBookCard Testing", () => {
  it("Should render image correctly", () => {
    render(
      <Router>
        <Provider store={store}>
          <RecommendationBookCard
            title="Nature Chemistry"
            authorName="J D Lee"
            image="https://cdn.zeplin.io/5f03041d8c8fc11335546618/assets/920F4926-3BD5-47FB-A32A-32C03DE1BB71.png"
            id={"1"}
          />
        </Provider>
      </Router>
    );
    expect(screen.getByText("J D Lee")).toBeInTheDocument();
  });

  it("Should click bookmark correctly", () => {
    const { getByTestId } = render(
      <Router>
        <Provider store={store}>
          <RecommendationBookCard
            title="Nature Chemistry"
            authorName="J D Lee"
            image="https://cdn.zeplin.io/5f03041d8c8fc11335546618/assets/920F4926-3BD5-47FB-A32A-32C03DE1BB71.png"
            id={"1"}
          />
        </Provider>
      </Router>
    );
    fireEvent.click(getByTestId("bookmark"));
    expect(fireEvent.click(getByTestId("bookmark"))).toBeTruthy();
  });
  it("Should click playlist correctly", () => {
    const { getByTestId } = render(
      <Router>
        <Provider store={store}>
          <RecommendationBookCard
            title="Nature Chemistry"
            authorName="J D Lee"
            image="https://cdn.zeplin.io/5f03041d8c8fc11335546618/assets/920F4926-3BD5-47FB-A32A-32C03DE1BB71.png"
            id={"1"}
          />
        </Provider>
      </Router>
    );

    fireEvent.click(getByTestId("playlist"));
    expect(fireEvent.click(getByTestId("playlist"))).toBeTruthy();
  });
  it("Should click correctly", () => {
    const { getByTestId } = render(
      <Router>
        <Provider store={store}>
          <RecommendationBookCard
            title="Nature Chemistry"
            authorName="J D Lee"
            image="https://cdn.zeplin.io/5f03041d8c8fc11335546618/assets/920F4926-3BD5-47FB-A32A-32C03DE1BB71.png"
            id={"1"}
          />
        </Provider>
      </Router>
    );

    fireEvent.click(getByTestId("card"));
    expect(fireEvent.click(getByTestId("card"))).toBeTruthy();
  });
});
