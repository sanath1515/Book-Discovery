package bootcamp22.bookdiscovery.exception.category;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CategoryErrorResponse {

    private int status;
    private String message;
    private long timeStamp;
}
