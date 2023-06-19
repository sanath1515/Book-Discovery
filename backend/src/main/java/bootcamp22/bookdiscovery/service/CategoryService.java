package bootcamp22.bookdiscovery.service;

import bootcamp22.bookdiscovery.dto.CategoryDTO;
import bootcamp22.bookdiscovery.entity.Category;

import java.util.List;


public interface CategoryService {
    List<CategoryDTO> findAll();

    CategoryDTO findByCategoryId(int categoryId);
}
