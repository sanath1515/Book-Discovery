import { render, fireEvent } from "@testing-library/react";
import SearchBar from "./SearchBar";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import store from "../../../store/store";

jest.mock('../../pages/ApiProvider', () => ({
    ...(jest.requireActual('../../pages/ApiProvider')),
    getBook: jest.fn(),
    getAllBooks: jest.fn().mockImplementation(() => ({ type: '' })),
  }));

describe("Search Bar test", () => {
  const handleChange = jest.fn();

  it("should render input correctly", () => {
    const { container } = render(
      <Router>
        <Provider store={store}>
          <SearchBar placeholder={""} />{" "}
        </Provider>
      </Router>
    );
    expect(container.querySelector("input")).toBeTruthy();
  });

  it("should match the snapshot", () => {
    const { container } = render(
      <Router>
        <Provider store={store}>
          <SearchBar placeholder={""} />{" "}
        </Provider>
      </Router>
    );
    expect(container.querySelector("input")).toMatchSnapshot();
  });

  it("should call handle change when input value is changed", () => {
    const { container } = render(
      <Router>
        <Provider store={store}>
          <SearchBar placeholder={""} />{" "}
        </Provider>
      </Router>
    );
    const input = container.querySelector("input");
    {
      input && fireEvent.change(input, { target: { value: "value" } });
    }
    expect(fireEvent.change(input!, { target: { value: "value" } })).toBeTruthy;
  });
});
