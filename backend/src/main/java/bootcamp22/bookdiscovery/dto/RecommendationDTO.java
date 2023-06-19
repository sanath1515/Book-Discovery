package bootcamp.bookdiscovery.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RecommendationDTO
{
    private int id;

    private String bookImage;

    private String title;

    private String author;

    private float rating;

    private boolean bookmark;
}
