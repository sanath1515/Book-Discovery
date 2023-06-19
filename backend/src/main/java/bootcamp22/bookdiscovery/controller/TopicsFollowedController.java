package bootcamp22.bookdiscovery.controller;

import bootcamp22.bookdiscovery.mockentities.TopicYouFollow;
import bootcamp22.bookdiscovery.service.TopicsYouFollowService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/topics")
public class TopicsFollowedController
{
    @Autowired
    private TopicsYouFollowService topicsYouFollow;

    @GetMapping("/")
    public List<TopicYouFollow> topicsyoufollow()
    {
        return topicsYouFollow.findAll();
    }

}
