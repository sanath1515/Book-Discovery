package bootcamp.bookdiscovery.dto;

import bootcamp.bookdiscovery.entity.Book;
import bootcamp.bookdiscovery.entity.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BookMarkReferencesDTO {

    private int id;
    private int rating;
    private String review;
    private boolean bookmark;
    private Book book;
    private User user;


    private String userName;

    private List<ReviewRepliesDTO> reviewReplies;
}
