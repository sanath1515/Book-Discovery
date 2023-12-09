package bootcamp.bookdiscovery.jparepository;

import bootcamp.bookdiscovery.entity.SearchHistory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SearchHistoryJpa extends JpaRepository<SearchHistory, Integer> {
}
