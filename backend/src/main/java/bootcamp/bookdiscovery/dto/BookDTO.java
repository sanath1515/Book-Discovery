package bootcamp.bookdiscovery.dto;

import bootcamp.bookdiscovery.entity.Author;

import lombok.*;

import java.util.Date;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
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