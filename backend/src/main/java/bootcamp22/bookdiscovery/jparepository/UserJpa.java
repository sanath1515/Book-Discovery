package bootcamp22.bookdiscovery.jparepository;

import bootcamp22.bookdiscovery.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserJpa extends JpaRepository<User, Integer> {
}
