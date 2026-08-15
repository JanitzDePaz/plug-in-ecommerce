package com.plugin.server.repository;

import com.plugin.server.dto.ProductCardDTO;

import com.plugin.server.model.Product;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {

    // SQL Query for shop cards
    @Query("SELECT new com.plugin.server.dto.ProductCardDTO(" +
            "p.id, p.name, p.slug, p.price, p.mainImage, " +
            "p.category, p.active, p.discount) " +
            "FROM Product p")
    List<ProductCardDTO> allProductCards();

    Product findBySlug(String slug);
   
}