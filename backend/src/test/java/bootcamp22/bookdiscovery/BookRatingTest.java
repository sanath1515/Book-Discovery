package bootcamp22.bookdiscovery;

import bootcamp22.bookdiscovery.controller.bookmarkcontroller;
import bootcamp22.bookdiscovery.entity.Book;
import bootcamp22.bookdiscovery.entity.BookMarkReferences;
import bootcamp22.bookdiscovery.exception.BookNotFoundException;
import bootcamp22.bookdiscovery.exception.BookRating.RatingNotFoundException;
import bootcamp22.bookdiscovery.jparepository.BookMarkReferencesJpa;
import bootcamp22.bookdiscovery.jparepository.BooksJpa;
import bootcamp22.bookdiscovery.service.BookMarkService;
import org.junit.Before;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import java.util.Date;


import static org.mockito.Mockito.*;

@SpringBootTest
public class BookRatingTest
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
    public void updateBookRatingTest()
    {
        int book_id=1;
        when(booksJpa.findById(book_id)).thenReturn(java.util.Optional.of(new Book("helo", "1234", "abcde", new Date(2000 - 10 - 10), "english", 1)));
        BookMarkReferences theBookMarkReferences = new BookMarkReferences (4,"awesome",false);
        when(mockJpa.findByBook(new Book("helo", "1234", "abcde", new Date(2000 - 10 - 10), "english", 1))).thenReturn(theBookMarkReferences);
        mockService.updateBookRating(book_id,theBookMarkReferences);
        verify(mockJpa,times(1)).save(theBookMarkReferences);

        mockController.updateBookRating(book_id,theBookMarkReferences);

    }
    //service testing
    @Test
    public void updateBookRating()
    {
        int book_id=1;
        when(booksJpa.findById(book_id)).thenReturn(java.util.Optional.of(new Book("helo", "1234", "abcde", new Date(2000 - 10 - 10), "english", 1)));
        BookMarkReferences theBookMarkReferences = new BookMarkReferences (4,"awesome",false);
        when(mockJpa.findByBook(new Book("helo", "1234", "abcde", new Date(2000 - 10 - 10), "english", 1))).thenReturn(theBookMarkReferences);
        mockService.updateBookRating(book_id,theBookMarkReferences);
        verify(mockJpa,times(1)).save(theBookMarkReferences);
    }

    @Test
    public void updateBookRatingWithException()
    {
        int book_id=1;
        try {
            when(booksJpa.findById(book_id)).thenReturn(java.util.Optional.of(new Book("helo", "1234", "abcde", new Date(2000 - 10 - 10), "english", 1)));
            BookMarkReferences theBookMarkReferences = new BookMarkReferences(4, "awesome", false);
            when(mockJpa.findByBook(new Book("helo", "1234", "abcde", new Date(2000 - 10 - 10), "english", 1))).thenReturn(theBookMarkReferences);
            mockService.updateBookRating(2, theBookMarkReferences);
            verify(mockJpa, times(1)).save(theBookMarkReferences);
        }
        catch(BookNotFoundException exe)
        {
            System.out.println(exe);
        }
    }

}


