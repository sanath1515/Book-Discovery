package bootcamp.bookdiscovery.controller;

import bootcamp.bookdiscovery.dto.UserStatDto;
import bootcamp.bookdiscovery.service.UserStatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class UserStatsController
{
    @Autowired
    UserStatService userStatService;

    @GetMapping("/userstats")
    public UserStatDto getUserStat()
    {
        return userStatService.getUserStat();
    }
}
