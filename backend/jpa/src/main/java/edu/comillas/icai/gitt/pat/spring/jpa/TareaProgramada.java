package edu.comillas.icai.gitt.pat.spring.jpa;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

//Para repasar tareas programadas, añado una tarea programada, que diga los carritos cada minuto y el precio
@Component
public class TareaProgramada {

    private final Logger logger = LoggerFactory.getLogger(getClass());

    @Autowired
    ServicioCarritos servicioCarritos;

    @Scheduled(cron = "0 * * * * *")
    public void resumenCarritos() {

        int numeroCarritos = 0;
        double totalPendiente = 0.0;

        for (Carrito carrito : servicioCarritos.obtenerTodos()) {
            numeroCarritos++;

            if (carrito.totalPrecio != null) {
                totalPendiente += carrito.totalPrecio;
            }
        }

        logger.info("Resumen tienda: hay {} carritos activos y un total pendiente de {} €",
                numeroCarritos, totalPendiente);
    }
}

