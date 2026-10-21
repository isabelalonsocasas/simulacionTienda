# Tienda Carrito 

## 1. Descripción del proyecto

Este proyecto consiste en el desarrollo de una aplicación web que simula el funcionamiento de una tienda online.

La aplicación permite gestionar carritos de compra asociados a un usuario identificado por su correo electrónico. El sistema está dividido en dos partes:

- Backend: desarrollado con Spring Boot y API REST.
- Frontend: desarrollado con HTML, CSS y JavaScript.

---

## 2. Estructura del proyecto

El repositorio está organizado de la siguiente forma:
- backend
- index.html
- productos.html
- carrito.html
- login.html
- admin.html
- contacto.html
- style.css
- script.js
- README.md

El frontend se encuentra en la raíz del proyecto para su despliegue mediante GitHub Pages.

---

## 3. Funcionalidades principales

### 3.1 Gestión de carritos

- Creación de un carrito mediante correo electrónico.
- Recuperación automática de un carrito existente.
- Eliminación completa de un carrito.

### 3.2 Gestión de productos

- Visualización de productos disponibles.
- Añadir productos al carrito.
- Incremento automático de unidades si el producto ya existe.

### 3.3 Gestión de líneas de carrito

- Visualización de los productos añadidos al carrito.
- Eliminación de productos individuales.

### 3.4 Panel de administración

- Visualización de todos los carritos existentes.
- Consulta de:
  - ID del carrito
  - Correo del usuario
  - ID de usuario
  - Total del carrito

### 3.5 Formulario de contacto

- Formulario de contacto gestionado en frontend.
- Validación básica.
- Confirmación mediante mensaje en pantalla.

---

## 4. API REST

### 4.1 Endpoints disponibles

#### Carritos

- `POST /api/carrito`
  - Crea o recupera un carrito mediante correo.

- `GET /api/carrito`
  - Obtiene todos los carritos.

- `GET /api/carrito/{idCarrito}`
  - Obtiene un carrito específico.

- `DELETE /api/carrito/{idCarrito}`
  - Elimina un carrito.

#### Líneas de carrito

- `POST /api/carrito/{idCarrito}/lineas`
  - Añade un producto al carrito.

- `GET /api/carrito/{idCarrito}/lineas`
  - Obtiene las líneas de un carrito.

- `DELETE /api/carrito/{idCarrito}/lineas/{idArticulo}`
  - Elimina un producto del carrito.

---

## 5. Arquitectura

El backend sigue una arquitectura en capas: 
El frontend se encuentra en la raíz del proyecto para su despliegue mediante GitHub Pages.

---

## 3. Funcionalidades principales

### 3.1 Gestión de carritos

- Creación de un carrito mediante correo electrónico.
- Recuperación automática de un carrito existente.
- Eliminación completa de un carrito.

### 3.2 Gestión de productos

- Visualización de productos disponibles.
- Añadir productos al carrito.
- Incremento automático de unidades si el producto ya existe.

### 3.3 Gestión de líneas de carrito

- Visualización de los productos añadidos al carrito.
- Eliminación de productos individuales.

### 3.4 Panel de administración

- Visualización de todos los carritos existentes.
- Consulta de:
  - ID del carrito
  - Correo del usuario
  - ID de usuario
  - Total del carrito

### 3.5 Formulario de contacto

- Formulario de contacto gestionado en frontend.
- Validación básica.
- Confirmación mediante mensaje en pantalla.

---

## 4. API REST

### 4.1 Endpoints disponibles

#### Carritos

- `POST /api/carrito`
  - Crea o recupera un carrito mediante correo.

- `GET /api/carrito`
  - Obtiene todos los carritos.

- `GET /api/carrito/{idCarrito}`
  - Obtiene un carrito específico.

- `DELETE /api/carrito/{idCarrito}`
  - Elimina un carrito.

#### Líneas de carrito

- `POST /api/carrito/{idCarrito}/lineas`
  - Añade un producto al carrito.

- `GET /api/carrito/{idCarrito}/lineas`
  - Obtiene las líneas de un carrito.

- `DELETE /api/carrito/{idCarrito}/lineas/{idArticulo}`
  - Elimina un producto del carrito.

---

## 5. Arquitectura

El backend sigue una arquitectura en capas: 
El frontend se encuentra en la raíz del proyecto para su despliegue mediante GitHub Pages.

---

## 3. Funcionalidades principales

### 3.1 Gestión de carritos

- Creación de un carrito mediante correo electrónico.
- Recuperación automática de un carrito existente.
- Eliminación completa de un carrito.

### 3.2 Gestión de productos

- Visualización de productos disponibles.
- Añadir productos al carrito.
- Incremento automático de unidades si el producto ya existe.

