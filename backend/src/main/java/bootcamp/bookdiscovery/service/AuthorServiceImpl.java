package bootcamp.bookdiscovery.service;

import bootcamp.bookdiscovery.entity.Author;
import bootcamp.bookdiscovery.entity.Book;
import bootcamp.bookdiscovery.exception.author.AuthorNotFoundException;
import bootcamp.bookdiscovery.jparepository.AuthorJpa;
import bootcamp.bookdiscovery.jparepository.BookMarkReferencesJpa;
import bootcamp.bookdiscovery.dto.AuthorDTO;
import bootcamp.bookdiscovery.dto.BookDTO;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AuthorServiceImpl implements AuthorService{

    @Autowired
    private AuthorJpa authorJpaRepository;

    @Autowired
    private BookMarkReferencesJpa bookMarkReferencesJpa;

    @Override
    public AuthorDTO findByAuthorId(int authorId) {
            Author author = authorJpaRepository.findById(authorId).orElseThrow(() -> new AuthorNotFoundException("Author id not found :- " + authorId));
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

    public Author createAuthor(AuthorDTO authorDTO) {
        Author author = new Author();
        // Map DTO to entity
        BeanUtils.copyProperties(authorDTO, author);
        return authorJpaRepository.save(author);
    }

    public Author updateAuthor(int authorId, AuthorDTO authorDTO) {
        Author existingAuthor = authorJpaRepository.findById(authorId)
                .orElseThrow(() -> new RuntimeException("Author not found"));
        BeanUtils.copyProperties(authorDTO, existingAuthor);
        return authorJpaRepository.save(existingAuthor);
    }
}
