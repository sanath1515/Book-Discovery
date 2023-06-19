package bootcamp22.bookdiscovery.mockentities;

import lombok.Data;

@Data
public class TopicYouFollow
{
    private String name;
    private String imageUrl;

    public TopicYouFollow(String name, String imageUrl) {
        this.name = name;
        this.imageUrl = imageUrl;
    }
}
