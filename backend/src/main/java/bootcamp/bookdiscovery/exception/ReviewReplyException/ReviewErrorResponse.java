package bootcamp.bookdiscovery.exception.ReviewReplyException;

import lombok.*;


@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class ReviewErrorResponse {

    private int status;
    private String message;
    private long timeStamp;
}

