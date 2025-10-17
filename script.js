document.addEventListener("DOMContentLoaded", () => {

  // Efecto al pasar el mouse por el título
  const titulo = document.getElementById("titulo");
  if (titulo) {
    const originalColor = window.getComputedStyle(titulo).color;

    titulo.addEventListener("mouseover", () => {
      titulo.style.color = "orange";
    });

    titulo.addEventListener("mouseout", () => {
      titulo.style.color = originalColor || "";
    });

    // Acción al hacer clic: mostrar / ocultar caja
    if (caja) {
    caja.addEventListener("click", () => {
      if (caja.textContent === "CLICK AQUÍ") {
        caja.textContent = "💖 GRACIAS POR VISITAR MI PÁGINA 💖";
      } else {
        caja.textContent = "CLICK AQUÍ";
      }
    });
  }
  }
});
