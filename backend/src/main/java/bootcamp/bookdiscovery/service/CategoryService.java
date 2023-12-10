package bootcamp.bookdiscovery.service;

import bootcamp.bookdiscovery.dto.CategoryDTO;

import java.util.List;


public interface CategoryService {
    List<CategoryDTO> findAll();

    CategoryDTO findByCategoryId(int categoryId);

    CategoryDTO addCategory(CategoryDTO categoryDTO);
}
