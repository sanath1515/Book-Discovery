package bootcamp.bookdiscovery.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AuthorDTO {
    private int authorId;
    private String author;
    private String description;
    private String authorImage;
    private List<BookDTO> bookList;

}