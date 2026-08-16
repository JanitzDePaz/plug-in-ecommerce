package com.plugin.server.dto;

import java.math.BigDecimal;

public class CartProductDTO {
    private String name;
    private BigDecimal price;
    private String mainImg;
    private int amount;

    public CartProductDTO(String name, BigDecimal price, String mainImg, int amount) {
        this.name = name;
        this.price = price;
        this.mainImg = mainImg;
        this.amount = amount;
    }

    public String getName() {
        return name;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public String getMainImg() {
        return mainImg;
    }

    public int getAmount() {
        return amount;
    }
}
