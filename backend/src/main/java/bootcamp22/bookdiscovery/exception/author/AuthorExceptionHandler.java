
package bootcamp22.bookdiscovery.exception.author;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class AuthorExceptionHandler {
    @ExceptionHandler
    public ResponseEntity<AuthorErrorResponse> handleException(AuthorNotFoundException exc){
        AuthorErrorResponse errorResponse = new AuthorErrorResponse(HttpStatus.NOT_FOUND.value(), exc.getMessage(), System.currentTimeMillis());
        return  new ResponseEntity<>(errorResponse,HttpStatus.NOT_FOUND);
    }





}
