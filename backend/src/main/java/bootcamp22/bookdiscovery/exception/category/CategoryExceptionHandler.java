package bootcamp22.bookdiscovery.exception.category;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class CategoryExceptionHandler {
    @ExceptionHandler
    public ResponseEntity<CategoryErrorResponse> handleException(CategoryNotFoundException exc){
        CategoryErrorResponse errorResponse = new CategoryErrorResponse(HttpStatus.NOT_FOUND.value(), exc.getMessage(), System.currentTimeMillis());
        return  new ResponseEntity<>(errorResponse,HttpStatus.NOT_FOUND);
    }





}
