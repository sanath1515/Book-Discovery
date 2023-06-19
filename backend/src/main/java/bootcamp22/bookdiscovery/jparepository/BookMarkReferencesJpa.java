package bootcamp22.bookdiscovery.jparepository;

import bootcamp22.bookdiscovery.entity.Book;
import bootcamp22.bookdiscovery.entity.BookMarkReferences;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookMarkReferencesJpa extends JpaRepository<BookMarkReferences,Integer>
{
    BookMarkReferences findByBook(Book book);
}
