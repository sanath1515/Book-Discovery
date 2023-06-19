package bootcamp22.bookdiscovery.controller;
import bootcamp22.bookdiscovery.dto.AuthorDTO;
import bootcamp22.bookdiscovery.entity.Author;
import bootcamp22.bookdiscovery.exception.author.AuthorNotFoundException;
import bootcamp22.bookdiscovery.service.AuthorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/authors")
public class AuthorController {

    @Autowired
    private AuthorService authorService;

    @GetMapping("/{authorId}")
    public AuthorDTO getAuthorById(@PathVariable int authorId) {
        return authorService.findByAuthorId(authorId);





    }
}
