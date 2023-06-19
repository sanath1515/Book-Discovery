package bootcamp22.bookdiscovery.service;

import bootcamp22.bookdiscovery.mockentities.TopicYouFollow;

import java.util.List;

public interface TopicsYouFollowService {
    List<TopicYouFollow> findAll();
}
