package com.dhbrasil.projetoIntegrador.AlugaVerso.dto;


import com.dhbrasil.projetoIntegrador.AlugaVerso.model.User;

public class UserDTO {

    private Integer id;
    private String name;
    private String lastName;
    private String email;
    private String password;

    private FunctionDTO function;

    public UserDTO(){}

    public UserDTO(Integer id, String name, String lastName, String email, String password, FunctionDTO function) {
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.function = function;
    }

    public UserDTO(User user){
        id = user.getId();
        name = user.getName();
        lastName = user.getLastName();
        email = user.getEmail();
        password = user.getPassword();
        function = new FunctionDTO(user.getFunction());
    }

    public User toEntity(){
        return new User(this.id, this.name, this.lastName, this.email, this.password, this.function.toEntity());
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

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public FunctionDTO getFunction() {
        return function;
    }

    public void setFunction(FunctionDTO function) {
        this.function = function;
    }
}
