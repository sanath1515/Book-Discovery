package bootcamp.bookdiscovery.service;

import bootcamp.bookdiscovery.dto.RecommendationDTO;
import bootcamp.bookdiscovery.entity.Book;

import java.util.List;

public interface RecommendationService
{
    List<RecommendationDTO> getRecommendations();
}
