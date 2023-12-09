package bootcamp.bookdiscovery.controller;

import bootcamp.bookdiscovery.mockentities.BatchMateBook;
import bootcamp.bookdiscovery.service.BookBatchmatesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/books")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class BooksBatchmatesController
{

    @Autowired
    BookBatchmatesService bookBatchmatesService;

    @GetMapping("/batchmates")
    public List<BatchMateBook> getBooksReadByBatchmates()
    {
        return bookBatchmatesService.getBooksReadByBatchmates();
    }
}
