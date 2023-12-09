package bootcamp.bookdiscovery.controller;

import bootcamp.bookdiscovery.service.TopicsYouFollowService;
import bootcamp.bookdiscovery.mockentities.TopicYouFollow;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/topics")
@CrossOrigin(origins = "*", allowedHeaders = "*")
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
