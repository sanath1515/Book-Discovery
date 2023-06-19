import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import BookCard from "./BookCard";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import store from "../../../store/store";

afterEach(cleanup);

describe("BookCard Testing", () => {
  it("Matches Snapshot", () => {
    const { container } = render(
      <Router>
      <Provider store={store}>
      <BookCard
            title="Nature Chemistry"
            desc="Nature chemistry deals with different biocatalytic approaches to transform phenols by adding different neurons"
            authorName="J D Lee"
            image="https://cdn.zeplin.io/5f03041d8c8fc11335546618/assets/920F4926-3BD5-47FB-A32A-32C03DE1BB71.png" id={""} authorImg={""}      />
      </Provider>
      </Router>
    );
    expect(container).toMatchSnapshot();
  });

  it("Checking Fields", () => {
    render(
      <Router>
      <Provider store={store}>
      <BookCard
            title="Nature Chemistry"
            desc="Nature chemistry deals with different biocatalytic approaches to transform phenols by adding different neurons"
            authorName="J D Lee"
            image="https://cdn.zeplin.io/5f03041d8c8fc11335546618/assets/920F4926-3BD5-47FB-A32A-32C03DE1BB71.png" id={""} authorImg={""}      />
      </Provider>
      </Router>
    );

    expect(screen.getByText("Nature Chemistry")).toBeInTheDocument();
    expect(screen.getByText("J D Lee")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Nature chemistry deals with different biocatalytic approaches to transform phenols by adding different neurons"
      )
    ).toBeInTheDocument();
  });
  it("Should click bookmark correctly", () => {
    const { getByTestId } = render(
      <Router>
        <Provider store={store}>
        <BookCard
            title="Nature Chemistry"
            desc="Nature chemistry deals with different biocatalytic approaches to transform phenols by adding different neurons"
            authorName="J D Lee"
            image="https://cdn.zeplin.io/5f03041d8c8fc11335546618/assets/920F4926-3BD5-47FB-A32A-32C03DE1BB71.png" id={""} authorImg={""}      />
        </Provider>
      </Router>
    );
    fireEvent.click(getByTestId("bookmark"));
    expect(fireEvent.click(getByTestId("bookmark"))).toBeTruthy();
  });
  it("Should click correctly", () => {
    const { getByTestId } = render(
      <Router>
        <Provider store={store}>
        <BookCard
            title="Nature Chemistry"
            desc="Nature chemistry deals with different biocatalytic approaches to transform phenols by adding different neurons"
            authorName="J D Lee"
            image="https://cdn.zeplin.io/5f03041d8c8fc11335546618/assets/920F4926-3BD5-47FB-A32A-32C03DE1BB71.png" id={""} authorImg={""}      />
        </Provider>
      </Router>
    );
    fireEvent.click(getByTestId("card"));
    expect(fireEvent.click(getByTestId("card"))).toBeTruthy();
  });
});
