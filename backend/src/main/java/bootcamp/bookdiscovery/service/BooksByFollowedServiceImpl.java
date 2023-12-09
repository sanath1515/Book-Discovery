package bootcamp.bookdiscovery.service;

import bootcamp.bookdiscovery.mockentities.BooksByFollowed;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BooksByFollowedServiceImpl implements BooksByFollowedService{

    @Override
    public List<BooksByFollowed> findAll() {
        List<BooksByFollowed> data = new ArrayList<>();
        String[][] mockData = {{"1","Organic Chemistry","toughest part of chemistry", "https://cdn.zeplin.io/5f03041d8c8fc11335546618/assets/50247E5B-3788-492D-956F-63172A8FDBF8.png", "Chemistry","3.9","100","false","reading","12","200"},
                {"2","Inorganic Chemistry","somewhat easy part of chemistry", "https://cdn.zeplin.io/5f03041d8c8fc11335546618/assets/80BD6795-E0BE-4765-9C23-F737D4F6AD7B.png", "Chemistry","3.1","120","true","finished","300","300"},
                {"3","Statistics","Part of curriculum", "https://cdn.zeplin.io/5f03041d8c8fc11335546618/assets/50247E5B-3788-492D-956F-63172A8FDBF8.png", "Mathematics","4.7","10","true","finished","300","300"},
                {"4","Friction","Part of curriculum", "https://cdn.zeplin.io/5f03041d8c8fc11335546618/assets/40955D7D-20CD-4EF3-A752-728C3D5810E6.png", "Physics","4.1","1100","false","reading","250","280"}

        };
        for(String[] currentData : mockData ){
            data.add(new BooksByFollowed(Integer.parseInt(currentData[0]), currentData[1], currentData[2], currentData[3], currentData[4],
                    Float.parseFloat(currentData[5]),Integer.parseInt(currentData[6]),Boolean.parseBoolean(currentData[7]),currentData[8],Integer.parseInt(currentData[9]), Integer.parseInt(currentData[10])));
        }
        return data;
    }
}
