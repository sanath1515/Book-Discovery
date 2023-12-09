package bootcamp.bookdiscovery.entity;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.ToString;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Data
@Entity
@Table(name="BookMarkReferences")
@AllArgsConstructor
public class BookMarkReferences {


    @Id
    @Column(name="unique_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name="rating")
    private int rating;

    @Column(name="review")
    private String review;

    @Getter
    @Column(name="bookmark")
    private boolean bookmark;

    @ToString.Exclude
    @ManyToOne(cascade = {CascadeType.DETACH,CascadeType.MERGE,CascadeType.PERSIST,CascadeType.REFRESH})
    @JoinColumn(name="book_id")
    private Book book;

    @ToString.Exclude
    @ManyToOne(cascade = {CascadeType.DETACH,CascadeType.MERGE,CascadeType.PERSIST,CascadeType.REFRESH})
    @JoinColumn(name="user_id")
    private User user;

    @ToString.Exclude
    @OneToMany(mappedBy = "bookMarkReferences",cascade = {CascadeType.DETACH,CascadeType.MERGE,CascadeType.PERSIST,CascadeType.REFRESH})
    private List<ReviewReplies> reviewReplies;

    public BookMarkReferences()
    {

    }

    public BookMarkReferences(int rating, String review,boolean bookmark)
    {
        this.review=review;
        this.bookmark=bookmark;
        this.rating=rating;
    }

    public void add(ReviewReplies theReviewReplies)
    {
        if(reviewReplies==null)
        {
            reviewReplies=new ArrayList<>();
        }
        reviewReplies.add(theReviewReplies);
    }

}
