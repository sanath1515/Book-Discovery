package bootcamp.bookdiscovery.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;

@Data
@Entity
@Table(name="reviewReplies")
@NoArgsConstructor
@AllArgsConstructor
public class ReviewReplies
{
    @Id
    @Column(name="id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;


    @Column(name="reply_text")
    private String replyText;


    @ToString.Exclude
    @ManyToOne(cascade = {CascadeType.DETACH,CascadeType.MERGE,CascadeType.PERSIST,CascadeType.REFRESH})
    @JoinColumn(name="reviewed_by_id")
    private User users;


    @ToString.Exclude
    @ManyToOne(cascade = {CascadeType.DETACH,CascadeType.MERGE,CascadeType.PERSIST,CascadeType.REFRESH})
    @JoinColumn(name="user_review_id")
    private BookMarkReferences bookMarkReferences;


    public ReviewReplies(String replyText, User users, BookMarkReferences bookMarkReferences) {
        this.replyText = replyText;
        this.users = users;
        this.bookMarkReferences = bookMarkReferences;
    }

    public ReviewReplies(String replyText) {
        this.replyText=replyText;
    }
}
