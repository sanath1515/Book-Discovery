import { render } from "@testing-library/react";
import { ChangeEvent } from "react";
import Pagination from './Pagination';


describe('Pagination Testing', () => {

    it('Matches Snapshot', () => {
        const {container}=render(<Pagination booksPerPage={0} totalBooks={0} getPage={function (number: number) {
            throw new Error("Function not implemented.");
        } } page={0} onChange={function (event: ChangeEvent<unknown>, page: number): void {
            throw new Error("Function not implemented.");
        } } />)
        expect(container).toMatchSnapshot();
    })

    it('Pagination in the document',()=>{
        const {container}=render(<Pagination booksPerPage={0} totalBooks={0} getPage={function (number: number) {
            throw new Error("Function not implemented.");
        } } page={0} onChange={function (event: ChangeEvent<unknown>, page: number): void {
            throw new Error("Function not implemented.");
        } } />);
        expect(container).toBeInTheDocument();
    })
});