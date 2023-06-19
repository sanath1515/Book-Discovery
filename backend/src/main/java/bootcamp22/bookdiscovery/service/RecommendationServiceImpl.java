package bootcamp.bookdiscovery.service;

import bootcamp.bookdiscovery.dto.RecommendationDTO;
import bootcamp.bookdiscovery.entity.Book;
import bootcamp.bookdiscovery.entity.BookMarkReferences;
import bootcamp.bookdiscovery.entity.BookSearch;
import bootcamp.bookdiscovery.entity.SearchHistory;
import bootcamp.bookdiscovery.jparepository.BookMarkReferencesJpa;
import bootcamp.bookdiscovery.jparepository.BooksJpa;
import bootcamp.bookdiscovery.jparepository.SearchHistoryJpa;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

class Compare3 implements Comparator<RecommendationDTO>
{
    public int compare(RecommendationDTO a,RecommendationDTO b)
    {
        return (int)(b.getRating()-a.getRating());
    }
}

@Service
public class RecommendationServiceImpl implements RecommendationService
{
    @Autowired
    SearchHistoryJpa searchHistoryJpa;

    @Autowired
    BooksJpa booksJpa;
    @Autowired
    BookMarkReferencesJpa bookMarkReferencesJpa;

    @Autowired
    BookSearchServiceWithRepo bookSearchServiceWithRepo;

    @Override
    public List<RecommendationDTO> getRecommendations()
    {
        List<SearchHistory> searchHistoryList =searchHistoryJpa.findAll();
        HashSet<Book> booksHS = new HashSet<>();

        int userId=1;

        for(SearchHistory tempSearchHistory: searchHistoryList)
        {
            List<BookSearch> bookSearchList = bookSearchServiceWithRepo.getAllBooks(tempSearchHistory.getSearchText());

            for(BookSearch temp: bookSearchList)
            {
                Optional<Book> result = booksJpa.findById(temp.getBookId());

                Book tempBook = result.isPresent()?result.get():null;

                if(tempBook!=null && !booksHS.contains(tempBook))
                {
                    booksHS.add(tempBook);
                }

            }
        }

        List<Book> booksList = new ArrayList<>(booksHS);

        List<RecommendationDTO> recommendationDTOList = new ArrayList<>();
        for(Book item : booksList)
        {
            RecommendationDTO tempRecommendationDTO = new RecommendationDTO();
            tempRecommendationDTO.setId(item.getBookId());
            tempRecommendationDTO.setBookImage(item.getImage());
            tempRecommendationDTO.setTitle(item.getLanguage());
            tempRecommendationDTO.setAuthor(item.getAuthorList().get(0).getName());
            List<BookMarkReferences> recomBookMarkReferences = item.getBookMarkReferences();

                List<BookMarkReferences> bookmarkRecom = recomBookMarkReferences.stream().filter(ref -> ref.getUser().getUserId() == userId).collect(Collectors.toList());

                if(!bookmarkRecom.isEmpty())
                {
                    tempRecommendationDTO.setBookmark(bookmarkRecom.get(0).isBookmark());
                }

                int ratingRecom = recomBookMarkReferences.stream().map(BookMarkReferences::getRating).reduce(0, (x, y) -> x + y);
                if(!recomBookMarkReferences.isEmpty())
                    tempRecommendationDTO.setRating((ratingRecom / recomBookMarkReferences.size()));
            recommendationDTOList.add(tempRecommendationDTO);
        }

        Collections.sort(recommendationDTOList,new Compare3());
        return recommendationDTOList;
    }
}
