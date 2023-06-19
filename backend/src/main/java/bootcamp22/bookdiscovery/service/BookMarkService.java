package bootcamp22.bookdiscovery.service;

import bootcamp22.bookdiscovery.entity.BookMarkReferences;

public interface BookMarkService
{
    void updateBookmark(int bookId, BookMarkReferences bookMarkReferences);
    void updateBookReview(int bookId,BookMarkReferences bookMarkReferences);
    void updateBookRating(int bookId,BookMarkReferences bookMarkReferences);

}
