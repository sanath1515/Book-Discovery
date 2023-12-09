package bootcamp.bookdiscovery.service;

import bootcamp.bookdiscovery.dto.*;
import bootcamp.bookdiscovery.entity.*;
import bootcamp.bookdiscovery.exception.book.BookNotFoundException;
import bootcamp.bookdiscovery.jparepository.BookMarkReferencesJpa;
import bootcamp.bookdiscovery.jparepository.BookReadingStatusJpa;
import bootcamp.bookdiscovery.jparepository.BooksJpa;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class BookServiceImpl implements bootcamp.bookdiscovery.service.BookService {


    @Autowired
    private BooksJpa bookJpa;

    @Autowired
    private BookReadingStatusJpa bookReadingStatusJpa;

    @Autowired
    private BookMarkReferencesJpa bookMarkReferencesJpa;


    @Override
    public BookDTO findByBookId(int bookId) {
        int userId = 1;
        BookDTO bookDTO = new BookDTO();
        Book theBook;
        Optional<Book> result = bookJpa.findById(bookId);
        if(result.isPresent()) {
            theBook = result.get();
            bookDTO.setBookId(theBook.getBookId());
            bookDTO.setDescription(theBook.getDescription());
            bookDTO.setIsbn(theBook.getIsbn());
            bookDTO.setImage(theBook.getImage());
            bookDTO.setLanguage(theBook.getLanguage());
            bookDTO.setReleaseDate(theBook.getReleaseDate());
            bookDTO.setPageCount(theBook.getPageCount());
            bookDTO.setCategoryName(theBook.getCategoryList().stream().collect(Collectors.toList()).get(0).getCategoryName());

            List<BookMarkReferences> theBookMarkReferencesList = theBook.getBookMarkReferences();

            int rating = theBook.getBookMarkReferences().stream().map(temp -> temp.getRating()).reduce(0, (x, y) -> x + y);
            int size = theBookMarkReferencesList.size();
            bookDTO.setRating(rating / (float)size);

            bookDTO.setNumberOfRatings(size);

            List<BookMarkReferences> theBookmarkReferences = theBookMarkReferencesList.stream().filter(ref -> ref.getUser().getUserId() == userId).collect(Collectors.toList());

            if (!theBookmarkReferences.isEmpty()) {
                bookDTO.setBookmark(theBookmarkReferences.get(0).isBookmark());

            }
            List<BookReadingStatus> theBookReadingStatus = theBook.getBookReadingStatusList().stream().filter(ref -> ref.getUser().getUserId() == userId).collect(Collectors.toList());

            if (!theBookReadingStatus.isEmpty()) {
                bookDTO.setBookReadingStatus(theBookReadingStatus.get(0).getReadStatus());

            }
            bookDTO.setAuthorList(theBook.getAuthorList());
 List<BookMarkReferences> reviewBookReferences = theBookMarkReferencesList.stream().filter(temp -> temp.getBook().getBookId() == bookId).filter(ref ->ref.getUser().getUserId() == userId).collect(Collectors.toList());


            List<BookMarkReferencesDTO> theBookMarkReferenceDTOList = new ArrayList<>();
            for (BookMarkReferences theBookReview : reviewBookReferences) {

                BookMarkReferencesDTO theBookMarkReferenceDTO = new BookMarkReferencesDTO();

                theBookMarkReferenceDTO.setReview(theBookReview.getReview());
                theBookMarkReferenceDTO.setId(theBookReview.getId());
//                theBookMarkReferenceDTO.setUserName(theBookReview.getUser().getFirstName() +" "+theBookReview.getUser().getLastName());

                List<ReviewRepliesDTO> theReviewRepliesDTO = new ArrayList<>();

                for (ReviewReplies theReviewReplies : theBookReview.getReviewReplies()) {
                    ReviewRepliesDTO reviewRepliesDTO = new ReviewRepliesDTO();
                    reviewRepliesDTO.setReplyText(theReviewReplies.getReplyText());
                    reviewRepliesDTO.setId(theReviewReplies.getId());
//                    reviewRepliesDTO.setUserName(theReviewReplies.getUsers().getFirstName()+" "+theReviewReplies.getUsers().getLastName());
                    theReviewRepliesDTO.add(reviewRepliesDTO);
                }
                theBookMarkReferenceDTO.setReviewReplies(theReviewRepliesDTO);
                theBookMarkReferenceDTOList.add(theBookMarkReferenceDTO);
            }

            bookDTO.setReviewList(theBookMarkReferenceDTOList);

        }
        else{
            throw new BookNotFoundException("Book is not Found "+bookId);
        }
        return bookDTO;
    }


    public List<BookDTO> findAll() {
        int userId=1;
        List<BookDTO> bookList = new ArrayList<>();
        for (Book book: bookJpa.findAll()) {
            BookDTO bookDTO = new BookDTO();
            float totalRating=4.0f;
            List<BookReadingStatus> theBookReadingStatus = book.getBookReadingStatusList().stream().filter(ref -> ref.getUser().getUserId() == userId).collect(Collectors.toList());
           bookDTO.setBookReadingStatus(theBookReadingStatus.get(0).getReadStatus());
           bookDTO.setCurrentPage (Integer.valueOf(String.valueOf(theBookReadingStatus.get(0).getCurrentPage())));
           bookDTO.setCategoryName( book.getCategoryList().get(0).getCategoryName());
           bookDTO.setRating(totalRating);
           bookDTO.setNumberOfRatings(bookMarkReferencesJpa.findAll().size());

           BeanUtils.copyProperties(book,bookDTO);
            bookList.add(bookDTO);
        }
        return bookList;
    }


    public void updateReadingStatus(int bookId, BookReadingStatus bookReadingStatus) {
        Optional<Book> result = bookJpa.findById(bookId);
        int userId =1;
        if(result.isPresent() && bookReadingStatus.getUser().getUserId() == userId) {
            Book tempBook = result.get();
            BookReadingStatus tempBookReadingStatus = bookReadingStatusJpa.findByBookval(tempBook);
            tempBookReadingStatus.setReadStatus(bookReadingStatus.getReadStatus());
            bookReadingStatusJpa.save(tempBookReadingStatus);
        }
    }

    @Override
    public void addBook(BookDTO bookDTO) {

    }
}



