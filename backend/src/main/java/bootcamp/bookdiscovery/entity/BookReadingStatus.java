package bootcamp.bookdiscovery.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;

@Data
@Entity
@Table(name="status")
@AllArgsConstructor
@NoArgsConstructor
public class BookReadingStatus
{
    @Id
    @Column(name="id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int Id;

    @Column(name="readstatus")
    private String readStatus;

    @Column(name="currentpage")
    private int currentPage;

    @ToString.Exclude
    @ManyToOne(cascade = {CascadeType.DETACH,CascadeType.MERGE,CascadeType.PERSIST,CascadeType.REFRESH})
    @JoinColumn(name="book_id")
    private Book bookval;

    @ToString.Exclude
    @ManyToOne(cascade = {CascadeType.DETACH,CascadeType.MERGE,CascadeType.PERSIST,CascadeType.REFRESH})
    @JoinColumn(name="user_id")
    private User user;
}
