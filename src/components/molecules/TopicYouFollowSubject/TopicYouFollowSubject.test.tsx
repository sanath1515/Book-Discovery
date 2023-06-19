
import { render } from "@testing-library/react";
import TopicYouFollowSub from "./TopicYouFollowSubject";

describe("Topics renders correctly", () => {
  test("should match shapshot", () => {
    const { asFragment } = render(
      <TopicYouFollowSub imgSrc="https://cdn.zeplin.io/5f03041d8c8fc11335546618/assets/50247E5B-3788-492D-956F-63172A8FDBF8.png" />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
