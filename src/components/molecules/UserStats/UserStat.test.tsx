import { render, screen, cleanup } from "@testing-library/react";
import UserStatItem, { UserStatProps } from "./UserStat";

afterEach(cleanup);

const data: UserStatProps = {
  name: "CURRENTLY READING",
  count: 6,
  img: "src/components/molecules/UserStatsComplete/reading-24-px.png",
};

describe("UserStat Item Testing", () => {
  it("Checking The title", () => {
    render(<UserStatItem {...data} />);

    expect(screen.getByText("CURRENTLY READING")).toBeInTheDocument();
  });
});
