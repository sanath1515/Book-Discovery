package bootcamp.bookdiscovery.service;

import bootcamp.bookdiscovery.dto.RecommendationDTO;

import java.util.List;

public interface RecommendationService
{
    List<RecommendationDTO> getRecommendations();
}
