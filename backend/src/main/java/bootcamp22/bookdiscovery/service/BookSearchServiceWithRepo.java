package bootcamp22.bookdiscovery.service;
import bootcamp22.bookdiscovery.entity.BookSearch;
import bootcamp22.bookdiscovery.exception.BookNotFoundException;
import bootcamp22.bookdiscovery.jparepository.SearchRepository;
import lombok.extern.slf4j.Slf4j;
import org.elasticsearch.common.unit.Fuzziness;
import org.elasticsearch.index.query.QueryBuilder;
import org.elasticsearch.index.query.QueryBuilders;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.elasticsearch.core.ElasticsearchOperations;
import org.springframework.data.elasticsearch.core.SearchHits;
import org.springframework.data.elasticsearch.core.mapping.IndexCoordinates;
import org.springframework.data.elasticsearch.core.query.NativeSearchQueryBuilder;
import org.springframework.data.elasticsearch.core.query.Query;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.List;

@Service
@Slf4j
public class BookSearchServiceWithRepo {
    @Autowired
    private ElasticsearchOperations elasticsearchOperations;

    @Autowired
    private SearchRepository searchRepository;
  
    @PostConstruct
    public void loadAll()
    {
        elasticsearchOperations.indexOps(BookSearch.class).refresh();
        searchRepository.deleteAll();
        searchRepository.saveAll(getData());
    }
    String des="Through a series of recent breakthroughs, deep learning has boosted the entire field of machine learning";
    private List<BookSearch> getData()
    {
        List<BookSearch> books=new ArrayList<>();

        books.add(new BookSearch(1,"Inorganic Chemistry","","",5,10,des,"J D Lee"));
        books.add(new BookSearch(2,"Physics",des,"",5,10,"","Carlos Genez"));
        books.add(new BookSearch(3,"crystal Chemistry",des,"",5,10,"","Keerthene"));
        books.add(new BookSearch(4,"Biology",des,"",5,10,"","Carlos"));
        books.add(new BookSearch(5,"Physics",des,"",5,10,"","J D Lee"));
        books.add(new BookSearch(6,"Chemistry",des,"",5,10,"","Carlos"));
        books.add(new BookSearch(7,"Inorganic Chemistry",des,"",5,10,"","Keerthene"));
        return books;
    }
    public List<BookSearch> getAllBooks(String title) {
        try {
            QueryBuilder queryBuilder =
                    QueryBuilders
                            .multiMatchQuery(title
                                    , "title", "author_name")
                            .fuzziness(Fuzziness.AUTO);

            Query searchQuery = new NativeSearchQueryBuilder()
                    .withFilter(queryBuilder)
                    .build();

            SearchHits<BookSearch> bookSearchSearchHits =
                    elasticsearchOperations
                            .search(searchQuery, BookSearch.class,
                                    IndexCoordinates.of("bookdiscoveryapp"));

            List<BookSearch> searchMatches = new ArrayList<>();
            bookSearchSearchHits.forEach(searchHit ->
                searchMatches.add(searchHit.getContent())
            );
            if(searchMatches.isEmpty())
            {
                throw new BookNotFoundException("book not found "+title);
            }
            return searchMatches;
        } catch (Exception exe) {
            throw new BookNotFoundException("book not found");
        }
    }
}


