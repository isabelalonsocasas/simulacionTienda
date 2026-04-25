package edu.comillas.icai.gitt.pat.spring.jpa;

import org.springframework.data.repository.CrudRepository;

public interface CarritoRepository extends CrudRepository<Carrito, String> {

    //Carrito findByIdUsuario(String idUsuario);

    Carrito findBycorreo(String correo);
}
