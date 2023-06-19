
package bootcamp22.bookdiscovery.exception.author;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AuthorErrorResponse {

    private int status;
    private String message;
    private long timeStamp;
}
