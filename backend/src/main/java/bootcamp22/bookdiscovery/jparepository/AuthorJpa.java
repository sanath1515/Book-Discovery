package bootcamp22.bookdiscovery.jparepository;

import bootcamp22.bookdiscovery.entity.Author;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AuthorJpa extends JpaRepository<Author,Integer>
{

}
