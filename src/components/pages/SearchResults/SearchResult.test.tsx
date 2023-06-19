import { render, fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import store from "../../../store/store";
import SearchResults from "./SearchResults";

jest.mock("../ApiProvider", () => ({
  ...jest.requireActual("../ApiProvider"),
  getAllBooks: jest.fn().mockImplementation(() => ({ type: "" })),
}));

describe("Search Result Test", () => {
  it("Checking The title1", () => {
    render(
      <Router>
        <Provider store={store}>
          <SearchResults searchText="Physics" searchByAuthor={false} />
        </Provider>
      </Router>
    );
    const dropdown = screen.getByTestId("categorydropdown");
    fireEvent.click(dropdown);
  });
});