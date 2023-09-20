let INICIO_PREGUNTA = 0;
let puntaje = 0;

function comenzarjuego(){
    location.href="inicio.html";

}

function terminar(){
    location.href="inicio1.html";

}

function Regresar(){
  location.href="../menu.html";

}

cargarPregunta(INICIO_PREGUNTA);

function cargarPregunta(inicio) {
  objetoPregunta = baseDePreguntas[inicio];

  opciones = [...objetoPregunta.distractores];
  opciones.push(objetoPregunta.respuesta);
  
  document.getElementById("pregunta").innerHTML = objetoPregunta.pregunta;
  if (objetoPregunta.imagen) {
    document.getElementById("imagen").src = objetoPregunta.imagen;
    document.getElementById("imagen").style.display = "";
  } else {
    document.getElementById("imagen").style.display = "none";
  }

  if (objetoPregunta.ayuda) {
    document.getElementById("ayuda").style.display = "";
  } else {
    document.getElementById("ayuda").style.display = "none";
  }

  document.getElementById("opcion-1").innerHTML = opciones[0];
  document.getElementById("opcion-2").innerHTML = opciones[1];
  document.getElementById("opcion-3").innerHTML = opciones[2];
  document.getElementById("opcion-4").innerHTML = opciones[3];
}

async function seleccionarOpción(inicio) {
  let validezRespuesta = opciones[inicio] == objetoPregunta.respuesta;
  if (validezRespuesta) {
    await Swal.fire({
      title: "Respuesta correcta",
      text: "La respuesta ha sido correcta",
      icon: "success",
    });
    puntaje++;
  } else {
    await Swal.fire({
      title: "Respuesta Incorrecta",
      html: `La respuesta correcta es ${objetoPregunta.respuesta}`,
      icon: "error",
    });
  }
  INICIO_PREGUNTA++;
  if (INICIO_PREGUNTA >= baseDePreguntas.length) {
    await Swal.fire({
      title: "Juego términado",
      text: `Tu puntaje fue de: ${puntaje}/${baseDePreguntas.length}`,
    });
    INICIO_PREGUNTA = 0;
    puntaje = 0;
  }
  cargarPregunta(INICIO_PREGUNTA);
}

function ayuda() {
  Swal.fire({
    text: objetoPregunta.ayuda,
    imageUrl: objetoPregunta.ayudaImg,
    imageHeight: 300,
  });
}