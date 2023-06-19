
import { render,screen, cleanup } from '@testing-library/react';
import Author from './Author';

type Image={
    image:string
}
const tempImage:Image={
    image: "https://cdn.zeplin.io/5f03041d8c8fc11335546618/assets/03991C69-3988-432F-AD72-535D7FCFFC54.png"
 }
 const batchBooks:Image[] = [tempImage,tempImage,tempImage];

afterEach(cleanup)

describe('BookCard Testing', () => {

    it('Checking The title', () => {
        render(<Author booksSrc={batchBooks} authorName={'J D Lee'} authorImage={''}/>)
    
    expect(screen.getByText('30 Followers')).toBeInTheDocument();
    expect(screen.getByText("Peter was the 2016 recipient of the American Chemical Society's Grady Stack Award for science journalism.Julio de Paula is Professor of Chemistry, Lewis & Clark College.")).toBeInTheDocument();
    expect(screen.getByText('About Author')).toBeInTheDocument();
    })

})