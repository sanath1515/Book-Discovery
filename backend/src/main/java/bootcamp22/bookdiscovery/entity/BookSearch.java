package bootcamp22.bookdiscovery.entity;


import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.elasticsearch.annotations.Document;
import org.springframework.data.elasticsearch.annotations.Field;
import org.springframework.data.elasticsearch.annotations.FieldType;

@Data
@Builder
@NoArgsConstructor
@Document(indexName = "bookdiscoveryapp")
public class BookSearch {

    @Id
    private Integer bookId;

    @Field(type=FieldType.Text,name="title")
    private String title;

    @Field(type=FieldType.Text,name = "description")
    private String description;



    @Field(type=FieldType.Text,name="author_image")
    private String authorImage;


    @Field(type=FieldType.Text,name="rating")
    private int rating;

    @Field(type=FieldType.Text,name="number_of_ratings")
    private int numberOfRatings;

//    @Field(type=FieldType.Long,name = "page_count")
//    private Long pageCount;

    @Field(type=FieldType.Text,name="author_name")
    private String authorName;

    @Field(type=FieldType.Text,name="book_image")
    private String BookImage;


    public BookSearch(Integer bookId, String title, String description, String authorImage, int rating, int numberOfRatings, String bookImage, String authorName) {
        this.bookId = bookId;
        this.description = description;
        this.title=title;
        this.authorName=authorName;
        this.authorImage=authorImage;
        this.BookImage=bookImage;
        this.rating=rating;
        this.numberOfRatings=numberOfRatings;

    }
}
