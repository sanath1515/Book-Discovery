package bootcamp.bookdiscovery.service;

import bootcamp.bookdiscovery.dto.AuthorDTO;
import bootcamp.bookdiscovery.entity.Author;

public interface AuthorService {

    AuthorDTO findByAuthorId(int authorId);


    Author createAuthor(AuthorDTO authorDTO);

    Author updateAuthor(int authorId, AuthorDTO authorDTO);
}
