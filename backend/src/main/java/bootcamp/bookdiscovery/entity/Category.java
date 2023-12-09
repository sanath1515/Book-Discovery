package bootcamp.bookdiscovery.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@Table(name="category")
@NoArgsConstructor
@AllArgsConstructor
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

    public Category(int id, String categoryName, String categoryDescription) {
        this.id = id;
        this.categoryName = categoryName;
        this.categoryDescription = categoryDescription;
    }
}
