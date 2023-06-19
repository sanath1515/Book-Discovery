package bootcamp22.bookdiscovery.dto;

import bootcamp22.bookdiscovery.entity.Book;
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
    private List<Book> bookList;


}
