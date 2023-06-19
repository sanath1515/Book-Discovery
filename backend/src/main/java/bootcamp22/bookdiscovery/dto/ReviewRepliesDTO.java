package bootcamp.bookdiscovery.dto;


import bootcamp.bookdiscovery.entity.BookMarkReferences;
import bootcamp.bookdiscovery.entity.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ReviewRepliesDTO {

    private int id;
    private String replyText;
    private User users;


    private String userName;





    private BookMarkReferences bookMarkReferencesDTO;


}

