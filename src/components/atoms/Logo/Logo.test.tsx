import { render } from "@testing-library/react";
import Logo from "./Logo";

describe("logo renders correctly", () => {
  test("should match snapshot", () => {
    const { asFragment } = render(<Logo />);
    expect(asFragment()).toMatchSnapshot();
  });
});
