package bootcamp.bookdiscovery.exception.category;

import lombok.NoArgsConstructor;

@NoArgsConstructor
public class CategoryNotFoundException extends RuntimeException{
    public CategoryNotFoundException(String message) {
        super(message);
    }
}
