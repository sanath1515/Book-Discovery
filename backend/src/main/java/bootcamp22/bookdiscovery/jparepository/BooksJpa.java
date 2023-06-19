package bootcamp22.bookdiscovery.jparepository;

import bootcamp22.bookdiscovery.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BooksJpa extends JpaRepository<Book,Integer>
{

}