### 3.3 Gestión de líneas de carrito

- Visualización de los productos añadidos al carrito.
- Eliminación de productos individuales.

### 3.4 Panel de administración

- Visualización de todos los carritos existentes.
- Consulta de:
  - ID del carrito
  - Correo del usuario
  - ID de usuario
  - Total del carrito

### 3.5 Formulario de contacto

- Formulario de contacto gestionado en frontend.
- Validación básica.
- Confirmación mediante mensaje en pantalla.

---

## 4. API REST

### 4.1 Endpoints disponibles

#### Carritos

- `POST /api/carrito`
  - Crea o recupera un carrito mediante correo.

- `GET /api/carrito`
  - Obtiene todos los carritos.

- `GET /api/carrito/{idCarrito}`
  - Obtiene un carrito específico.

- `DELETE /api/carrito/{idCarrito}`
  - Elimina un carrito.

#### Líneas de carrito

- `POST /api/carrito/{idCarrito}/lineas`
  - Añade un producto al carrito.

- `GET /api/carrito/{idCarrito}/lineas`
  - Obtiene las líneas de un carrito.

- `DELETE /api/carrito/{idCarrito}/lineas/{idArticulo}`
  - Elimina un producto del carrito.

---

## 5. Arquitectura

El backend sigue una arquitectura en capas: Controller → Servicio → Repository → Base de datos

- Controller: gestiona las peticiones HTTP.
- Servicio: contiene la lógica de negocio.
- Repository: acceso a base de datos mediante JPA.
- Base de datos: H2.

---

## 6. Tareas programadas

Se ha implementado una tarea programada utilizando `@Scheduled` y `@EnableScheduling`.

### Funcionalidad

Cada minuto se ejecuta una tarea que:

- Obtiene todos los carritos.
- Calcula el número total de carritos activos.
- Calcula el importe total acumulado.
- Muestra un resumen en consola.

### Ejemplo de salida

Resumen tienda: hay 3 carritos activos y un total pendiente de 87.0 €

### Objetivo

Simular un proceso automático de monitorización del estado de la tienda.

---

## 7. Tests end-to-end

Se han implementado tests de integración de tipo end-to-end con el objetivo de validar el funcionamiento completo de la API REST mediante la simulación de peticiones HTTP reales.

### 7.1 Configuración

Los tests utilizan las siguientes anotaciones:

- `@SpringBootTest(webEnvironment = DEFINED_PORT)`
  - Levanta la aplicación completa en el puerto 8080.

- `@DirtiesContext(classMode = BEFORE_EACH_TEST_METHOD)`
  - Reinicia el contexto de Spring antes de cada test para evitar interferencias entre ellos.

- `@AutoConfigureTestDatabase(replace = ANY)`
  - Utiliza una base de datos de prueba (H2) para garantizar la independencia respecto al entorno real.

- `TestRestTemplate`
  - Permite simular peticiones HTTP como si fueran realizadas por un cliente externo.

### 7.2 Tests implementados

#### 7.2.1 Test de creación de carrito

Este test verifica que:

1. Se puede crear un carrito enviando un correo electrónico.
2. La API responde correctamente con código `201 CREATED`.
3. El carrito devuelto contiene el correo introducido.

Flujo del test:

- Se construye un objeto `Carrito` con un correo.
- Se realiza una petición `POST /api/carrito`.
- Se comprueba la respuesta y los datos devueltos.

#### 7.2.2 Test de creación de carrito y añadido de línea

Este test valida un flujo completo de negocio:

1. Se crea un carrito.
2. Se obtiene su identificador (`idCarrito`).
3. Se añade un producto (línea de carrito) a dicho carrito.
4. Se verifica que la línea se ha creado correctamente.

Flujo del test:

- Se realiza una petición `POST /api/carrito`.
- Se extrae el `idCarrito` de la respuesta.
- Se construye un objeto `LineaCarrito`.
- Se realiza una petición `POST /api/carrito/{idCarrito}/lineas`.
- Se comprueba que:
  - La respuesta es `201 CREATED`.
  - La línea contiene el `idArticulo` esperado.

---

## 8. Frontend

El frontend está desarrollado con:

- HTML
- CSS
- JavaScript

### Funcionalidades

- Uso de `fetch` para consumir la API REST.
- Uso de `localStorage` para mantener la sesión del usuario.
- Manipulación del DOM.
- Gestión de navegación entre páginas.

---

## 9. Despliegue

El frontend está desplegado mediante GitHub Pages.

### URL

[Ir a la web](https://isabelalonsocasas.github.io/simulacionTienda/)

### Consideración importante

El backend no se despliega en GitHub Pages. Para el correcto funcionamiento de la aplicación es necesario ejecutar el backend localmente en: http://localhost:8080



