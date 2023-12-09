package bootcamp.bookdiscovery.service;

import bootcamp.bookdiscovery.mockentities.TopicYouFollow;

import java.util.List;

public interface TopicsYouFollowService {
    List<TopicYouFollow> findAll();
}
