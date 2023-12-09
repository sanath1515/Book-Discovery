package bootcamp.bookdiscovery.service;

import bootcamp.bookdiscovery.mockentities.TopicYouFollow;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TopicsYouFollowServiceImpl implements TopicsYouFollowService{
    @Override
    public List<TopicYouFollow> findAll() {

        String[][] images = {
                {"https://cdn.zeplin.io/5f03041d8c8fc11335546618/assets/50247E5B-3788-492D-956F-63172A8FDBF8.png", "Telugu"},
                {"https://cdn.zeplin.io/5f03041d8c8fc11335546618/assets/4BA2C98D-1B0A-4984-A36F-3994BACDB944.png", "Hindi"},
                {"https://cdn.zeplin.io/5f03041d8c8fc11335546618/assets/80BD6795-E0BE-4765-9C23-F737D4F6AD7B.png", "English"},
                {"https://cdn.zeplin.io/5f03041d8c8fc11335546618/assets/40955D7D-20CD-4EF3-A752-728C3D5810E6.png", "Physics"},
                {"https://cdn.zeplin.io/5f03041d8c8fc11335546618/assets/AF4114D0-FABB-4712-804C-5BFCFF242AAB.png", "Chemistry"},
                {"https://cdn.zeplin.io/5f03041d8c8fc11335546618/assets/14055696-F8E6-4CF2-B2C1-9F881E3A0CF4.png", "Social"}
        };

        List<TopicYouFollow> data = new ArrayList<>();
        for (String[] image : images) {
            data.add(new TopicYouFollow(image[0], image[1]));
        }

        return data;
    }
}
