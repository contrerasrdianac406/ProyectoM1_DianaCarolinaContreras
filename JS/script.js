/*Elementos del DOM*/

const btnAgregarCard = document.querySelector("#agregar-card");
const contenedorColores = document.querySelector("#articulo");
const selectOpciones = document.querySelector("#opciones");
const btnGenerarPaleta = document.querySelector("#generar-paleta");
const radioButtonColor = document.querySelectorAll(
  'input[name="color-codigo"]',
);
const mensajeAlerta = document.querySelector("#mensaje-alerta");

/*Funciones*/

/*Funcion para crear las tarjatas de colores*/
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
  label.dataset.hex = color;
  label.textContent = obtenerEtiquetaColor(color);

  nuevomarco.appendChild(nuevocard);
  nuevomarco.appendChild(label);
  contenedorColores.appendChild(nuevomarco);
  i++;
}

/*Funcion para generar la cantidad de paleta de colores seleccionada por el usuario*/
function GenerarPaleta() {
  let contador = 0;
  contenedorColores.innerHTML = "";
  do {
    agregarPlantila();
    contador++;
  } while (contador < parseInt(selectOpciones.value));
  i = 1;

  /*   mostrarMensaje(
    "Se ha generado una nueva paleta de colores con " +
      selectOpciones.value +
      " colores.",
  ); */
}

/*Genera las cards por defecto al cargar la página*/
GenerarPaleta();

/* Función para generar un código hexadecimal aleatorio */
function generarHexadecimal() {
  const caracteresHexadecimales = "0123456789ABCDEF";
  let hexadecimal = "#";
  for (let i = 0; i < 6; i++) {
    hexadecimal += caracteresHexadecimales[Math.floor(Math.random() * 16)];
  }
  return hexadecimal;
}

/* Función para convertir hexadecimal a HSL */
function hexToHsl(hex) {
  // Quitamos el # y convertimos a valores R, G, B
  let r = parseInt(hex.substring(1, 3), 16) / 255;
  let g = parseInt(hex.substring(3, 5), 16) / 255;
  let b = parseInt(hex.substring(5, 7), 16) / 255;

  let max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  let h,
    s,
    l = (max + min) / 2;

  if (max === min) {
    h = s = 0; // Acromático (gris)
  } else {
    let d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  return `hsl(${Math.round(h * 360)}, ${Math.round(s * 100)}%, ${Math.round(
    l * 100,
  )}%)`;
}

/*función para obtener el tipo de color seleccionado de la opción de radio button*/
function obtenerTipoColor() {
  const radioMarcado = document.querySelector(
    'input[name="color-codigo"]:checked',
  );
  return radioMarcado ? radioMarcado.value : "HEX";
}

/*función para obtener el nombre del color según el tipo seleccionado*/
function obtenerEtiquetaColor(color) {
  return obtenerTipoColor() === "HSL" ? hexToHsl(color) : color;
}

/*genera mensaje de alerta*/
function mostrarMensaje(mensaje) {
  mensajeAlerta.textContent = mensaje;
  mensajeAlerta.classList.add("mostrar");

  setTimeout(() => {
    mensajeAlerta.classList.remove("mostrar");
  }, 2000);
}

/*Eventos*/
radioButtonColor.forEach((radio) => {
  radio.addEventListener("change", () => {
    document.querySelectorAll(".label-color").forEach((label) => {
      const hex = label.dataset.hex;
      console.log(hex);
      label.textContent = obtenerEtiquetaColor(hex);
    });
    mostrarMensaje("🔄 Se cambio el formato de color a " + radio.value);
  });
});

btnGenerarPaleta.addEventListener("click", () => {
  GenerarPaleta();
  mostrarMensaje("🎨 Se genero una nueva paleta de colores");
});

selectOpciones.addEventListener("change", () => {
  GenerarPaleta();
  const valor = selectOpciones.value;
  mostrarMensaje(`📋 Se genero una nueva paleta de ${valor} colores`);
});
