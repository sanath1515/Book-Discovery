package bootcamp.bookdiscovery;

import bootcamp.bookdiscovery.controller.BookRestController;
import bootcamp.bookdiscovery.entity.*;
import bootcamp.bookdiscovery.exception.author.AuthorNotFoundException;
import bootcamp.bookdiscovery.exception.book.BookNotFoundException;
import bootcamp.bookdiscovery.jparepository.BooksJpa;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.context.SpringBootTest;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.when;

@SpringBootTest
class BookTest {

    @MockBean
    private BooksJpa booksJpa;

    @Autowired
    private BookRestController bookRestController;

    @Test
    void testFindAllBooks(){

        User user =new User(1,"Vansh", "Jain","vansh.jain@zemosolabs.com",21,"male",101,new ArrayList<>(), new ArrayList<>(),new ArrayList<>(),new ArrayList<>());

        BookReadingStatus bookReadingStatus = new BookReadingStatus(1,"doing",123,null,user);
        List<BookReadingStatus> bookReadingStatusList= new ArrayList<>();
        bookReadingStatusList.add(bookReadingStatus);

        Author author = new Author(1,"Vansh","Writer","imageURL",null);
        List<Author> authorList = new ArrayList<>();
        authorList.add(author);

        BookMarkReferences bookMarkReferences = new BookMarkReferences(1,4,"test",false,null,null,new ArrayList<>());
        List<BookMarkReferences> bookMarkReferencesList=new ArrayList<>();
        bookMarkReferencesList.add(bookMarkReferences);

        Category category = new Category(1,"Java","OOPS", null, new ArrayList<>());
        List<Category> categoryList = new ArrayList<>();
        categoryList.add(category);

        Book theBook =new Book(1,"Hello","345","122",new Date(1998-12-12),"French",12,bookReadingStatusList,authorList,bookMarkReferencesList,categoryList);
        List<Book> bookList = new ArrayList<>();
        bookList.add(theBook);
        when(booksJpa.findAll()).thenReturn(bookList);
        assertEquals(1,bookRestController.getBooks().size());

    }

    @Test
    void testFindById(){

        User user =new User(1,"Vansh", "Jain","vansh.jain@zemosolabs.com",21,"male",101,new ArrayList<>(), new ArrayList<>(),new ArrayList<>(),new ArrayList<>());

        BookReadingStatus bookReadingStatus = new BookReadingStatus(1,"doing",123,null,user);
        List<BookReadingStatus> bookReadingStatusList= new ArrayList<>();
        bookReadingStatusList.add(bookReadingStatus);

        Author author = new Author(1,"Vansh","Writer","imageURL",null);
        List<Author> authorList = new ArrayList<>();
        authorList.add(author);

        ReviewReplies reviewReplies = new ReviewReplies(1,"thanks",user,null);
        List<ReviewReplies> reviewRepliesList = new ArrayList<>();
        reviewRepliesList.add(reviewReplies);
        Book book = new Book(1, "test1", "isbn", "image",null, "language", 123 , null, null, new ArrayList<>(),null);



        BookMarkReferences bookMarkReferences = new BookMarkReferences(1,4,"test",false,book,user,reviewRepliesList);
        List<BookMarkReferences> bookMarkReferencesList=new ArrayList<>();
        bookMarkReferencesList.add(bookMarkReferences);

        Category category = new Category(1,"Java","OOPS", null, new ArrayList<>());
        List<Category> categoryList = new ArrayList<>();
        categoryList.add(category);

        Book theBook =new Book(1,"Hello","345","122",new Date(1998-12-12),"French",12,bookReadingStatusList,authorList,bookMarkReferencesList,categoryList);

        when(booksJpa.findById(1)).thenReturn(java.util.Optional.of(theBook));
        assertEquals(1,bookRestController.getBookById(1).getBookId());
    }

    @Test
    void testInvalidBookId(){

        Book theBook =new Book(1,"Hello","345","122",new Date(1998-12-12),"French",12,null,null,null,null);

        when(booksJpa.findById(1)).thenReturn(java.util.Optional.of(theBook));

        assertThrows(BookNotFoundException.class,()->{
            bookRestController.getBookById(2);
        });

    }

}