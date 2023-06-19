package bootcamp22.bookdiscovery.service;

import bootcamp22.bookdiscovery.entity.BookMarkReferences;
import bootcamp22.bookdiscovery.entity.ReviewReplies;
import bootcamp22.bookdiscovery.exception.ReviewReplyException.ReviewIdNotFoundException;
import bootcamp22.bookdiscovery.jparepository.BookMarkReferencesJpa;
import bootcamp22.bookdiscovery.jparepository.ReviewRepliesJpa;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ReviewReplyServiceImpl implements ReviewReplyService{
    @Autowired
    private BookMarkReferencesJpa bookMarkReferencesJpa;
    @Autowired
    private ReviewRepliesJpa reviewRepliesJpa;


    @Override
    public void updateReviewReplies(int review_id, ReviewReplies reviewReplies) {
        Optional<BookMarkReferences> result= bookMarkReferencesJpa.findById(review_id);

        if(result.get()!=null)
        {

            BookMarkReferences review= result.get();
            ReviewReplies tempreviewReplies1=new ReviewReplies(reviewReplies.getReplyText(),review.getUser(),review);
            review.add(tempreviewReplies1);
            bookMarkReferencesJpa.save(review);
        }
        else
        {
            throw new ReviewIdNotFoundException("id not found "+review_id);
        }

    }


}