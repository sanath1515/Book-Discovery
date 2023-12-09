package bootcamp.bookdiscovery;

import bootcamp.bookdiscovery.controller.bookmarkcontroller;
import bootcamp.bookdiscovery.entity.Book;
import bootcamp.bookdiscovery.entity.BookMarkReferences;
import bootcamp.bookdiscovery.exception.book.BookNotFoundException;
import bootcamp.bookdiscovery.jparepository.BookMarkReferencesJpa;
import bootcamp.bookdiscovery.jparepository.BooksJpa;
import bootcamp.bookdiscovery.service.BookMarkService;
import bootcamp.bookdiscovery.exception.BookRating.RatingNotFoundException;
import org.junit.Before;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import java.util.Date;


import static org.mockito.Mockito.*;

@SpringBootTest
public class BookReviewTest
{
    @Autowired
    private BookMarkService mockService;

    @MockBean
    private BookMarkReferencesJpa mockJpa;

    @MockBean
    private BooksJpa booksJpa;

    @Autowired
    private bookmarkcontroller mockController;


    @Before
    public void setup()
    {
        BookMarkReferences bookMarkReferences = new BookMarkReferences(5,"good",false);
    }
    //controller testing
    @Test
    public void updateBookReviewTest()
    {
        int book_id=1;
        when(booksJpa.findById(book_id)).thenReturn(java.util.Optional.of(new Book("helo", "1234", "abcde", new Date(2000 - 10 - 10), "english", 1)));
        BookMarkReferences theBookMarkReferences = new BookMarkReferences (4,"awesome",false);
        when(mockJpa.findByBook(new Book("helo", "1234", "abcde", new Date(2000 - 10 - 10), "english", 1))).thenReturn(theBookMarkReferences);
        mockService.updateBookReview(book_id,theBookMarkReferences);
        verify(mockJpa,times(1)).save(theBookMarkReferences);

        mockController.updateBookReview(book_id,theBookMarkReferences);

    }
    //service testing
    @Test
    public void updateBookReview()
    {
        int book_id=1;
        when(booksJpa.findById(book_id)).thenReturn(java.util.Optional.of(new Book("helo", "1234", "abcde", new Date(2000 - 10 - 10), "english", 1)));
        BookMarkReferences theBookMarkReferences = new BookMarkReferences (4,"awesome",false);
        when(mockJpa.findByBook(new Book("helo", "1234", "abcde", new Date(2000 - 10 - 10), "english", 1))).thenReturn(theBookMarkReferences);
        mockService.updateBookReview(book_id,theBookMarkReferences);
        verify(mockJpa,times(1)).save(theBookMarkReferences);
    }

    @Test
    public void updateBookReviewWithException()
    {
        int book_id=1;
        try {
            when(booksJpa.findById(book_id)).thenReturn(java.util.Optional.of(new Book("helo", "1234", "abcde", new Date(2000 - 10 - 10), "english", 1)));
            BookMarkReferences theBookMarkReferences = new BookMarkReferences(4, "awesome", false);
            when(mockJpa.findByBook(new Book("helo", "1234", "abcde", new Date(2000 - 10 - 10), "english", 1))).thenReturn(theBookMarkReferences);
            mockService.updateBookReview(2, theBookMarkReferences);
            verify(mockJpa, times(1)).save(theBookMarkReferences);
        }
        catch(BookNotFoundException exe)
        {
            System.out.println(exe);
        }
    }

}