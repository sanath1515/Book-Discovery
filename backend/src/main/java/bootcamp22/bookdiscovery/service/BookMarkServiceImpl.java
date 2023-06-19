package bootcamp22.bookdiscovery.service;

import bootcamp22.bookdiscovery.entity.Book;
import bootcamp22.bookdiscovery.entity.BookMarkReferences;
import bootcamp22.bookdiscovery.exception.BookNotFoundException;
import bootcamp22.bookdiscovery.jparepository.BookMarkReferencesJpa;
import bootcamp22.bookdiscovery.jparepository.BooksJpa;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class BookMarkServiceImpl implements BookMarkService {
    @Autowired
    private BookMarkReferencesJpa bookMarkReferencesJpa;

    @Autowired
    private BooksJpa booksJpa;

    @Override
    public void updateBookmark(int bookId, BookMarkReferences bookMarkReferences) {

        Optional<Book> result = booksJpa.findById(bookId);

        if(!result.isEmpty())
        {
            Book tempBook = result.get();
            BookMarkReferences tempBookMarkReferences = bookMarkReferencesJpa.findByBook(tempBook);
            tempBookMarkReferences.setBookmark(bookMarkReferences.isBookmark());
            bookMarkReferencesJpa.save(tempBookMarkReferences);
        }
        else
        {
                throw new BookNotFoundException("Did not find book with following Id "+bookId);
        }
    }
    @Override
    public void updateBookReview(int bookId, BookMarkReferences bookMarkReferences) {
        Optional<Book> result = booksJpa.findById(bookId);
        if(!result.isEmpty())
        {
            Book tempBook = result.get();
            BookMarkReferences tempBookMarkReferences = bookMarkReferencesJpa.findByBook(tempBook);
            tempBookMarkReferences.setReview(bookMarkReferences.getReview());
            bookMarkReferencesJpa.save(tempBookMarkReferences);
        }
        else {
            throw new BookNotFoundException("Did not find book with following Id " + bookId);
        }

    }
    @Override
    public void updateBookRating(int bookId, BookMarkReferences bookMarkReferences) {
        Optional<Book> result = booksJpa.findById(bookId);

        if(!result.isEmpty())
        {
            Book tempBook = result.get();
            BookMarkReferences tempBookMarkReferences = bookMarkReferencesJpa.findByBook(tempBook);
            tempBookMarkReferences.setRating(bookMarkReferences.getRating());
            bookMarkReferencesJpa.save(tempBookMarkReferences);
        }
        else {
            throw new BookNotFoundException("Did not find book with following Id " + bookId);
        }
    }
}
