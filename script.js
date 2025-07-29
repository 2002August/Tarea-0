function mostrarDatos() {
    const nombres = document.getElementById("nombres").value;
    const apellidos = document.getElementById("apellidos").value;
    const telefono = document.getElementById("telefono").value;
    const correo = document.getElementById("correo").value;
    const fecha = document.getElementById("fecha").value;
    const mensaje = document.getElementById("mensaje").value;

    alert(`${nombres} ${apellidos}\n${telefono}\n${correo}\n${fecha}\n${mensaje}`);
}
