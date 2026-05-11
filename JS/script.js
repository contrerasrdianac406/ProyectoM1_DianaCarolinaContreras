const btnAgregarCard = document.querySelector("#agregar-card");
const contenedorColores = document.querySelector("#articulo");
const selectOpciones = document.querySelector("#opciones");

let i = 1;
function agregarPlantila() {
  const nuevomarco = document.createElement("div");
  nuevomarco.id = "marco-tarjeta";

  const nuevocard = document.createElement("div");
  nuevocard.id = "tarjeta";
  nuevocard.classList.add("card" + i);

  const label = document.createElement("p");
  label.textContent = "Color";

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
