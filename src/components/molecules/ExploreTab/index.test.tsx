import {render,fireEvent,screen} from '@testing-library/react';
import ExploreTab from ".";
import {items} from '../ExploreTab/constants'


describe("Check the explore functionality", () => {
    const handleClick=jest.fn();
    const handleClose=jest.fn();
    
    it("Checking the Categories",()=>{
        
            render(<ExploreTab handleClose={handleClose} getExploreCategory={handleClick} items={items}/>);
            fireEvent.click(screen.getByText('COMMUNICATION'));
            expect(handleClick).toHaveBeenCalledTimes(1);

            fireEvent.click(screen.getByText('Vocabulary'));
            fireEvent.click(screen.getByText('Chemistry'));
            fireEvent.click(screen.getByText('Physics'));
    });

    it("Should call handle close when close icon is clicked is called",()=>{
        const {getByTestId}=render(<ExploreTab handleClose={handleClose} getExploreCategory={handleClick} items={items}/>);
        fireEvent.click(getByTestId('close'));
        expect(handleClose).toBeCalled();
    })
});
