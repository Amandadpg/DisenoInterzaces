document.addEventListener("DOMContentLoaded", function() {
  let botones = ["#btnOscuro", "#btnMonocromo", "#btnAltoContraste", "#btnEnlaces", "#btnReset"];
  const body = document.body;

  function limpiarModos() {
    body.className = "";
  }

  botones.forEach(id => {
    const btn = document.querySelector(id);
    if (!btn) {
      console.error("No encontrado:", id);
      return;
    }
    btn.addEventListener("click", () => {
      limpiarModos();
      if (id !== "#btnReset") {
        body.classList.add(id.substring(1)); // Agrega clase quitando '#'
      }
    });
  });

  // Mostrar u ocultar panel accesibilidad (opcional)
  const btnMostrarPanel = document.getElementById("accesibilidad-btn");
  const panel = document.getElementById("panel-accesibilidad");
  if (btnMostrarPanel && panel) {
    btnMostrarPanel.addEventListener("click", () => {
      panel.classList.toggle("visible");
      panel.classList.toggle("oculto");
    });
  }
});
