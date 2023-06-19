package bootcamp22.bookdiscovery.jparepository;
import bootcamp22.bookdiscovery.entity.BookSearch;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SearchRepository extends ElasticsearchRepository<BookSearch, String> {

}