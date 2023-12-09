package bootcamp.bookdiscovery.dto;

import bootcamp.bookdiscovery.entity.Book;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CategoryDTO {

    private int id;
    private String categoryName;
    private String categoryDescription;
    private TopicHeadingDTO topicHeading;
    private List<BookDTO> bookList;


}
