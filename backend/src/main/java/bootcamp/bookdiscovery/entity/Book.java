package bootcamp.bookdiscovery.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Data
@Table(name = "book")
@NoArgsConstructor
@AllArgsConstructor
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "book_id")
    private int bookId;

    @Lob
    @Column(name = "description")
    private String description;

    @Column(name = "isbn")
    private String isbn;

    @Column(name = "image")
    private String image;

    @Column(name = "release_date")
    private Date releaseDate;

    @Column(name = "language")
    private String language;

    @Column(name = "page_count")
    private int pageCount;

    @ToString.Exclude
    @OneToMany(mappedBy = "bookval",cascade = {CascadeType.DETACH,CascadeType.MERGE,CascadeType.PERSIST,CascadeType.REFRESH})
    private List<BookReadingStatus> bookReadingStatusList;

    @ToString.Exclude
    @ManyToMany
    @JoinColumn(name = "author_id")
    private List<Author> authorList;

    @ToString.Exclude
    @OneToMany(mappedBy = "book",cascade = {CascadeType.DETACH,CascadeType.MERGE,CascadeType.PERSIST,CascadeType.REFRESH})
    private List<BookMarkReferences> bookMarkReferences;

    @ToString.Exclude
    @ManyToMany
    @JoinColumn(name = "category_id")
    private List<Category>categoryList;

    public Book(String description, String isbn, String image, Date releaseDate, String language, int pageCount) {
        this.description = description;
        this.isbn = isbn;
        this.image = image;
        this.releaseDate = releaseDate;
        this.language = language;
        this.pageCount = pageCount;
    }


}
