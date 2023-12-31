package bootcamp.bookdiscovery.controller;

import bootcamp.bookdiscovery.dto.RecommendationDTO;
import bootcamp.bookdiscovery.service.RecommendationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class RecommendationController
{
    @Autowired
    RecommendationService recommendationService;

    @GetMapping("/recommendations")
    public List<RecommendationDTO> getRecommendations()
    {
        return recommendationService.getRecommendations();
    }
}
