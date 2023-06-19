package bootcamp.bookdiscovery.dto;

import bootcamp.bookdiscovery.entity.Category;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TopicHeadingDTO {
    private int id;
    private String name;
}