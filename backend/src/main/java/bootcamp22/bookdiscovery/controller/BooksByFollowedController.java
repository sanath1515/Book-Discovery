package bootcamp22.bookdiscovery.controller;

import bootcamp22.bookdiscovery.mockentities.BooksByFollowed;
import bootcamp22.bookdiscovery.service.BooksByFollowedService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import bootcamp.bookdiscovery.service.BooksByFollowedService;

import java.util.List;

@RestController
@RequestMapping("/books-by-followed")
public class BooksByFollowedController {

    @Autowired
    private BooksByFollowedService booksByFollowedService;

    @GetMapping("/")
    public List<BooksByFollowed>  findAllBooksByFollowed (){
        return  booksByFollowedService.findAll();
    }


}
