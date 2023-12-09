package bootcamp.bookdiscovery.controller;

import bootcamp.bookdiscovery.entity.BookSearch;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/")
@Slf4j
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class SearchController {

    @GetMapping("/search")
    public List<BookSearch> fetch(@RequestParam String text)
    {
        return null;
    }
}
