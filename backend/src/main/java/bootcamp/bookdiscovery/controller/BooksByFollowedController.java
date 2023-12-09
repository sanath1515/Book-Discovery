package bootcamp.bookdiscovery.controller;

import bootcamp.bookdiscovery.mockentities.BooksByFollowed;
import bootcamp.bookdiscovery.service.BooksByFollowedService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import java.util.List;

@RestController
@RequestMapping("/books-by-followed")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class BooksByFollowedController {

    @Autowired
    private BooksByFollowedService booksByFollowedService;

    @GetMapping("/")
    public List<BooksByFollowed>  findAllBooksByFollowed (){
        return  booksByFollowedService.findAll();
    }


}
