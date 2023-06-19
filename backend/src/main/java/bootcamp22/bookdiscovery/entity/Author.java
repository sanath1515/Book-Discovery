package bootcamp22.bookdiscovery.entity;

import lombok.ToString;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "author")
public class Author {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int authorId;

    @Column(name = "name")
    private String name;

    @Column(name = "description")
    private String description;

    @Column(name = "image")
    private String image;

    @ToString.Exclude
    @ManyToMany(mappedBy = "authorList", cascade = CascadeType.ALL)
    private List<Book> bookList;

}
