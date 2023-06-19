package bootcamp22.bookdiscovery.jparepository;

import bootcamp22.bookdiscovery.entity.SearchHistory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SearchHistoryJpa extends JpaRepository<SearchHistory, Integer> {
}
