package bootcamp.bookdiscovery;

import bootcamp.bookdiscovery.controller.SearchController;
import bootcamp.bookdiscovery.entity.BookSearch;
import bootcamp.bookdiscovery.service.BookSearchServiceWithRepo;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
@Slf4j
public class SearchTest {
    @Autowired
    private BookSearchServiceWithRepo bookSearchServiceWithRepo;
    @Autowired
    private SearchController searchController;

    @Test
    void testSearch()
    {
        List<BookSearch> books=bookSearchServiceWithRepo.getAllBooks("Inorganic");
        assertEquals(2,books.size());

    }

    @Test
    void controllerTest()
    {
        String des="Through a series of recent breakthroughs, deep learning has boosted the entire field of machine learning";
        List<BookSearch> books=new ArrayList<>();
        books.add(new BookSearch(4,"Biology",des,"",5,10,"","Carlos"));

        searchController.fetch("Biology");
        assertEquals(books, searchController.fetch("Biology"));
    }
    @Test
    void testSearchWithException()
    {
        try
        {
            bookSearchServiceWithRepo.getAllBooks("In");
            assertEquals(0,searchController.fetch("In").size());
        }
        catch(Exception exe)
        {
            System.out.println("no result");
        }
    }





}
