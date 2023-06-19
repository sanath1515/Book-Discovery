import { render,screen} from '@testing-library/react';
import  CommentCard from ".";

describe('Should render image correctly',()=>{

    it('Should render comment entered by the user',()=>{
        const {container}=render(<CommentCard comment="write your comment"/>);
        expect(container.firstChild).toBeTruthy();
    });
  
})