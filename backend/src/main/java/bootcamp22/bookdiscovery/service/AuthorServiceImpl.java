package bootcamp22.bookdiscovery.service;

import bootcamp22.bookdiscovery.dto.AuthorDTO;
import bootcamp22.bookdiscovery.dto.BookDTO;
import bootcamp22.bookdiscovery.entity.Author;
import bootcamp22.bookdiscovery.entity.Book;
import bootcamp22.bookdiscovery.exception.author.AuthorNotFoundException;
import bootcamp22.bookdiscovery.jparepository.AuthorJpa;
import bootcamp22.bookdiscovery.jparepository.BookMarkReferencesJpa;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AuthorServiceImpl implements AuthorService{

    @Autowired
    private AuthorJpa authorJpa;

    @Autowired
    private BookMarkReferencesJpa bookMarkReferencesJpa;

    @Override
    public AuthorDTO findByAuthorId(int authorId) {
            Author author = authorJpa.findById(authorId).orElseThrow(() -> new AuthorNotFoundException("Author id not found :- " + authorId));
            AuthorDTO authorDTO=new AuthorDTO();
            List<BookDTO> bookDTOList = new ArrayList<>();
            for(Book book: author.getBookList()){
                BookDTO bookDTO = new BookDTO();
                bookDTO.setRating(4);

                BeanUtils.copyProperties(book,bookDTO,"releaseDate","isbn");
                bookDTOList.add(bookDTO);
            }

            BeanUtils.copyProperties(author,authorDTO);
            authorDTO.setBookList(bookDTOList);
            return authorDTO;




    }
}
