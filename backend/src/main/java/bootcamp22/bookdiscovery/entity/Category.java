package bootcamp22.bookdiscovery.entity;

import lombok.Data;
import lombok.ToString;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@Table(name="category")
public class Category
{
    @Id
    @Column(name="id")
    private int id;

    @Column(name="name")
    private String categoryName;

    @Column(name="description")
    private String categoryDescription;

    @ToString.Exclude
    @ManyToOne(cascade = {CascadeType.DETACH,CascadeType.MERGE,CascadeType.PERSIST,CascadeType.REFRESH})
    @JoinColumn(name="topicHeading_id")
    private TopicHeading topicHeading;

    @ToString.Exclude
    @ManyToMany(mappedBy = "categoryList", cascade = CascadeType.ALL)
    private List<Book>bookList;

}
