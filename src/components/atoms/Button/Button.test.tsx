import {fireEvent, render, screen} from "@testing-library/react";
import Button from './Button';

describe("Button Component", () => {

  const onClick=jest.fn();

    test("Matches Snapshot", () => {
        const { asFragment } = render(<Button name="Discover" onClick={onClick}/>);
        expect(asFragment.name).toMatchSnapshot()
    });

    it("should get button text", () => {
        render(<Button name="Discover" onClick={onClick} />); 
        expect(
          screen.getByText(/Discover/)
        ).toBeInTheDocument();
      });

      it("should call onclick",()=>{
        const { getByText } = render(<Button  name="Discover" onClick={onClick} />);
        fireEvent.click(getByText(/Discover/i));
        expect(onClick).toHaveBeenCalled();
    });

});
