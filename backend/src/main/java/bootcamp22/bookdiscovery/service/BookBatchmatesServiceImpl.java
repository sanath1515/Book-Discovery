package bootcamp.bookdiscovery.service;

import bootcamp.bookdiscovery.mockentities.BatchMates;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BookBatchmatesServiceImpl implements BookBatchmatesService
{
    String[][] books= {
            {"1", "Crystal chemistry", "Carlos Gonzalez", "5", "1200", "https//cdn.zeplin.io/5f03041d8c8fc11335546618/assets/E3EEB4FA-4DF1-491D-8A51-DC1C1921FB60.png","physics",},
            {"2", "Basic Physics", "Carlos Gonzalez", "5", "1200", "https//cdn.zeplin.io/5f03041d8c8fc11335546618/assets/BFB91888-5030-4E35-878F-68EC357D95CE.png","chemistry",},
            {"3", "Biology", "Carlos Gonzalez", "5", "1200", "https//cdn.zeplin.io/5f03041d8c8fc11335546618/assets/4788B451-0673-497A-A16D-D8459134BADE.png","physics",},
            {"4", "Inorganic chemistry", "J D Lee", "5", "1200", "https//cdn.zeplin.io/5f03041d8c8fc11335546618/assets/E9028AA6-7EF2-4637-AA34-D2414E5F70B7.png","chemistry"},
        };

    @Override
    public List<BatchMateBook> getBooksReadByBatchmates() {

        List<BatchMateBook> batchMatesList = new ArrayList<>();

        for(String[] book:books)
        {
            BatchMateBook temp = new BatchMateBook(Integer.parseInt(book[0]),book[1],book[2],Integer.parseInt(book[3]),Integer.parseInt(book[4]),book[5],book[6]);
            batchMatesList.add(temp);
        }
        return batchMatesList;
    }


}
