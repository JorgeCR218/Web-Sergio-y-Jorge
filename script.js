// Mostrar u ocultar la tabla
function toggleTabla() {
  const tabla = document.querySelector("table");
  tabla.style.display = tabla.style.display === "none" ? "table" : "none";
}

// Filtrar productos por nombre
function filtrarProductos() {
  const input = document.getElementById("buscador").value.toLowerCase();
  const filas = document.querySelectorAll("table tr");

  filas.forEach((fila, index) => {
    if (index === 0) return; // Saltar encabezado

    const producto = fila.children[0].textContent.toLowerCase();
    fila.style.display = producto.includes(input) ? "" : "none";
  });
}
