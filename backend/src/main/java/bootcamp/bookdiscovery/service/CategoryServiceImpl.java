package bootcamp.bookdiscovery.service;

import bootcamp.bookdiscovery.entity.*;
import bootcamp.bookdiscovery.dto.BookDTO;
import bootcamp.bookdiscovery.dto.CategoryDTO;
import bootcamp.bookdiscovery.dto.TopicHeadingDTO;
import bootcamp.bookdiscovery.exception.category.CategoryNotFoundException;
import bootcamp.bookdiscovery.jparepository.CategoryJpa;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class CategoryServiceImpl implements CategoryService{

    @Autowired
    private CategoryJpa categoryJpa;

public void copyTopicHeadingProperties(TopicHeading topicHeading, TopicHeadingDTO topicHeadingDTO){
        BeanUtils.copyProperties(topicHeading,topicHeadingDTO,"categories");
    }

    private void copyCategoryProperties(Category category, CategoryDTO categoryDTO){
        BeanUtils.copyProperties(category,categoryDTO,"bookList","topicHeading","categoryDescription");
    }

    private void copyBookProperties(Book book, BookDTO bookDTO){
        BeanUtils.copyProperties(book, bookDTO, "bookReadingStatus", "authorList", "bookMarkReferences", "categoryList");
         

    }

    @Override
    public List<CategoryDTO> findAll() {

        List<CategoryDTO> categoryDTOList = new ArrayList<>();
        for(Category category: categoryJpa.findAll()){

            CategoryDTO categoryDTO = new CategoryDTO();
            TopicHeading topicHeading = category.getTopicHeading();
            TopicHeadingDTO topicHeadingDTO = new TopicHeadingDTO();
            copyTopicHeadingProperties(topicHeading,topicHeadingDTO);
            copyCategoryProperties(category,categoryDTO);
            categoryDTO.setTopicHeading(topicHeadingDTO);
            categoryDTOList.add(categoryDTO);


        }
        return categoryDTOList;

    }

    @Override
    public CategoryDTO findByCategoryId(int categoryId) {
        int userId=1;
        Category category = categoryJpa.findById(categoryId).orElseThrow(()-> new CategoryNotFoundException("Category id not found -- " +categoryId));
        CategoryDTO categoryDTO = new CategoryDTO();

        TopicHeading topicHeading=category.getTopicHeading();
        TopicHeadingDTO topicHeadingDTO=new TopicHeadingDTO();
        List<Book> bookList = category.getBookList();
        List<BookDTO> bookDTOList =new ArrayList<>();
        for(Book book: bookList){

            BookReadingStatus bookReadingStatus = book.getBookReadingStatusList().stream().filter(temp->temp.getUser().getUserId()==userId).collect(Collectors.toList()).get(0);
            BookMarkReferences bookMarkReferences = book.getBookMarkReferences().stream().filter(temp->temp.getUser().getUserId()==userId).collect(Collectors.toList()).get(0);


            BookDTO bookDTO =new BookDTO();
            copyBookProperties(book,bookDTO);
            bookDTO.setBookmark(bookMarkReferences.isBookmark());
            bookDTO.setBookReadingStatus(bookReadingStatus.getReadStatus());
            bookDTO.setCurrentPage(bookReadingStatus.getCurrentPage());
            bookDTO.setRating(4.0f);
            bookDTO.setNumberOfRatings(book.getBookMarkReferences().size());
            bookDTO.setCategoryName(category.getCategoryName());
            bookDTOList.add(bookDTO);

        }
        copyTopicHeadingProperties(topicHeading,topicHeadingDTO);
        copyCategoryProperties(category,categoryDTO);
        categoryDTO.setTopicHeading(topicHeadingDTO);
        categoryDTO.setBookList(bookDTOList);
        return categoryDTO;
    }

    @Override
    public CategoryDTO addCategory(CategoryDTO categoryDTO) {
        Category category = new Category();
        category.setCategoryName(categoryDTO.getCategoryName());
        category.setCategoryDescription(category.getCategoryDescription());

        category = categoryJpa.save(category);

        

        return categoryDTO;
    }
}
