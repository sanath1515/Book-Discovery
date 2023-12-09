package bootcamp.bookdiscovery.jparepository;

import bootcamp.bookdiscovery.entity.ReviewReplies;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReviewRepliesJpa extends JpaRepository<ReviewReplies,Integer> {
}
