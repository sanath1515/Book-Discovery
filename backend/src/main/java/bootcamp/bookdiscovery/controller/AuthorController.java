package bootcamp.bookdiscovery.controller;

import bootcamp.bookdiscovery.dto.AuthorDTO;
import bootcamp.bookdiscovery.entity.Author;
import bootcamp.bookdiscovery.service.AuthorService;
import bootcamp.bookdiscovery.service.AuthorServiceImpl;
import org.springframework.beans.BeanUtils;
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


    @PostMapping("/authors")
    public AuthorDTO createAuthor(@RequestBody AuthorDTO authorDTO) {
        Author created = authorService.createAuthor(authorDTO);
        // Convert to DTO
        AuthorDTO responseDTO = new AuthorDTO();
        BeanUtils.copyProperties(created, responseDTO);
        return responseDTO;
    }

    @PutMapping("/authors/{authorId}")
    public AuthorDTO updateAuthor(@PathVariable int authorId, @RequestBody AuthorDTO authorDTO) {
        Author updated = authorService.updateAuthor(authorId, authorDTO);
        // Convert to DTO
        AuthorDTO responseDTO = new AuthorDTO();
        BeanUtils.copyProperties(updated, responseDTO);
        return responseDTO;
    }


}
