import { render, screen, cleanup } from "@testing-library/react";
import UserStatsComplete from "./UserStatsComplete";

afterEach(cleanup);

describe("UserStats Testing", () => {
  it("Checking The titles", () => {
    render(<UserStatsComplete />);

    expect(screen.getByText("CURRENTLY READING")).toBeInTheDocument();
    expect(screen.getByText("BOOKS READ")).toBeInTheDocument();
    expect(screen.getByText("BOOKS TO READ")).toBeInTheDocument();
  });
});
