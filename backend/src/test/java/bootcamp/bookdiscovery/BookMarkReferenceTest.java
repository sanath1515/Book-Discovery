package bootcamp.bookdiscovery;

import bootcamp.bookdiscovery.controller.bookmarkcontroller;
import bootcamp.bookdiscovery.entity.Book;
import bootcamp.bookdiscovery.entity.BookMarkReferences;
import bootcamp.bookdiscovery.exception.book.BookNotFoundException;
import bootcamp.bookdiscovery.jparepository.BookMarkReferencesJpa;
import bootcamp.bookdiscovery.jparepository.BooksJpa;
import bootcamp.bookdiscovery.service.BookMarkService;
import org.junit.Before;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.Date;

import static org.mockito.Mockito.*;

@SpringBootTest
public class BookMarkReferenceTest
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
        BookMarkReferences bookMarkReferences = new BookMarkReferences(4,"super",false);
    }
//    controller testing
    @Test
    public void updateBookmarkController()
    {
        int book_id=1;
        when(booksJpa.findById(book_id)).thenReturn(java.util.Optional.of(new Book("helo", "1234", "abcde", new Date(2000 - 10 - 10), "english", 1)));
        BookMarkReferences theBookMarkReferences = new BookMarkReferences (4,"awesome",false);
        when(mockJpa.findByBook(new Book("helo", "1234", "abcde", new Date(2000 - 10 - 10), "english", 1))).thenReturn(theBookMarkReferences);
        mockService.updateBookmark(book_id,theBookMarkReferences);
        verify(mockJpa,times(1)).save(theBookMarkReferences);

        mockController.updateBookmark(book_id,theBookMarkReferences);

    }

//    service testing
    @Test
    public void updateBookmark()
    {
        int book_id=1;
        when(booksJpa.findById(book_id)).thenReturn(java.util.Optional.of(new Book("helo", "1234", "abcde", new Date(2000 - 10 - 10), "english", 1)));
        BookMarkReferences theBookMarkReferences = new BookMarkReferences (4,"awesome",false);
        when(mockJpa.findByBook(new Book("helo", "1234", "abcde", new Date(2000 - 10 - 10), "english", 1))).thenReturn(theBookMarkReferences);
        mockService.updateBookmark(book_id,theBookMarkReferences);
        verify(mockJpa,times(1)).save(theBookMarkReferences);
    }

    @Test
    public void updateBookmarkWithException()
    {
        int book_id=1;
        try {
            when(booksJpa.findById(book_id)).thenReturn(java.util.Optional.of(new Book("helo", "1234", "abcde", new Date(2000 - 10 - 10), "english", 1)));
            BookMarkReferences theBookMarkReferences = new BookMarkReferences(4, "awesome", false);
            when(mockJpa.findByBook(new Book("helo", "1234", "abcde", new Date(2000 - 10 - 10), "english", 1))).thenReturn(theBookMarkReferences);
            mockService.updateBookmark(2, theBookMarkReferences);
            verify(mockJpa, times(1)).save(theBookMarkReferences);
        }
        catch(BookNotFoundException exe)
        {
            System.out.println(exe);
        }
    }

}
