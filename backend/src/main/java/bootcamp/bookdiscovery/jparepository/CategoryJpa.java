package bootcamp.bookdiscovery.jparepository;

import bootcamp.bookdiscovery.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryJpa extends JpaRepository<Category, Integer> {
}
