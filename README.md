# 🎮 Sala de Juegos

Este proyecto es una **Sala de Juegos** sencilla que incluye tres juegos interactivos: **Adivina el número**, **Piedra, Papel o Tijera**, y **Resuelve operaciones matemáticas**. La aplicación está construida usando **HTML**, **CSS** con Bootstrap para el diseño responsivo, y **JavaScript** para la lógica de los juegos.

## 📋 Descripción de la funcionalidad

### 1. **Adivina el número**
En este juego, el objetivo es adivinar un número aleatorio entre 1 y 10. El usuario tiene un límite de **3 intentos** para acertar. El juego proporciona pistas después de cada intento:
- Si el número del jugador es **mayor** al número secreto, se le indica que el número correcto es más bajo.
- Si el número del jugador es **menor**, se le indica que el número correcto es más alto.

Si el usuario no acierta en 3 intentos, el juego termina y se revela el número secreto.

- **Función principal**: `numberSecret()`
- **Algoritmo**: Se utiliza un bucle `while` para seguir solicitando la entrada del usuario mientras el número no sea el correcto y no se agoten los intentos.

### 2. **Piedra, Papel o Tijera**
Este es el clásico juego en el que el usuario elige entre **Piedra (1)**, **Papel (2)** o **Tijera (3)**. La computadora elige una opción de manera aleatoria. Las reglas son:
- Piedra gana a Tijera.
- Tijera gana a Papel.
- Papel gana a Piedra.
- Si ambos jugadores eligen la misma opción, es un empate.

El juego muestra el resultado (ganaste, perdiste o empate) y la elección de la computadora.

- **Función principal**: `ppt()`
- **Algoritmo**: Se utilizan condicionales `if` para comparar las elecciones del jugador y de la computadora.

### 3. **Resuelve operaciones matemáticas**
Este juego desafía al usuario con **3 operaciones matemáticas aleatorias** (suma, resta, multiplicación o división). El jugador debe ingresar la respuesta correcta para cada operación. Si acierta las 3 preguntas consecutivas, gana el juego. Si se equivoca en una, el juego termina.

- **Función principal**: `matematicas()`
- **Algoritmo**: Un bucle `for` controla el número de preguntas, mientras que se utilizan `switch` y condicionales para verificar las respuestas.

## 🚀 Tecnologías utilizadas

- **HTML5**: Para la estructura del contenido.
- **CSS3** (con **Bootstrap**): Para el diseño y la disposición visual.
- **JavaScript**: Para la lógica de los juegos.
 