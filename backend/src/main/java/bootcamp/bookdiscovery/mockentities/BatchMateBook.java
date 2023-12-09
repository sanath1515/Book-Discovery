package bootcamp.bookdiscovery.mockentities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BatchMateBook
{
    private int id;

    private String title;

    private String author;

    private int rating;

    private int followers;

    private String image;

    private String category;
}
