document.addEventListener("DOMContentLoaded", () => {

  const iconoAccesibilidad = document.querySelector("#iconoAccesibilidad");
  const panel = document.querySelector("#panelAccesibilidad");
  const body = document.querySelector("body");

  iconoAccesibilidad.addEventListener("click", () => {
    panel.classList.toggle("visible");
  });

  document.querySelector("#botonOscuro").addEventListener("click", () => {
    body.classList.remove("modo-monocromo", "modo-contraste", "destacar-enlaces");
    body.classList.toggle("modo-oscuro");
  });

  document.querySelector("#botonMonocromo").addEventListener("click", () => {
    body.classList.remove("modo-oscuro", "modo-contraste", "destacar-enlaces");
    body.classList.add("modo-monocromo");
  });

  document.querySelector("#botonAltoContraste").addEventListener("click", () => {
    body.classList.remove("modo-oscuro", "modo-monocromo", "destacar-enlaces");
    body.classList.add("modo-contraste");
  });

  document.querySelector("#botonEnlaces").addEventListener("click", () => {
    body.classList.remove("modo-oscuro", "modo-monocromo", "modo-contraste");
    body.classList.add("destacar-enlaces");
  });

  document.querySelector("#botonReset").addEventListener("click", () => {
    body.className = "";
  });

});
