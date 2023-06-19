package bootcamp22.bookdiscovery.exception.ReviewReplyException;

import lombok.NoArgsConstructor;

@NoArgsConstructor
public
class ReviewIdNotFoundException extends RuntimeException{

    public ReviewIdNotFoundException(String message) {
        super(message);
    }

}
