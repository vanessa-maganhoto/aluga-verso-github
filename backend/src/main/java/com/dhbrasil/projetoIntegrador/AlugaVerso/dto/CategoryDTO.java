package com.dhbrasil.projetoIntegrador.AlugaVerso.dto;

import com.dhbrasil.projetoIntegrador.AlugaVerso.model.Category;
import com.dhbrasil.projetoIntegrador.AlugaVerso.model.Land;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

public class CategoryDTO {

    private Integer id;
    private String name;
    private String imagemUrl;
    private String description;

    private List<LandDTO> lands = new ArrayList<>();
    public CategoryDTO(){}

    public CategoryDTO(Integer id, String name, String imagemUrl, String description) {
        this.id = id;
        this.name = name;
        this.imagemUrl = imagemUrl;
        this.description = description;
    }

    public Category toEntity(){

        return new Category(this.id, this.name, this.imagemUrl, this.description);
    }

    public CategoryDTO(Category category){
        this.id = category.getId();
        this.name = category.getName();
        this.imagemUrl = category.getImagemUrl();
        this.description = category.getDescription();
    }

    public CategoryDTO(Category category, Set<Land> lands){
        this(category);
        lands.forEach(land -> this.lands.add(new LandDTO(land)));
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

    public String getImagemUrl() {
        return imagemUrl;
    }

    public void setImagemUrl(String imagemUrl) {
        this.imagemUrl = imagemUrl;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<LandDTO> getLands() {
        return lands;
    }

    public void setLands(List<LandDTO> lands) {
        this.lands = lands;
    }
}
