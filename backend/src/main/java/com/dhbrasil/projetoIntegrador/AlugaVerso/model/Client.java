package com.dhbrasil.projetoIntegrador.AlugaVerso.model;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;
@Entity
@Table(name = "client")
public class Client extends User{


    @OneToMany(mappedBy = "client", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    Set<Reservation> reservation = new HashSet<>();

    public Client(){}

    public Client(Set<Reservation> reservation) {
        this.reservation = reservation;
    }

    public Client(Integer id, String name, String lastName, String email, String password, Function function, Set<Reservation> reservation) {
        super(id, name, lastName, email, password, function);
        this.reservation = reservation;
    }

    public Set<Reservation> getReservation() {
        return reservation;
    }

    public void setReservation(Set<Reservation> reservation) {
        this.reservation = reservation;
    }
}
