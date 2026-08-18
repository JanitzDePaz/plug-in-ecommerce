package com.plugin.server.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.plugin.server.dto.CartProductDTO;
import com.plugin.server.model.CartItem;
import com.plugin.server.repository.CartRepository;
import com.plugin.server.repository.ProductRepository;

import jakarta.transaction.Transactional;

@RestController
@RequestMapping("api/cart")
@CrossOrigin(origins = { "http://localhost:5173", "https://plug-in-ecommerce.vercel.app" })
public class CartController {

    private final ProductRepository productRepository;
    private final CartRepository cartRepository;

    public CartController(ProductRepository productRepository, CartRepository cartRepository) {
        this.productRepository = productRepository;
        this.cartRepository = cartRepository;
    }

    @GetMapping("/{userid}")
    public ResponseEntity<?> getCartProductsDTO(@PathVariable String userid) {
        try {
            List<CartProductDTO> res = cartRepository.findCartProductsByUserId(userid);
            return ResponseEntity.ok(res);

        } catch (Exception e) {
            return ResponseEntity.status(500).body("Ha habido problemas encontrando sus productos " + e.getMessage());
        }
    }

    @PostMapping("/{userId}/{productId}")
    @Transactional
    public ResponseEntity<?> addProductsToCart(@PathVariable String userId, @PathVariable long productId) {
        try {
            Optional<CartItem> c = cartRepository.findByUserIdAndProductId(userId, productId);

            if (c.isEmpty()) {
                CartItem newEntry = new CartItem(userId, productId);
                cartRepository.save(newEntry);
                return ResponseEntity.ok("Se ha agregado el nuevo producto correctamente");
            } else {
                CartItem item = c.get();

                item.setAmount(item.getAmount() + 1);
                cartRepository.save(item);

                return ResponseEntity.ok("Se ha incrementado la cantidad del producto");
            }
        } catch (Exception e) {
            return ResponseEntity.status(500).body("No se ha podido agregar el producto al carrito");
        }
    }

    @DeleteMapping("/{userId}/{productId}")
    @Transactional
    public ResponseEntity<?> delProductFromCart(@PathVariable String userId, @PathVariable long productId) {
        try {
            Optional<CartItem> c = cartRepository.findByUserIdAndProductId(userId, productId);

            if (c.isEmpty()) {
                throw new Exception("Error al eliminar el producto");
            } else {
                CartItem item = c.get();
                cartRepository.delete(item);

                return ResponseEntity.ok("Producto eliminado correctamente");
            }

        } catch (Exception e) {
            return ResponseEntity.status(500).body("Ha habido un error al eliminar el producto");
        }
    }

    @DeleteMapping("/{userId}")
    @Transactional
    public ResponseEntity<?> cleanUpCart(@PathVariable String userId) {
        try {
            cartRepository.deleteAll();
            return ResponseEntity.ok("Carrito limpiado correctamente");

        } catch (Exception e) {
            return ResponseEntity.status(500).body("Ha habido un error al limpiar el carrito");
        }
    }

    public ProductRepository getProductRepository() {
        return productRepository;
    }

}
