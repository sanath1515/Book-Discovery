package bootcamp.bookdiscovery.dto;

import bootcamp.bookdiscovery.entity.Author;

package bootcamp22.bookdiscovery.dto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BookDTO {

    private int bookId;
    private String description;
    private String isbn;
    private String image;
    private Date releaseDate;
    private String language;
    private int pageCount;
    private List<Author> authorList;
    private List<CategoryDTO>categoryList;
    private float rating;
    private  int numberOfRatings;
    private boolean bookmark;
    private String bookReadingStatus;
    private String categoryName;
    private int currentPage;

    private List<BookMarkReferencesDTO> reviewList;

}