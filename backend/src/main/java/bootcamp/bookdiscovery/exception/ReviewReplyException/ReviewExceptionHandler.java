package bootcamp.bookdiscovery.exception.ReviewReplyException;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
class ReviewExceptionHandler {

    @ExceptionHandler
    public ResponseEntity<ReviewErrorResponse> handleException(ReviewIdNotFoundException exc){
        ReviewErrorResponse errorResponse = new ReviewErrorResponse(HttpStatus.NOT_FOUND.value(), exc.getMessage(), System.currentTimeMillis());
        return  new ResponseEntity<>(errorResponse,HttpStatus.NOT_FOUND);
    }
}