package bootcamp.bookdiscovery;


import bootcamp.bookdiscovery.controller.CategoryController;
import bootcamp.bookdiscovery.dto.CategoryDTO;
import bootcamp.bookdiscovery.entity.*;
import bootcamp.bookdiscovery.exception.category.CategoryErrorResponse;
import bootcamp.bookdiscovery.exception.category.CategoryNotFoundException;
import bootcamp.bookdiscovery.jparepository.CategoryJpa;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

@SpringBootTest
class CategoryTest {

    @MockBean
    private CategoryJpa categoryJpa;

    @Autowired
    private CategoryController categoryController;

    @Test
    void testFindAllCategory(){
        final Category noArgsCategory= new Category();
        noArgsCategory.setCategoryDescription("test2");
         final Category allArgsCategory = new Category(1, "test1", null);


        TopicHeading topicHeading = new TopicHeading(1, "topicHeading", null);
        CategoryDTO categoryDTO = new CategoryDTO(1,"test1","test2",null, new ArrayList<>());
        Category category = new Category(1,"test1","test2",topicHeading, new ArrayList<>());

        List<Category> categoryList = new ArrayList<>();
        categoryList.add(category);
        when(categoryJpa.findAll()).thenReturn(categoryList);
        assertEquals(1,categoryController.getCategories().size());
        assertEquals(categoryDTO.getCategoryDescription(),noArgsCategory.getCategoryDescription());
        assertEquals(allArgsCategory.getCategoryName(),categoryController.getCategories().get(0).getCategoryName());
    }

    @Test
    void testFindByCategoryId(){


        User user = new User(1,"Vansh","Jain","vansh.jain@zemosolabs.com",21,"male",101,null,null,null,null);
        List<BookMarkReferences> bookMarkReferencesList = new ArrayList<>();
        BookMarkReferences bookMarkReferences = new BookMarkReferences(1,3,"right",false, null, user, null);
        bookMarkReferencesList.add(bookMarkReferences);
        BookReadingStatus bookReadingStatus = new BookReadingStatus(1,"reading",120,null,user);
        List<BookReadingStatus> bookReadingStatusList = new ArrayList<>();
        bookReadingStatusList.add(bookReadingStatus);

        List<Book> bookList = new ArrayList<>();
        Book book = new Book(1, "test1", "isbn", "image",null, "language", 123 , bookReadingStatusList, null, bookMarkReferencesList,null);
        bookList.add(book);

        TopicHeading topicHeading = new TopicHeading(1, "topicHeading", null);
        Category category = new Category(1,"test1","test2",topicHeading, bookList);

        when(categoryJpa.findById(1)).thenReturn(java.util.Optional.of(category));
        assertEquals(1,categoryController.getCategoryById(1).getId());

        assertNull(categoryController.getCategoryById(1).getCategoryDescription());
        assertEquals(topicHeading.getId(),categoryController.getCategoryById(1).getTopicHeading().getId());
        assertEquals(bookList.get(0).getBookId(),categoryController.getCategoryById(1).getBookList().get(0).getBookId());
    }
    @Test
    void testFindByInvalidCategoryId(){
        Category category = new Category(1,"test1", "test2",null,new ArrayList<>());

        when(categoryJpa.findById(1)).thenReturn(java.util.Optional.of(category));
        assertThrows(CategoryNotFoundException.class,()->{
            categoryController.getCategoryById(2);
        });
    }
    @Test
    void testCategoryException(){
        CategoryErrorResponse allArgsCategoryErrorResponse = new CategoryErrorResponse(404,"Failed",123);
        CategoryErrorResponse noArgsCategoryErrorResponse = new CategoryErrorResponse();
        noArgsCategoryErrorResponse.setTimeStamp(3465);
        assertEquals(404,allArgsCategoryErrorResponse.getStatus());
        assertEquals(3465,noArgsCategoryErrorResponse.getTimeStamp());
        assertEquals("Failed",allArgsCategoryErrorResponse.getMessage());


    }



}