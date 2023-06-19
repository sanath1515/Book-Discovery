package bootcamp22.bookdiscovery.controller;

import bootcamp22.bookdiscovery.dto.CategoryDTO;
import bootcamp22.bookdiscovery.entity.Category;
import bootcamp22.bookdiscovery.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/")
public class CategoryController {
    @Autowired
    private CategoryService categoryService;

    @GetMapping("/categories")
    public List<CategoryDTO> getCategories() {
        return categoryService.findAll();
    }

    @GetMapping("/categories/{categoryId}")
    public CategoryDTO getCategoryById(@PathVariable int categoryId) {
            return categoryService.findByCategoryId(categoryId);



    }
}
