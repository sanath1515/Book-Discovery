package bootcamp.bookdiscovery.controller;

import bootcamp.bookdiscovery.service.BookMarkService;
import bootcamp.bookdiscovery.entity.BookMarkReferences;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class bookmarkcontroller
{
    @Autowired
    private BookMarkService bookMarkService;

    @PutMapping("book/{bookId}/bookmark")
    public void updateBookmark(@PathVariable("bookId") int bookId, @RequestBody BookMarkReferences bookmark)
    {
        System.out.println(bookId);
        System.out.println(bookmark);
        bookMarkService.updateBookmark(bookId,bookmark);
    }
    @PutMapping("book/{bookId}/Review")
    public void updateBookReview(@PathVariable("bookId") Integer bookId,@RequestBody BookMarkReferences bookReview)
    {

        bookMarkService.updateBookReview(bookId,bookReview);
    }
    @PutMapping("book/{bookId}/Rating")
    public void updateBookRating(@PathVariable("bookId") Integer bookId,@RequestBody BookMarkReferences bookRating)
    {

        bookMarkService.updateBookRating(bookId,bookRating);
    }

}
