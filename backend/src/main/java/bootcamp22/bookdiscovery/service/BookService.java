package bootcamp.bookdiscovery.service;


import bootcamp.bookdiscovery.dto.BookDTO;
import bootcamp.bookdiscovery.entity.BookReadingStatus;


import java.util.List;


public interface BookService {

   List<BookDTO> findAll();

   BookDTO findByBookId(int bookId);

   void updateReadingStatus(int bookId, BookReadingStatus bookReadingStatus);




}
