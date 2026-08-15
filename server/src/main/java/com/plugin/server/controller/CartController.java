package com.plugin.server.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.plugin.server.dto.CartProductDTO;
import com.plugin.server.repository.ProductRepository;

@RestController
@RequestMapping("api/cart")
@CrossOrigin(origins = { "http://localhost:5173", "https://plug-in-ecommerce.vercel.app" })
public class CartController {

    private final ProductRepository productRepository;
    public CartController(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @GetMapping("/{userid}")
    public ResponseEntity<?> getCartProductsDTO(@PathVariable String userid) {
        try {
            // List<CartProductDTO> res = productRepository.getCartProducts(userid);
            // return ResponseEntity.ok(res);

            List<CartProductDTO> test = new ArrayList<CartProductDTO>();
            test.add(new CartProductDTO("Samsung Odyssey G5", 212, "/products/monitors/AOC-Gaming-24G2SP/front.png", 1));
            test.add(new CartProductDTO("Dell UltraSharp U2723QE", 620.50, "/products/monitors/Dell-UltraSharp-U2723QE/front.png", 2));
            return ResponseEntity.ok(test);

        } catch (Exception e) {
            return ResponseEntity.status(500).body("Ha habido problemas encontrando sus productos " + e.getMessage());
        }
    }

    public ProductRepository getProductRepository() {
        return productRepository;
    }

}
