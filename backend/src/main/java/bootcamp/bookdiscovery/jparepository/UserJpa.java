package bootcamp.bookdiscovery.jparepository;

import bootcamp.bookdiscovery.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserJpa extends JpaRepository<User, Integer> {
}
