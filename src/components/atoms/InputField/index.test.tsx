import {render,fireEvent} from "@testing-library/react";
import InputField from ".";

describe("Input Field test",()=>{

    const handleChange=jest.fn();

    it("should render input correctly",()=>{
        const {container}=render(<InputField   value="text" onChange={handleChange}/>)
        expect(container.querySelector("input")).toBeTruthy();
    });

    it("should match the snapshot",()=>{
        const {container}=render(<InputField    value="text" onChange={handleChange}/>)
        expect(container.querySelector("input")).toMatchSnapshot();
    });

    it("should call handle change when input value is changed",()=>{
        const {container}=render(<InputField  value={""} onChange={handleChange}/>)
        const input=container.querySelector("input");
        {input&& fireEvent.change(input, {target:{value:'value'} })}
        expect(handleChange).toHaveBeenCalledTimes(1);
    });

    
})