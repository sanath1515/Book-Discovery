import {fireEvent, render,screen} from '@testing-library/react';
import SplitButton from ".";

describe('Searchbar test',()=>{
    const selectedId=1
    const items=["Dropdown1","Dropdown2","Dropdown3"]
   

    it('Should render dropdown correctly',()=>{
        render(<SplitButton selectedId={selectedId} items={items} />);
         expect(screen.queryByText("Dropdown2")).toBeInTheDocument();
    });
  
    it('Should match snapshot',()=>{
        const {queryByText}=render(<SplitButton selectedId={selectedId} items={items} />)
        expect(queryByText("Dropdown2")).toMatchSnapshot();
    });

    it('Should trigger events',()=>{
       render(<SplitButton selectedId={selectedId} items={items} />);
        const btnClick=screen.getByTestId('btn-click');
        fireEvent.click(btnClick);
        const open=screen.getByTestId('openDropdown');
        fireEvent.click(open);
        const menu=screen.getByTestId('menuItemClick1');
        fireEvent.click(menu);
    });

})