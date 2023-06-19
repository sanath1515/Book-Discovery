import {render,fireEvent,screen} from '@testing-library/react';
import OutlinedCard from ".";


describe("Check the explore functionality", () => {
    it("should show input field when replybutton is clicked",()=>{
        
            render(<OutlinedCard name="tarunya" image="" children={[]}/>);
            const button = screen.getByText('Reply');
            fireEvent.click(button);
            const post=screen.getByText('Post');
            fireEvent.click(post);
    });

    it('Should render value on screen',()=>{
        const {getByTestId}=render(<OutlinedCard name="tarunya" image="" children={[]}/>);
        const like=screen.getByTestId('like');
        fireEvent.click(like);
    });
    it('Should render value on ',()=>{
        const {getByTestId}=render(<OutlinedCard name="tarunya" image="" children={[]}/>);
        const dislike=screen.getByTestId('dislike');
        fireEvent.click(dislike);
    });
});