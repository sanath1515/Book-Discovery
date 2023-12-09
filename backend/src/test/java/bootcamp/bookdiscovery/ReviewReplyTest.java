package bootcamp.bookdiscovery;

import bootcamp.bookdiscovery.controller.ReviewReplyController;
import bootcamp.bookdiscovery.entity.BookMarkReferences;
import bootcamp.bookdiscovery.entity.ReviewReplies;
import bootcamp.bookdiscovery.jparepository.BookMarkReferencesJpa;
import bootcamp.bookdiscovery.jparepository.ReviewRepliesJpa;
import bootcamp.bookdiscovery.service.ReviewReplyService;
import org.junit.Before;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import static org.mockito.Mockito.*;


@SpringBootTest
public class ReviewReplyTest {

    @Autowired
    private ReviewReplyService reviewReplyService;


    @MockBean
    private ReviewRepliesJpa reviewRepliesJpa;

    @MockBean
    private BookMarkReferencesJpa bookMarkReferencesJpa;

    @Autowired
    private ReviewReplyController reviewReplyController;

    @Before
    public void setup()
    {
        BookMarkReferences bookMarkReferences = new BookMarkReferences(5,"good",false);
    }

    //controller testing

    @Test
    public void updateReviewReplyController()
    {
        int review_id=1;
        BookMarkReferences bookMarkReferences=new BookMarkReferences(1,"hello",false);
        ReviewReplies reviewReplies=new ReviewReplies("hello");
        when(bookMarkReferencesJpa.findById(review_id)).thenReturn(java.util.Optional.of(bookMarkReferences));
        reviewReplyService.updateReviewReplies(review_id,reviewReplies);
        verify(bookMarkReferencesJpa,times(1)).save(bookMarkReferences);
        reviewReplyController.updateReviewReply(review_id,reviewReplies);
    }




    @Test
    public void updateReviewReply()
    {
        int review_id=1;
        BookMarkReferences bookMarkReferences=new BookMarkReferences(1,"hello",false);
        ReviewReplies reviewReplies=new ReviewReplies("hello");
        when(bookMarkReferencesJpa.findById(review_id)).thenReturn(java.util.Optional.of(bookMarkReferences));
        reviewReplyService.updateReviewReplies(review_id,reviewReplies);
        verify(bookMarkReferencesJpa,times(1)).save(bookMarkReferences);
    }
    @Test
    public void updateReviewReplyWithException()
    {
        int review_id=1;
        try
        {
        BookMarkReferences bookMarkReferences=new BookMarkReferences(1,"hello",false);
        ReviewReplies reviewReplies=new ReviewReplies("hello");
        when(bookMarkReferencesJpa.findById(review_id)).thenReturn(java.util.Optional.of(bookMarkReferences));
        reviewReplyService.updateReviewReplies(2,reviewReplies);
        verify(bookMarkReferencesJpa,times(1)).save(bookMarkReferences);
    }
    catch(Exception exe)
    {
        System.out.println(exe);
    }
    }


}
