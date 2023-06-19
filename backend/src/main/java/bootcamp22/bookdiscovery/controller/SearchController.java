package bootcamp22.bookdiscovery.controller;

import bootcamp22.bookdiscovery.entity.BookSearch;
import bootcamp22.bookdiscovery.service.BookSearchServiceWithRepo;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/")
@Slf4j
public class SearchController {
    private BookSearchServiceWithRepo bookSearchServiceWithRepo;
    @Autowired
    public SearchController(BookSearchServiceWithRepo bookSearchServiceWithRepo)
    {
        this.bookSearchServiceWithRepo=bookSearchServiceWithRepo;
    }
    @GetMapping("/search")
    public List<BookSearch> fetch(@RequestParam String text)
    {
        return bookSearchServiceWithRepo.getAllBooks(text);
    }
}
