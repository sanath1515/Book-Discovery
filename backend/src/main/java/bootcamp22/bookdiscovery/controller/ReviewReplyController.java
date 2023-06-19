package bootcamp22.bookdiscovery.controller;


import bootcamp22.bookdiscovery.entity.ReviewReplies;
import bootcamp22.bookdiscovery.service.ReviewReplyService;
import bootcamp22.bookdiscovery.service.ReviewReplyServiceImpl;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/")
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
