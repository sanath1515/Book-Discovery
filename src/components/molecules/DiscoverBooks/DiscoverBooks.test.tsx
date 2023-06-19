import { render} from "@testing-library/react";
import BookDiscover from './BookDiscover'


describe("Topics renders correctly",()=>
{
    test("should match shapshot",()=>{
    const{asFragment}=render(<BookDiscover />);
    expect(asFragment()).toMatchSnapshot()

    })
})