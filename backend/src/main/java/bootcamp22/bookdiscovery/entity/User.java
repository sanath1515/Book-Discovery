package bootcamp22.bookdiscovery.entity;

import lombok.ToString;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.util.List;

@Entity
@Table(name = "user")
public class User {
    @Id
    @NotNull
    @NotEmpty(message = "Enter user name")
    @Column(name = "userId")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int user_id;

    @NotNull
    @Column(name = "first_name")
    private String firstName;

    @NotNull
    @Column(name = "last_name")
    private String lastName;

    @Email
    @Column(name = "email")
    private String email;

    @Column(name = "age")
    private int age;

    @Column(name = "gender")
    private String gender;


    @Column(name = "role_id")
    private int roleId;

    @ToString.Exclude
    @OneToMany(mappedBy = "user",cascade = {CascadeType.DETACH,CascadeType.MERGE,CascadeType.PERSIST,CascadeType.REFRESH})
    private List<BookReadingStatus> bookReadingStatusList;

    @ToString.Exclude
    @OneToMany(mappedBy = "user",cascade = {CascadeType.DETACH,CascadeType.MERGE,CascadeType.PERSIST,CascadeType.REFRESH})
    private List<BookMarkReferences> bookMarkReferences;

    @ToString.Exclude
    @OneToMany(mappedBy = "users",cascade = {CascadeType.DETACH,CascadeType.MERGE,CascadeType.PERSIST,CascadeType.REFRESH})
    private List<ReviewReplies>reviewReplies;

    @ToString.Exclude
    @OneToMany(mappedBy = "user_id",cascade = {CascadeType.DETACH,CascadeType.MERGE,CascadeType.PERSIST,CascadeType.REFRESH})
    private List<SearchHistory>historyList;

}
