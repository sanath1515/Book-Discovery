package bootcamp.bookdiscovery.jparepository;

import bootcamp.bookdiscovery.entity.Book;
import bootcamp.bookdiscovery.entity.BookMarkReferences;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookMarkReferencesJpa extends JpaRepository<BookMarkReferences,Integer>
{
    BookMarkReferences findByBook(Book book);
}
