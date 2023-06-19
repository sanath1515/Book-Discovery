package bootcamp.bookdiscovery.controller;

import bootcamp.bookdiscovery.dto.BookDTO;
import bootcamp.bookdiscovery.entity.BookReadingStatus;
import bootcamp.bookdiscovery.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("")
public class BookRestController {
  
   @Autowired
    public BookService bookService;

    @GetMapping("/books")
    public List<BookDTO> getBooks() {
        return bookService.findAll();
    }


    @GetMapping("/book/{bookId}")
    public BookDTO getBookById(@PathVariable int bookId) {

         return bookService.findByBookId(bookId);

    }

    @PutMapping("book/{bookId}/bookstatus")
    public void updateReadingStatus(@PathVariable("bookId") int bookId, @RequestBody BookStatusMock readingStatus){
        bookService.updateReadingStatus(bookId ,readingStatus);
    }

}
