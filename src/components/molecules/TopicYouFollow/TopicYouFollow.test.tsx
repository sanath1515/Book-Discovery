import TopicYouFollow from './TopicYouFollow';
import { render,screen, cleanup } from '@testing-library/react';



describe("Topics renders correctly",()=>
{
    it("testing the render",()=>{
    render(<TopicYouFollow />)

    expect(screen.getByText('Telugu')).toBeInTheDocument();
    })
})