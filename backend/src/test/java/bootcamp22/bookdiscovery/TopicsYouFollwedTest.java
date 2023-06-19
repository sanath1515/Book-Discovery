package bootcamp22.bookdiscovery;

import bootcamp22.bookdiscovery.mockentities.TopicYouFollow;
import bootcamp22.bookdiscovery.service.TopicsYouFollowService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

@SpringBootTest
public class TopicsYouFollwedTest
{

    @MockBean
    private TopicsYouFollowService mockService;

    @Test
    void getTopics()
    {
        TopicYouFollow temp = new TopicYouFollow("abc","xyz");
        List<TopicYouFollow> tempList = new ArrayList<>();
        tempList.add(temp);
        when(mockService.findAll()).thenReturn(tempList);
        assertEquals(1,mockService.findAll().size());

    }

}
