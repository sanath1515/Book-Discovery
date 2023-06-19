package bootcamp22.bookdiscovery.exception;


import lombok.*;


@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class BookErrorResponse {

        private int status;
        private String message;
        private long timeStamp;
    }
