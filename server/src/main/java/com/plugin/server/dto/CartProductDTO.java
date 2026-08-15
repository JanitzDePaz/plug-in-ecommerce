package com.plugin.server.dto;

public class CartProductDTO {
    private String name;
    private double price;
    private String mainImg;
    private int amount;

    public CartProductDTO(String name, double price, String mainImg, int amount) {
        this.name = name;
        this.price = price;
        this.mainImg = mainImg;
        this.amount = amount;
    }

    public String getName() {
        return name;
    }

    public double getPrice() {
        return price;
    }

    public String getMainImg() {
        return mainImg;
    }

    public int getAmount() {
        return amount;
    }
}
