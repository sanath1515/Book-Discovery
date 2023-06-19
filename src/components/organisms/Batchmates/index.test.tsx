import { render } from "@testing-library/react";
import Batchmates from ".";

describe("Should render image correctly", () => {
  const booksSrc = [
    {
      image:
        "https://images-eu.ssl-images-amazon.com/images/I/61JPFJpEZxL._SY445_SX342_QL70_ML2_.jpg",
    },
    {
      image: "https://images-na.ssl-images-amazon.com/images/I/71u9RfUhiPL.jpg",
    },
    {
      image: "https://images-na.ssl-images-amazon.com/images/I/81OrIk+OffL.jpg",
    },
  ];
  const component = <Batchmates booksSrc={booksSrc} />;

  it("Should render image correctly", () => {
    const { container } = render(<Batchmates booksSrc={booksSrc} />);
    expect(container.firstChild).toBeTruthy();
  });
});
