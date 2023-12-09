package bootcamp.bookdiscovery.exception.book;


import lombok.NoArgsConstructor;

@NoArgsConstructor
public class BookNotFoundException extends RuntimeException{

    public BookNotFoundException(String message) {
        super(message);
    }

}
