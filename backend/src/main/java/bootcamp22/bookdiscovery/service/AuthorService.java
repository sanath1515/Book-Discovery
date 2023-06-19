package bootcamp22.bookdiscovery.service;

import bootcamp22.bookdiscovery.dto.AuthorDTO;
import bootcamp22.bookdiscovery.entity.Author;

public interface AuthorService {

    AuthorDTO findByAuthorId(int authorId);

}
