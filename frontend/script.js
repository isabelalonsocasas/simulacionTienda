const linkSesion = document.getElementById("link-sesion");
const formContacto = document.getElementById("form-contacto");
const formLogin = document.getElementById("form-login");
const tablaCarritos = document.getElementById("tabla-carritos");

const btn001 = document.getElementById("btn-001");
const btn002 = document.getElementById("btn-002");
const btn003 = document.getElementById("btn-003");
const btn004 = document.getElementById("btn-004");

const tablaLineasCarrito = document.getElementById("tabla-lineas-carrito");
const datosCarrito = document.getElementById("datos-carrito");

const btnBorrarCarrito = document.getElementById("btn-borrar-carrito");
const btnCerrarSesion = document.getElementById("btn-cerrar-sesion");

//Anadir productos al carrito
if (btn001) {
  btn001.addEventListener("click", function () {
    anadirProducto("001", 12);
  });
}

if (btn002) {
  btn002.addEventListener("click", function () {
    anadirProducto("002", 30);
  });
}

if (btn003) {
  btn003.addEventListener("click", function () {
    anadirProducto("003", 45);
  });
}

if (btn004) {
  btn004.addEventListener("click", function () {
    anadirProducto("004", 50);
  });
}

//Funcion para añadir la linea al carrito
function anadirProducto(idArticulo, precioUnitario) {

  const idCarrito = localStorage.getItem("idCarrito");

  if (!idCarrito) {
    window.location.href = "login.html";
    return;
  }

  fetch("http://localhost:8080/api/carrito/" + idCarrito + "/lineas", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      idArticulo: idArticulo,
      precioUnitario: precioUnitario,
      numeroUnidades: 1
    })
  })
    .then(response => response.json())
    .then(linea => {
      document.getElementById("mensaje-productos").textContent =
        "Producto añadido al carrito.";
    })
    .catch(error => {
      console.error("Error al añadir producto:", error); //Para verlo en la consola
        alert("Error al añadir producto"); //Para verlo en el navegador directamente
    });
}

//Para cargar el carrito de un usuario
if (tablaLineasCarrito) {
  cargarMiCarrito();
}

function cargarMiCarrito() {

  const idCarrito = localStorage.getItem("idCarrito");
  const correo = localStorage.getItem("correo");

  if (!idCarrito) {
    window.location.href = "login.html";
    return;
  }

  if (datosCarrito) {
    datosCarrito.textContent = "Correo: " + correo + " | ID carrito: " + idCarrito;
  }

  fetch("http://localhost:8080/api/carrito/" + idCarrito + "/lineas")
    .then(response => response.json())
    .then(lineas => {

      tablaLineasCarrito.innerHTML = "";

      for (let linea of lineas) {
        const fila = document.createElement("tr");

        fila.innerHTML = `
          <td>${linea.idArticulo}</td>
          <td>${linea.numeroUnidades}</td>
          <td>${linea.precioUnitario} €</td>
          <td>${linea.costeLineaArticulo} €</td>
          <td>
            <button onclick="borrarLinea('${linea.idArticulo}')">Eliminar</button> 
          </td>
        `;

        //Añadimos en el boton la opcion de eliminar el producto 

        tablaLineasCarrito.appendChild(fila);
      }
    })
    .catch(error => {
      console.error("Error al cargar carrito:", error);
    });
}

//Para borrar linea

function borrarLinea(idArticulo) {

  const idCarrito = localStorage.getItem("idCarrito"); 

  fetch("http://localhost:8080/api/carrito/" + idCarrito + "/lineas/" + idArticulo, {
    method: "DELETE"
  })
    .then(() => {
      cargarMiCarrito();
    })
    .catch(error => {
      console.error("Error al borrar línea:", error);
    });
}

//Guardar correo para enseñar carrito en especifico
if (formLogin) {
  formLogin.addEventListener("submit", function (event) {
    event.preventDefault();

    const correo = document.getElementById("correo-login").value;

    fetch("http://localhost:8080/api/carrito", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        correo: correo
      })
    })
      .then(response => response.json())
      .then(carrito => {

        // Guardar datos en el navegador
        localStorage.setItem("idCarrito", carrito.idCarrito);
        localStorage.setItem("correo", carrito.correo);

        // Se muestra la paguina de carrito.html
        window.location.href = "carrito.html";
      })
      .catch(error => {
        console.error("Error:", error);
      });
  });
}

//Se actualiza con los datos del carrito
if (tablaCarritos) {
  fetch("http://localhost:8080/api/carrito")
    .then(response => response.json())
    .then(carritos => {

      tablaCarritos.innerHTML = ""; //Borrar datos de la tabla para no duplicar

      for (let carrito of carritos) {
        const fila = document.createElement("tr");

        fila.innerHTML = `
          <td>${carrito.idCarrito}</td>
          <td>${carrito.correo}</td>
          <td>${carrito.idUsuario}</td>
          <td>${carrito.totalPrecio} €</td>
        `;

        tablaCarritos.appendChild(fila);
      }
    })
    .catch(error => {
      console.error("Error al cargar los carritos:", error);
    });
}




//Para cambiar la cabecera dependiendo de si se ha introducido el correo
if (linkSesion) {
  const idCarrito = localStorage.getItem("idCarrito");

  if (idCarrito) {
    linkSesion.textContent = "Mi carrito";
    linkSesion.href = "carrito.html";
  } else {
    linkSesion.textContent = "Iniciar sesión";
    linkSesion.href = "login.html";
  }
}


//Para enviar el formulario de contacto
if (formContacto) {
  formContacto.addEventListener("submit", function (event) {
    event.preventDefault();

    document.getElementById("mensaje-contacto").textContent =
      "Gracias. Hemos recibido tu mensaje correctamente.";

    formContacto.reset();
  });
}

//Borrar carrito
if (btnBorrarCarrito) {
  btnBorrarCarrito.addEventListener("click", function () {

    const idCarrito = localStorage.getItem("idCarrito");

    fetch("http://localhost:8080/api/carrito/" + idCarrito, {
      method: "DELETE"
    })
      .then(() => {
        localStorage.removeItem("idCarrito");
        localStorage.removeItem("correo");
        window.location.href = "index.html";
      })
      .catch(error => {
        console.error("Error al borrar carrito:", error);
      });
  });
}

//Cerrar sesion
if (btnCerrarSesion) {
  btnCerrarSesion.addEventListener("click", function () {
    localStorage.removeItem("idCarrito");
    localStorage.removeItem("correo");
    window.location.href = "index.html";
  });
}