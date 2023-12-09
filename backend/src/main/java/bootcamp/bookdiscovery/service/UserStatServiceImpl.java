package bootcamp.bookdiscovery.service;

import bootcamp.bookdiscovery.dto.UserStatDto;
import bootcamp.bookdiscovery.entity.BookMarkReferences;
import bootcamp.bookdiscovery.entity.BookReadingStatus;
import bootcamp.bookdiscovery.exception.user.UserNotFoundException;
import bootcamp.bookdiscovery.jparepository.BookMarkReferencesJpa;
import bootcamp.bookdiscovery.jparepository.BookReadingStatusJpa;
import bootcamp.bookdiscovery.jparepository.UserJpa;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserStatServiceImpl implements UserStatService
{

    @Autowired
    BookMarkReferencesJpa bookMarkReferencesJpa;

    @Autowired
    UserJpa userJpa;

    @Autowired
    BookReadingStatusJpa bookReadingStatusJpa;

    int userId=1;


    @Override
    public int getBookmarks() {
        int count=0;
        try {
//            List<BookMarkReferences> theBookmarks = bookMarkReferencesJpa.findAllByUser(userJpa.findById(userId));
//            count = (int) theBookmarks.stream().filter(BookMarkReferences::isBookmark).count();
            return count;
        }
        catch (Exception exc)
        {
            throw new UserNotFoundException("user not found" + exc);
        }
    }

    @Override
    public int getCurrentlyReading() {
        int count;
        try {
            List<BookReadingStatus> theBooks = bookReadingStatusJpa.findAllByUser(userJpa.findById(userId));
            count = (int) theBooks.stream().filter(temp -> temp.getReadStatus().equals("reading")).count();
            return count;
        }
        catch (Exception exc)
        {
            throw new UserNotFoundException("user not found" + exc);
        }

    }

    @Override
    public int getFinishedReading() {
        int count;
        try {
            List<BookReadingStatus> theBooks = bookReadingStatusJpa.findAllByUser(userJpa.findById(userId));
            count = (int) theBooks.stream().filter(temp -> temp.getReadStatus().equals("finished")).count();
            return count;
        }
        catch (Exception exc)
        {
            throw new UserNotFoundException("user not found" + exc);
        }
    }

    @Override
    public int getTargetPerYear() {
        return 100;
    }

    @Override
    public UserStatDto getUserStat() {
        UserStatDto theUserStat = new UserStatDto();
        theUserStat.setBookmarks(getBookmarks());
        theUserStat.setCurrentlyReading(getCurrentlyReading());
        theUserStat.setBooksFinished(getFinishedReading());
        theUserStat.setTargetPerYear(getTargetPerYear());

        return theUserStat;
    }
}
