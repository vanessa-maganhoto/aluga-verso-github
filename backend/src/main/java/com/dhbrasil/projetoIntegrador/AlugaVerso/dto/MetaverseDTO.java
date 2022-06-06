package com.dhbrasil.projetoIntegrador.AlugaVerso.dto;

import com.dhbrasil.projetoIntegrador.AlugaVerso.model.Metaverse;

public class MetaverseDTO {

    private Integer id;
    private String name;

    public MetaverseDTO(){}

    public MetaverseDTO(Integer id, String name) {
        this.id = id;
        this.name = name;
    }

    public Metaverse toEntity(){
        return new Metaverse(this.id, this.name);
    }

    public MetaverseDTO(Metaverse metaverse){
        this.id = metaverse.getId();
        this.name = metaverse.getName();
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

}
