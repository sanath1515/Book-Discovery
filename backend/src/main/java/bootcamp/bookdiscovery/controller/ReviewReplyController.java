package bootcamp.bookdiscovery.controller;


import bootcamp.bookdiscovery.service.ReviewReplyServiceImpl;
import bootcamp.bookdiscovery.entity.ReviewReplies;
import bootcamp.bookdiscovery.service.ReviewReplyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ReviewReplyController {

    @Autowired
    private ReviewReplyService reviewReplyService;

    @Autowired
    private ReviewReplyServiceImpl reviewReplyServiceImpl;
    @PutMapping("book/{reviewId}/ReviewReply")
    public void updateReviewReply(@PathVariable("reviewId") Integer reviewId, @RequestBody ReviewReplies reviewReplies)
    {
        reviewReplyService.updateReviewReplies(reviewId,reviewReplies);

    }
}
