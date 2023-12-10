package bootcamp.bookdiscovery.controller;

import bootcamp.bookdiscovery.service.CategoryService;
import bootcamp.bookdiscovery.dto.CategoryDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/")
@CrossOrigin(origins = "*", allowedHeaders = "*")
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

    @PostMapping("/categories")
    public CategoryDTO getCategoryById(@RequestBody CategoryDTO categoryDTO) {
        return categoryService.addCategory(categoryDTO);
    }
}
