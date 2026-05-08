const btnAgregarCard = document.querySelector("#agregar-card");
const contenedorColores = document.querySelector("#articulo");

contador = 7;

function agregarCard() {
  if (contador < 10) {
    const nuevomarco = document.createElement("div");
    nuevomarco.setAttribute("id", "marco-tarjeta");
    contenedorColores.appendChild(nuevomarco);
    const nuevocard = document.createElement("div");
    nuevocard.setAttribute("id", "tarjeta");
    nuevocard.classList.add("card" + contador);
    nuevomarco.appendChild(nuevocard);
    contador++;
  } else {
    alert("Ya no puedes crear mas colores");
  }
}
btnAgregarCard.addEventListener("click", agregarCard);

function generarHexadecimal() {
  const caracteresHexadecimales = "0123456789ABCDEF";
  let hexadecimal = "#";
  for (let i = 0; i < 6; i++) {
    hexadecimal += caracteresHexadecimales[Math.floor(Math.random() * 16)];
  }
  return hexadecimal;
}
