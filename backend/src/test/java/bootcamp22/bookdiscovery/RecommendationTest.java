gpackage bootcamp.bookdiscovery;

import bootcamp.bookdiscovery.controller.RecommendationController;
import bootcamp.bookdiscovery.service.RecommendationServiceImpl;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
public class RecommendationTest {

    @Autowired
    private RecommendationController recommendationController;

    @Autowired
    private RecommendationServiceImpl recommendationService;


    @Test
    void controllerTest()
    {
        recommendationController.getRecommendations();
        assertEquals(0, recommendationController.getRecommendations().size());
    }



}