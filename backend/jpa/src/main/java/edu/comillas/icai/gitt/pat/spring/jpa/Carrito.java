package edu.comillas.icai.gitt.pat.spring.jpa;

import jakarta.persistence.*;

@Entity
public class Carrito {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    //Si fuera long @GeneratedValue(strategy = GenerationType.IDENTITY)
    public String idCarrito;

    @Column(nullable = false, unique = true)
    public String idUsuario;

    @Column(nullable = false, unique = true)
    public String correo;

    @Column(nullable = false)
    public Double totalPrecio;
}
