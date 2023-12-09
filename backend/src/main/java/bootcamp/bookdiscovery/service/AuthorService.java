package bootcamp.bookdiscovery.service;

import bootcamp.bookdiscovery.dto.AuthorDTO;

public interface AuthorService {

    AuthorDTO findByAuthorId(int authorId);

}
