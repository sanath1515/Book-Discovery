package bootcamp22.bookdiscovery.config;
import bootcamp.bookdiscovery.entity.BookSearch;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;


public interface ElasticConfig extends ElasticsearchRepository<BookSearch,String>  {
   


}






}