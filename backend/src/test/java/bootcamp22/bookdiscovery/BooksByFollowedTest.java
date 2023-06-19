package bootcamp22.bookdiscovery;

import bootcamp22.bookdiscovery.controller.BooksByFollowedController;
import bootcamp22.bookdiscovery.mockentities.BooksByFollowed;
import bootcamp22.bookdiscovery.service.BooksByFollowedService;
import bootcamp22.bookdiscovery.service.BooksByFollowedServiceImpl;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import static org.junit.jupiter.api.Assertions.assertEquals;
import java.util.ArrayList;
import java.util.List;

import static org.mockito.Mockito.when;

@SpringBootTest
class BooksByFollowedTest {

    @MockBean
    private BooksByFollowedService booksByFollowedService;

    @Autowired
    private BooksByFollowedController booksByFollowedController;

    @Test
    void testBookByFollowed(){

        String[] currentData ={"1","Organic Chemistry","toughest part of chemistry", "https://cdn.zeplin.io/5f03041d8c8fc11335546618/assets/50247E5B-3788-492D-956F-63172A8FDBF8.png", "Chemistry","3.9","100","false","reading","12","200"};
        BooksByFollowed booksByFollowed = new BooksByFollowed(Integer.parseInt(currentData[0]), currentData[1], currentData[2], currentData[3], currentData[4],
                Float.parseFloat(currentData[5]),Integer.parseInt(currentData[6]), false,currentData[8],Integer.parseInt(currentData[9]), Integer.parseInt(currentData[10]));
        List<BooksByFollowed> booksByFollowedList = new ArrayList<>();
        booksByFollowedList.add(booksByFollowed);
        when(booksByFollowedService.findAll()).thenReturn(booksByFollowedList);
        assertEquals(1, booksByFollowedController.findAllBooksByFollowed().size());
    }

    @Test
    void testFindAllBooksByFollowed(){
            String[] currentData ={"1","Organic Chemistry","toughest part of chemistry", "https://cdn.zeplin.io/5f03041d8c8fc11335546618/assets/50247E5B-3788-492D-956F-63172A8FDBF8.png", "Chemistry","3.9","100","false","reading","12","200"};
            BooksByFollowed booksByFollowed = new BooksByFollowed(Integer.parseInt(currentData[0]), currentData[1], currentData[2], currentData[3], currentData[4],
                Float.parseFloat(currentData[5]),Integer.parseInt(currentData[6]), false,currentData[8],Integer.parseInt(currentData[9]), Integer.parseInt(currentData[10]));
        List<BooksByFollowed> booksByFollowedList = new ArrayList<>();
        booksByFollowedList.add(booksByFollowed);
        when(booksByFollowedService.findAll()).thenReturn(booksByFollowedList);
        for(BooksByFollowed currentBooksByFollowed : booksByFollowedService.findAll()){
            assertEquals(currentBooksByFollowed,booksByFollowed);
        }
    }



}
