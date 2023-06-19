package bootcamp22.bookdiscovery.jparepository;

import bootcamp22.bookdiscovery.entity.ReviewReplies;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReviewRepliesJpa extends JpaRepository<ReviewReplies,Integer> {
}
