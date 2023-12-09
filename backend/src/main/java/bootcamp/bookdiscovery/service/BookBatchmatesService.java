package bootcamp.bookdiscovery.service;

import bootcamp.bookdiscovery.mockentities.BatchMateBook;

import java.util.List;

public interface BookBatchmatesService
{
    List<BatchMateBook> getBooksReadByBatchmates();
}
