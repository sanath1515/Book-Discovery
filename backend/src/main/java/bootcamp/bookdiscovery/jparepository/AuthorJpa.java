package bootcamp.bookdiscovery.jparepository;

import bootcamp.bookdiscovery.entity.Author;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AuthorJpa extends JpaRepository<Author,Integer>
{

}
