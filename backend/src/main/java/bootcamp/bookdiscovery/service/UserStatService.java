package bootcamp.bookdiscovery.service;

import bootcamp.bookdiscovery.dto.UserStatDto;

public interface UserStatService
{
    int getBookmarks();
    int getCurrentlyReading();
    int getFinishedReading();
    int getTargetPerYear();
    UserStatDto getUserStat();
}
