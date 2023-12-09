package bootcamp.bookdiscovery.exception.book;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class BookExceptionHandler {

        @ExceptionHandler
        public ResponseEntity<BookErrorResponse> handleException(BookNotFoundException exc){
            BookErrorResponse errorResponse = new BookErrorResponse(HttpStatus.NOT_FOUND.value(), exc.getMessage(), System.currentTimeMillis());
            return  new ResponseEntity<>(errorResponse,HttpStatus.NOT_FOUND);
        }
}
