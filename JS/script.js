const btnAgregarCard = document.querySelector("#agregar-card");
const contenedorColores = document.querySelector("#articulo");

contador = 7;

function agregarCard() {
  if (contador < 10) {
    const nuevocard = document.createElement("div");
    nuevocard.textContent = "item" + contador;
    nuevocard.setAttribute("id", "tarjeta");
    nuevocard.classList.add("card" + contador);
    contenedorColores.appendChild(nuevocard);
    contador++;
  } else {
    alert("Ya no puedes crear mas colores");
  }
}
btnAgregarCard.addEventListener("click", agregarCard);
