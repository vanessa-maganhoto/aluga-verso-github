package com.dhbrasil.projetoIntegrador.AlugaVerso.dto;

import com.dhbrasil.projetoIntegrador.AlugaVerso.model.Function;

public class FunctionDTO {

    private Integer id;
    private String name;

    public FunctionDTO(){}

    public FunctionDTO(Integer id, String name) {
        this.id = id;
        this.name = name;
    }

    public FunctionDTO(Function function){
        id = function.getId();
        name = function.getName();
    }

    public Function toEntity(){
        return new Function(this.id, this.name);
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
