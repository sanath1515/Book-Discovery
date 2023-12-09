package bootcamp.bookdiscovery.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserStatDto
{
    private int bookmarks;

    private int currentlyReading;

    private int booksFinished;

    private int targetPerYear;


}
