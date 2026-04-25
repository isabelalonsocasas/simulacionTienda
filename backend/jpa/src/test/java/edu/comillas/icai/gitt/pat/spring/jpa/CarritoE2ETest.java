package edu.comillas.icai.gitt.pat.spring.jpa;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.annotation.DirtiesContext;

import static org.springframework.test.annotation.DirtiesContext.ClassMode.BEFORE_EACH_TEST_METHOD;

//Añado tambien dos test end2end para respasar
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.DEFINED_PORT)
@DirtiesContext(classMode = BEFORE_EACH_TEST_METHOD)
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.ANY)
public class CarritoE2ETest {

    private final TestRestTemplate restTemplate = new TestRestTemplate();

    @Test
    public void crearCarritoTest() {

        // Crear objeto carrito
        Carrito carrito = new Carrito();
        carrito.correo = "test@gmail.com";

        // Hacer POST
        ResponseEntity<Carrito> response = restTemplate.postForEntity(
                "http://localhost:8080/api/carrito",
                carrito,
                Carrito.class
        );

        // Comprobaciones
        Assertions.assertEquals(HttpStatus.CREATED, response.getStatusCode());
        Assertions.assertNotNull(response.getBody());
        Assertions.assertEquals("test@gmail.com", response.getBody().correo);
    }


    @Test
    public void crearCarritoYAnadirLineaTest() {

        // Crear carrito
        Carrito carrito = new Carrito();
        carrito.correo = "test2@gmail.com";

        ResponseEntity<Carrito> responseCarrito = restTemplate.postForEntity(
                "http://localhost:8080/api/carrito",
                carrito,
                Carrito.class
        );

        String idCarrito = responseCarrito.getBody().idCarrito;

        // Crear línea
        LineaCarrito linea = new LineaCarrito();
        linea.idArticulo = "001";
        linea.precioUnitario = 12.0;
        linea.numeroUnidades = 1;

        ResponseEntity<LineaCarrito> responseLinea = restTemplate.postForEntity(
                "http://localhost:8080/api/carrito/" + idCarrito + "/lineas",
                linea,
                LineaCarrito.class
        );

        Assertions.assertEquals(HttpStatus.CREATED, responseLinea.getStatusCode());
        Assertions.assertNotNull(responseLinea.getBody());
        Assertions.assertEquals("001", responseLinea.getBody().idArticulo);
    }



}
