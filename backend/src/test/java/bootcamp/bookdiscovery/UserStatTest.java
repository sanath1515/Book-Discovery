package bootcamp.bookdiscovery;

import bootcamp.bookdiscovery.dto.UserStatDto;
import bootcamp.bookdiscovery.entity.BookMarkReferences;
import bootcamp.bookdiscovery.entity.BookReadingStatus;
import bootcamp.bookdiscovery.entity.User;
import bootcamp.bookdiscovery.jparepository.BookMarkReferencesJpa;
import bootcamp.bookdiscovery.jparepository.BookReadingStatusJpa;
import bootcamp.bookdiscovery.jparepository.UserJpa;
import bootcamp.bookdiscovery.service.UserStatService;
import org.junit.Before;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

@SpringBootTest
public class UserStatTest
{
    @Autowired
    private UserStatService userStatService;

    @MockBean
    private UserJpa userJpa;

    @MockBean
    private BookMarkReferencesJpa bookMarkReferencesJpa;

    @MockBean
    private BookReadingStatusJpa bookReadingStatusJpa;

    @Before
    public void setup()
    {
        User theUser = new User("sanath","kumar","sanathBajjuri@gmail.com",21,"M",1);
        BookMarkReferences theBookMarkReferences = new BookMarkReferences(2,"awesome",false);
        BookReadingStatus theBookReadingStatus = new BookReadingStatus("reading",15);
    }

    @Test
    public void getBookmarksService()
    {
        User theUser = new User("sanath","kumar","sanathBajjuri@gmail.com",21,"M",1);
        BookMarkReferences theBookMarkReferences = new BookMarkReferences(2,"awesome",false);

        List<BookMarkReferences> bookMarkReferencesList = new ArrayList<>();
        bookMarkReferencesList.add(theBookMarkReferences);
        when(bookMarkReferencesJpa.findAllByUser(java.util.Optional.of(theUser))).thenReturn(bookMarkReferencesList);
        assertEquals(0,userStatService.getBookmarks());
    }

    @Test
    public void getReadingService()
    {
        User theUser = new User("sanath","kumar","sanathBajjuri@gmail.com",21,"M",1);
        BookReadingStatus theBookReadingStatus = new BookReadingStatus("reading",15);

        List<BookReadingStatus> bookReadingStatusList = new ArrayList<>();
        bookReadingStatusList.add(theBookReadingStatus);
        when(bookReadingStatusJpa.findAllByUser(java.util.Optional.of(theUser))).thenReturn(bookReadingStatusList);
        assertEquals(0,userStatService.getCurrentlyReading());
    }

    @Test
    public void getFinishedService()
    {
        User theUser = new User("sanath","kumar","sanathBajjuri@gmail.com",21,"M",1);
        BookReadingStatus theBookReadingStatus = new BookReadingStatus("reading",15);

        List<BookReadingStatus> bookReadingStatusList = new ArrayList<>();
        bookReadingStatusList.add(theBookReadingStatus);
        when(bookReadingStatusJpa.findAllByUser(java.util.Optional.of(theUser))).thenReturn(bookReadingStatusList);
        assertEquals(0,userStatService.getFinishedReading());
    }

    @Test
    public void getBookperYearService()
    {
        assertEquals(100,userStatService.getTargetPerYear());
    }

    @Test
    public void getUserStatService()
    {
        UserStatDto userStatDto = new UserStatDto(0,0,0,100);

        getBookmarksService();
        getBookperYearService();
        getFinishedService();
        getReadingService();;

        assertEquals(userStatDto,userStatService.getUserStat());
    }


}
