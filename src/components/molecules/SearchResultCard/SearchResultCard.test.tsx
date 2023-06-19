import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import SearchResultCard from "./SearchResultCard";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import store from "../../../store/store";

afterEach(cleanup);

describe("Search Result Card Testing", () => {
  it("Matches Snapshot", () => {
    const { container } = render(
      <Router>
        <Provider store={store}>
          <SearchResultCard
            title="Nature Chemistry"
            field="Chemistry"
            authorName="J D Lee"
            image="https://cdn.zeplin.io/5f03041d8c8fc11335546618/assets/920F4926-3BD5-47FB-A32A-32C03DE1BB71.png"
            id={""} handleClose={()=>{}}          />
        </Provider>
      </Router>
    );
    expect(container).toMatchSnapshot();
  });
  it("Checking The title", () => {
    render(
      <Router>
        <Provider store={store}>
          <SearchResultCard
            title="Nature Chemistry"
            field="Chemistry"
            authorName="J D Lee"
            image="https://cdn.zeplin.io/5f03041d8c8fc11335546618/assets/920F4926-3BD5-47FB-A32A-32C03DE1BB71.png"
            id={""} handleClose={()=>{}}     />
        </Provider>
      </Router>
    );

    expect(screen.getByText("Nature Chemistry")).toBeInTheDocument();
    expect(screen.getByText("J D Lee")).toBeInTheDocument();
    expect(screen.getByText("Chemistry")).toBeInTheDocument();
  });
  it("Should click correctly", () => {
    const { getByTestId } = render(
      <Router>
        <Provider store={store}>
        <SearchResultCard
            title="Nature Chemistry"
            field="Chemistry"
            authorName="J D Lee"
            image="https://cdn.zeplin.io/5f03041d8c8fc11335546618/assets/920F4926-3BD5-47FB-A32A-32C03DE1BB71.png"
            id={""} handleClose={()=>{}}      />
        </Provider>
      </Router>
    );
    fireEvent.click(getByTestId("card"));
    expect(fireEvent.click(getByTestId("card"))).toBeTruthy();
  });
});
