package com.plugin.server.repository;

import com.plugin.server.dto.CartProductDTO;
import com.plugin.server.model.CartItem;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface CartRepository extends JpaRepository<CartItem, Long> {
    @Query("SELECT new com.plugin.server.dto.CartProductDTO(p.id, p.name, p.price, p.mainImage, c.amount) FROM CartItem c JOIN Product p ON c.productId = p.id WHERE c.userId = :userId")
    List<CartProductDTO> findCartProductsByUserId(@Param("userId") String userId);

    Optional<CartItem> findByUserIdAndProductId(String userId, Long productId);
}