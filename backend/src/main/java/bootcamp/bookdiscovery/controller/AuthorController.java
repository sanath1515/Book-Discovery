package bootcamp.bookdiscovery.controller;
import bootcamp.bookdiscovery.dto.AuthorDTO;
import bootcamp.bookdiscovery.service.AuthorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/authors")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class AuthorController {

    @Autowired
    private AuthorService authorService;

    @GetMapping("/{authorId}")
    public AuthorDTO getAuthorById(@PathVariable int authorId) {
        return authorService.findByAuthorId(authorId);
    }

}
