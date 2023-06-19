import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import store from "../../../store/store";
import SingleDetailView from "./SingleDetailView";

jest.mock('../ApiProvider', () => ({
  ...(jest.requireActual('../ApiProvider')),
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

  it("To be Required",()=>{
    const container =()=>render(
      <Router>
        <Provider store={store}>
          <SingleDetailView />
        </Provider>
      </Router>
    );
    expect(container).toBeRequired;
  })
});
