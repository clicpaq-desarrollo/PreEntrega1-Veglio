function numeroAleatorio(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}


/**
 * JUEGO ADIVINAR EL NUMERO SECRETO
 */
function numberSecret() {
  let numero_secreto = numeroAleatorio(1, 10); 
  let intentosUsuarios = 0; 
  let jugadorNumero = 0; 

  
  while (jugadorNumero !== numero_secreto) {
    intentosUsuarios++;
    jugadorNumero = parseInt(prompt("Introduce un número del 1 al 10"),10);

 
    if (isNaN(jugadorNumero)) {
      alert("Por favor introduce un número válido.");
      continue;
    }

    if (jugadorNumero === numero_secreto) {
      alert("¡Ganaste!🎉");
      break;
    } else if (jugadorNumero > numero_secreto) {
      alert("Más bajo 👇");
    } else if (jugadorNumero < numero_secreto) {
      alert("Más alto 👆");
    }

    if (intentosUsuarios === 3) {
      alert("Perdiste ❌, se acabaron los intentos.\nEl número era: " + numero_secreto);
      break;
    }
  }
}


 
/**
 * JUEGO PIEDRA PAPEL TIJERA
 */
function ppt() {
  let piedra = 1;
  let papel = 2;
  let tijera = 3;
  
  let eleccionIA = numeroAleatorio(1, 3);
  console.log("La computadora eligió: " + eleccionIA);
  let eleccionUsuario = parseInt(prompt(
    "Elige una opción(número):\n 1: Piedra 🗿\n 2: Papel 📃\n 3: Tijera ✂"
  ));

  
  while (isNaN(eleccionUsuario) || eleccionUsuario < 1 || eleccionUsuario > 3) {
    alert("Opción inválida. Por favor, elige un número entre 1 y 3.");
    eleccionUsuario = parseInt(prompt("Elige una opción(numero):\n 1: Piedra 🗿\n 2: Papel 📃\n 3: Tijera ✂"));
  }

    
    let eleccionIATexto = "";
    if (eleccionIA === piedra) {
      eleccionIATexto = "Piedra 🗿";
    } else if (eleccionIA === papel) {
      eleccionIATexto = "Papel 📃";
    } else if (eleccionIA === tijera) {
      eleccionIATexto = "Tijera ✂";
    }

  if (
    (eleccionUsuario == piedra && eleccionIA == tijera) ||
    (eleccionUsuario == papel && eleccionIA == piedra) ||
    (eleccionUsuario == tijera && eleccionIA == papel)
  ) {
    alert("¡Ganaste! 🎉\n La computadora eligió: " + eleccionIATexto);
  } else if (eleccionUsuario === eleccionIA) {
    alert("¡Empate!\n La computadora eligió: " + eleccionIATexto);
  } else {
    alert("¡Perdiste! ❌\n La computadora eligió: " + eleccionIATexto);
  }
}

/**
 * Juego de resolver cuentas matematicas 
 */
  

function matematicas() {
  let aciertos = 0;  

  for (let i = 0; i < 3; i++) {
    
    let pregunta = numeroAleatorio(1, 7);
    let respuestaCorrecta;
    let respuestaUsuario;

    switch (pregunta) {
      case 1:
        respuestaCorrecta = 5 + 3;  
        respuestaUsuario = parseInt(prompt("¿Cuánto es 5 + 3?"));
        break;
      case 2:
        respuestaCorrecta = 12 - 7;  
        respuestaUsuario = parseInt(prompt("¿Cuánto es 12 - 7?"));
        break;
      case 3:
        respuestaCorrecta = 6 * 2;  
        respuestaUsuario = parseInt(prompt("¿Cuánto es 6 * 2?"));
        break;
      case 4:
        respuestaCorrecta = 16 / 4;  
        respuestaUsuario = parseInt(prompt("¿Cuánto es 16 / 4?"));
        break;
      case 5:
        respuestaCorrecta = 9 + 6;  
        respuestaUsuario = parseInt(prompt("¿Cuánto es 9 + 6?"));
        break;
      case 6:
        respuestaCorrecta = 10 - 3;  
        respuestaUsuario = parseInt(prompt("¿Cuánto es 10 - 3?"));
        break;
      case 7:
        respuestaCorrecta = 8 * 3;  
        respuestaUsuario = parseInt(prompt("¿Cuánto es 8 * 3?"));
        break;
    }

    
    if (respuestaUsuario === respuestaCorrecta) {
      alert("¡Correcto! 🎉");
      aciertos++;
    } else {
      alert("¡Incorrecto! ❌ La respuesta correcta era: " + respuestaCorrecta);
      break;  
    }
  }

  
  if (aciertos === 3) {
    alert("¡Felicidades! Respondiste bien las 3 preguntas y ganaste el juego. 🏆");
  } else {
    alert("¡Juego terminado! 😢 No lograste responder correctamente las 3 preguntas.");
  }
}


