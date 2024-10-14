
// cuando esta todo cargado se le pide datos al usuario
window.addEventListener('load', function() {
    
    eleccionJuego();

});

function eleccionJuego() {
  juego = prompt(
    "¿Que juego querés jugar?:\n1. Adivina el número\n2. Piedra - Papel - Tijera\n3. Matematicas\n4. Salir"
  );

  switch (juego) {
    case "1":
      numberSecret();
      repetirJuego();
      break;
    case "2":
      ppt();
      repetirJuego();
      break;
    case "3":
      matematicas();
      repetirJuego();
      break;
    case "4":
      alert("Hasta la proxima 🖐");
      break;
    default:
      alert("No existe ese juego. Inténtalo de nuevo.");
      eleccionJuego();
  }
}

function repetirJuego() {
  res = confirm("¿Queres jugar otro juego?");
  if (res) {
    eleccionJuego();
  } else {
    alert("Hasta la proxima 🖐");
  }
}

/**
 * JUEGO ADIVINAR EL NUMERO SECRETO
 */
function numberSecret() {
  const NUMERO_SECRETO = 3; 
  let intentosUsuarios = 0; 
  let jugadorNumero = 0; 

  
  while (jugadorNumero !== NUMERO_SECRETO) {
    intentosUsuarios++;
    jugadorNumero = parseInt(
      prompt("Introduce un número del 1 al 10"),
      10
    );

    
    if (isNaN(jugadorNumero)) {
      alert("Por favor introduce un número válido.");
      continue;
    }

    if (jugadorNumero === NUMERO_SECRETO) {
      alert("¡Ganaste!");
      break;
    } else if (jugadorNumero > NUMERO_SECRETO) {
      alert("Demasiado alto");
    } else if (jugadorNumero < NUMERO_SECRETO) {
      alert("Demasiado bajo");
    }

    if (intentosUsuarios === 3) {
      alert("Perdiste, se acabaron los intentos.");
      break;
    }
  }
}

/**
 * JUEGO PIEDRA PAPEL TIJERA
 */
function ppt() {
  let eleccionIA = "tijera";
  let eleccionUsuario = prompt(
    "Elige entre piedra, papel o tijera:"
  ).toLowerCase();

  while (
    eleccionUsuario !== "piedra" &&
    eleccionUsuario !== "papel" &&
    eleccionUsuario !== "tijera"
  ) {
    alert("Opción inválida. Debes elegir entre piedra, papel o tijera.");
    eleccionUsuario = prompt(
      "Introduce piedra, papel o tijera"
    ).toLowerCase();
  }

  if (
    (eleccionUsuario === "piedra" && eleccionIA === "tijera") ||
    (eleccionUsuario === "papel" && eleccionIA === "piedra") ||
    (eleccionUsuario === "tijera" && eleccionIA === "papel")
  ) {
    alert("¡Ganaste!");
  } else if (eleccionUsuario === eleccionIA) {
    alert("¡Empate!");
  } else {
    alert("¡Perdiste!");
  }
}

/**
 * Juego de resolver cuentas matematicas
 * @param {string} pregunta - Pregunta a mostrar al usuario
 * @param {number} respuestaCorrecta - Respuesta correcta
 */
function hacerPregunta(pregunta, respuestaCorrecta) {
  let respuesta = prompt(pregunta);
  return respuesta == respuestaCorrecta;
}

function matematicas() {
  if (hacerPregunta("¿Cuánto es 2 + 2?", 4)) {
    if (hacerPregunta("¿Cuánto es 2 + 8?", 10)) {
      if (hacerPregunta("¿Cuánto es 5 + 15?", 20)) {
        alert("¡Has ganado!");
      } else {
        alert("Has perdido");
      }
    } else {
      alert("Has perdido");
    }
  } else {
    alert("Has perdido");
  }
} 

 