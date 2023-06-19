package bootcamp22.bookdiscovery;

import bootcamp22.bookdiscovery.controller.AuthorController;
import bootcamp22.bookdiscovery.entity.Author;
import bootcamp22.bookdiscovery.jparepository.AuthorJpa;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.ArrayList;

import static org.mockito.Mockito.when;

@SpringBootTest
class AuthorByIdTest{

    @MockBean
    private AuthorJpa authorJpa;


    @Autowired
    private AuthorController authorController;

    @Test
    void testFindByAuthorIdController(){

        Author author =new Author(1,"test1", "test2", "test3", new ArrayList<>());

        when(authorJpa.findById(1)).thenReturn(java.util.Optional.of(author));
        assertEquals(1,authorController.getAuthorById(1).getAuthorId());
    }
}