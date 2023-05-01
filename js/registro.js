let datos = [];

function guardar() {
  let dni = document.getElementById("dni").value;
  let nombre = document.getElementById("nombre").value;
  let apellidoPaterno = document.getElementById("apellidoPaterno").value;
  let apellidoMaterno = document.getElementById("apellidoMaterno").value;
  let email = document.getElementById("email").value;
  let direccion = document.getElementById("direccion").value;
  let telefono = document.getElementById("telefono").value;

  datos.push({
    dni: dni,
    nombre: nombre,
    apellidoPaterno: apellidoPaterno,
    apellidoMaterno: apellidoMaterno,
    email: email,
    direccion: direccion,
    telefono: telefono,
  });

  mostrar();
}

function mostrar() {
  let tabla = document.getElementById("tabla");
  tabla.innerHTML = "";

  for (let i = 0; i < datos.length; i++) {
    let fila = tabla.insertRow();

    let celdaDni = fila.insertCell();
    let celdaNombre = fila.insertCell();
    let celdaApellidoPaterno = fila.insertCell();
    let celdaApellidoMaterno = fila.insertCell();
    let celdaEmail = fila.insertCell();
    let celdaDireccion = fila.insertCell();
    let celdaTelefono = fila.insertCell();
    let celdaEliminar = fila.insertCell();

    celdaDni.innerHTML = datos[i].dni;
    celdaNombre.innerHTML = datos[i].nombre;
    celdaApellidoPaterno.innerHTML = datos[i].apellidoPaterno;
    celdaApellidoMaterno.innerHTML = datos[i].apellidoMaterno;
    celdaEmail.innerHTML = datos[i].email;
    celdaDireccion.innerHTML = datos[i].direccion;
    celdaTelefono.innerHTML = datos[i].telefono;
    celdaEliminar.innerHTML =
      "<button onclick='eliminar(" + i + ")'>Eliminar</button>";
  }
}

function eliminar(index) {
  datos.splice(index, 1);
  mostrar();
}

function descargar() {
  let csv =
    "DNI,Nombre,Apellido Paterno,Apellido Materno,Email,Dirección,Teléfono\n";

  for (let i = 0; i < datos.length; i++) {
    csv += datos[i].dni + ",";
    csv += datos[i].nombre + ",";
    csv += datos[i].apellidoPaterno + ",";
    csv += datos[i].apellidoMaterno + ",";
    csv += datos[i].email + ",";
    csv += datos[i].direccion + ",";
    csv += datos[i].telefono + "\n";
  }

  let enlace = document.createElement("a");
  enlace.setAttribute(
    "href",
    "data:text/csv;charset=utf-8," + encodeURIComponent(csv)
  );
  enlace.setAttribute("download", "contactos.csv");
  document.body.appendChild(enlace);
  enlace.click();
  document.body.removeChild(enlace);
}
