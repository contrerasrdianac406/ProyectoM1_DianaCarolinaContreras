const btnAgregarCard = document.querySelector("#agregar-card");
const contenedorColores = document.querySelector("#articulo");
const selectOpciones = document.querySelector("#opciones");
const btnGenerarPaleta = document.querySelector("#generar-paleta");

let i = 1;
function agregarPlantila() {
  const nuevomarco = document.createElement("div");
  nuevomarco.id = "marco-tarjeta";

  const nuevocard = document.createElement("div");
  nuevocard.id = "tarjeta";
  nuevocard.classList.add("card" + i);

  const color = generarHexadecimal();
  nuevocard.style.backgroundColor = color;

  const label = document.createElement("p");
  label.classList.add("label-color");
  label.textContent = color;

  nuevomarco.appendChild(nuevocard);
  nuevomarco.appendChild(label);
  contenedorColores.appendChild(nuevomarco);
  i++;
}

function GenerarPaleta() {
  let contador = 0;
  contenedorColores.innerHTML = "";
  do {
    agregarPlantila();
    contador++;
  } while (contador < parseInt(selectOpciones.value));
  i = 1;
}
GenerarPaleta();
selectOpciones.addEventListener("change", GenerarPaleta);

function generarHexadecimal() {
  const caracteresHexadecimales = "0123456789ABCDEF";
  let hexadecimal = "#";
  for (let i = 0; i < 6; i++) {
    hexadecimal += caracteresHexadecimales[Math.floor(Math.random() * 16)];
  }
  return hexadecimal;
}
btnGenerarPaleta.addEventListener("click", GenerarPaleta);
