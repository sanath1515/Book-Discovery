package bootcamp22.bookdiscovery.jparepository;

import bootcamp22.bookdiscovery.entity.TopicHeading;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TopicHeadingJpa extends JpaRepository<TopicHeading,Integer>
{

}
