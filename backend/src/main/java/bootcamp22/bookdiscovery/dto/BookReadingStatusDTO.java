package bootcamp.bookdiscovery.dto;

import bootcamp.bookdiscovery.entity.Book;
import bootcamp.bookdiscovery.entity.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BookReadingStatusDTO {
    private int id;

    private String readStatus;

    private int currentPage;

    private Book bookVal;
    private User user;
}