package bootcamp.bookdiscovery.service;

import bootcamp.bookdiscovery.mockentities.BatchMates;

import java.util.List;

public interface BookBatchmatesService
{
    List<BatchMateBook> getBooksReadByBatchmates();
}
