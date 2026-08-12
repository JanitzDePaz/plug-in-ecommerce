package com.plugin.server.controller;

import com.plugin.server.dto.ProductSummaryDTO;
import com.plugin.server.model.Product;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.plugin.server.repository.ProductRepository;

@RestController
@RequestMapping("/products")
@CrossOrigin(origins = { "http://localhost:5173", "https://plug-in-ecommerce.vercel.app" })

public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    @GetMapping
    public ResponseEntity<?> getAllProductsCardsDTO() {
        try {
            return ResponseEntity.ok(productRepository.allProductCards());
        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
            return ResponseEntity.status(500)
                    .body("El sistema ha tenido un problema buscando los productos, vuelva a intentarlo mas tarde");
        }

    }

    @GetMapping("/{slug}")
    public ResponseEntity<?> getProductsSummaryDTO(@PathVariable String slug) {
        try {
            Product p = productRepository.findBySlug(slug);

            if (p == null) {
                return ResponseEntity.status(404).body("No se ha encontrado el producto" + slug);
            }

            ProductSummaryDTO dto = new ProductSummaryDTO(p.getId(), p.getName(), p.getSlug(), p.getDescription(),
                    p.getLongDescription(), p.getPrice(), p.getDiscount(), p.getStock(), p.getCategory(), p.getBrand(),
                    p.getMainImage(), p.getImages(), p.getSpecifications(), p.getActive());
            return ResponseEntity.ok(dto);
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Ha habido un problema encontrando su producto: " + e.getMessage());
        }

    }
}