package com.dhbrasil.projetoIntegrador.AlugaVerso.dto;


import com.dhbrasil.projetoIntegrador.AlugaVerso.model.Client;
import com.dhbrasil.projetoIntegrador.AlugaVerso.model.User;

import java.util.ArrayList;
import java.util.List;

public class ClientDTO {

    private Integer id;
    private String name;
    private String lastName;
    private String email;
    private String password;
    private List<ReservationDTO> reservation = new ArrayList<>();

    private FunctionDTO function;

    public ClientDTO(){}



    public ClientDTO(Client client){
        id = client.getId();
        name = client.getName();
        lastName = client.getLastName();
        email = client.getEmail();
        password = client.getPassword();
        function = new FunctionDTO(client.getFunction());
        client.getReservation().forEach(res -> this.reservation.add(new ReservationDTO(res)));
    }

    public Client toEntity(){
        Client client = new Client();
        client.setId(this.id);
        client.setName(this.name);
        client.setLastName(this.lastName);
        client.setEmail(this.email);
        client.setPassword(this.password);
        client.setFunction(this.function.toEntity());
        this.reservation.forEach(res ->client.getReservation().add(res.toEntity()));
        return client;
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
