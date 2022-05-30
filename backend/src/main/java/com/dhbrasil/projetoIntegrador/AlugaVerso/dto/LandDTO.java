package com.dhbrasil.projetoIntegrador.AlugaVerso.dto;

import com.dhbrasil.projetoIntegrador.AlugaVerso.model.Attributes;
import com.dhbrasil.projetoIntegrador.AlugaVerso.model.Images;
import com.dhbrasil.projetoIntegrador.AlugaVerso.model.Land;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class LandDTO {

    private Integer id;
    private String name;
    private String description;
    private String localizationX;
    private String localizationY;
    private Double price;

    private List<ImagesDTO> images = new ArrayList<>();
    private List<AttributesDTO> attributes = new ArrayList<>();
    private CategoryDTO category;
    public LandDTO(){}

    public LandDTO(Integer id, String name, String description, String localizationX, String localizationY) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.localizationX = localizationX;
        this.localizationY = localizationY;

    }

    public Land toEntity() {

        Land land = new Land();
        land.setId(this.id);
        land.setName(this.name);
        land.setDescription(this.description);
        land.setLocalizationX(this.localizationX);
        land.setLocalizationY(this.localizationY);
        land.setPrice(this.price);
        this.images.forEach(img ->land.getImages().add(img.toEntity()));
        this.attributes.forEach(attr -> land.getAttributes().add(attr.toEntity()));
        land.setCategory(this.category.toEntity());
        return land;
    }

    public LandDTO(Land land){
        this.id = land.getId();
        this.name = land.getName();
        this.description = land.getDescription();
        this.localizationX = land.getLocalizationX();
        this.localizationY = land.getLocalizationY();
        this.price = land.getPrice();
        this.category = new CategoryDTO(land.getCategory());
    }

    public LandDTO(Land land, Set<Images>images, Set<Attributes> attributes){
        this(land);
        images.forEach(img ->this.images.add(new ImagesDTO(img)));
        attributes.forEach(a ->this.attributes.add(new AttributesDTO(a)));
    }
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getLocalizationX() {
        return localizationX;
    }

    public void setLocalizationX(String localizationX) {
        this.localizationX = localizationX;
    }

    public String getLocalizationY() {
        return localizationY;
    }

    public void setLocalizationY(String localizationY) {
        this.localizationY = localizationY;
    }

    public List<ImagesDTO> getImages() {
        return images;
    }

    public void setImages(List<ImagesDTO> images) {
        this.images = images;
    }

    public List<AttributesDTO> getAttributes() {
        return attributes;
    }

    public void setAttributes(List<AttributesDTO> attributes) {
        this.attributes = attributes;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public CategoryDTO getCategory() {
        return category;
    }

    public void setCategory(CategoryDTO category) {
        this.category = category;
    }


}
