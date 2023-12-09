
package bootcamp.bookdiscovery.exception.author;


import lombok.NoArgsConstructor;

@NoArgsConstructor
public class AuthorNotFoundException extends RuntimeException{
    public AuthorNotFoundException(String message) {
        super(message);
    }
}
