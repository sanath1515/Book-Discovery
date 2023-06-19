import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import store from "../../../store/store";
import SingleDetailView from "./SingleDetailView";

jest.mock('./SingleDetailView', () => ({
  ...(jest.requireActual('./SingleDetailView')),
  getBook: jest.fn(),
  getAllBooks: jest.fn().mockImplementation(() => ({ type: '' })),
}));

describe("Single Detail Page Test", () => {
  
  const page = ()=>{render(
    <Router>
      <Provider store={store}>
        <SingleDetailView />
      </Provider>
    </Router>
  );}

  it("Match Snapshot", () => {
    expect(page).toMatchSnapshot();
  });
});
