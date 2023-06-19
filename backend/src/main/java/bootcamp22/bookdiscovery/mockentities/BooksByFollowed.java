package bootcamp22.bookdiscovery.mockentities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BooksByFollowed {

    private int id;
    private String title;
    private String description;
    private String imageURL;
    private String category;
    private float rating;
    private int numberOfRatings;
    private boolean bookmark;
    private String bookReadingStatus;
    private int currentlyReadingPage;
    private int totalPages;


}
