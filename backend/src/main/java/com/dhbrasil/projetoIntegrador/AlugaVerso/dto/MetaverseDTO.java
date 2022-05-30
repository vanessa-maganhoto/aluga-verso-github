package com.dhbrasil.projetoIntegrador.AlugaVerso.dto;

import com.dhbrasil.projetoIntegrador.AlugaVerso.model.Land;
import com.dhbrasil.projetoIntegrador.AlugaVerso.model.Metaverse;
import org.w3c.dom.stylesheets.LinkStyle;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

public class MetaverseDTO {

    private Integer id;
    private String name;

    private List<LandDTO> lands = new ArrayList<>();

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

    public MetaverseDTO(Metaverse metaverse, Set<Land>land){
        this(metaverse);
        land.forEach(l -> this.lands.add(new LandDTO(l)));
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

    public List<LandDTO> getLands() {
        return lands;
    }

    public void setLands(List<LandDTO> lands) {
        this.lands = lands;
    }
}
