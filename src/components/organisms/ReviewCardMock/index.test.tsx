import { render} from '@testing-library/react';
import StudentReview from '.';


describe('Should render image correctly',()=>{

    it('Should render comment entered by the user',()=>{
        const {container}=render(<StudentReview />);
        expect(container.firstChild).toBeTruthy();
    });
  
})