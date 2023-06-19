package bootcamp.bookdiscovery.jparepository;

import bootcamp.bookdiscovery.entity.Book;
import bootcamp.bookdiscovery.entity.BookReadingStatus;
import bootcamp.bookdiscovery.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface BookReadingStatusJpa extends JpaRepository<BookReadingStatus,Integer>
{
    List<BookReadingStatus> findAllByUser(Optional<User> theUser);
    BookReadingStatus findByBookval(Book book);
}
