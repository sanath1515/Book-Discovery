import {render} from "@testing-library/react";
import Avatar from ".";

describe("Avatar test",()=>{

    const src="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg";
    it("should render letter",()=>{
        const {container}=render(<Avatar  children="T" />)
        expect(container.firstChild).toBeTruthy();
    });

    it("should match the snapshot",()=>{
        const wrapper=render(<Avatar  children="T" />)
        expect(wrapper).toBeDefined();
        expect(wrapper.queryByText("T")).toBeInTheDocument();
    });

    it("should render image",()=>{
        const {container}=render(<Avatar  src={src} />)
        expect(container.firstChild).toBeTruthy();
    })

    it("should match the snapshot",()=>{
        const {container}=render(<Avatar  src={src} />)
        expect(container.firstChild).toMatchSnapshot();    
    })
})