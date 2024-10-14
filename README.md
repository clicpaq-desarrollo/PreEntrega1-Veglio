# 🎮 Sala de Juegos

**Descripción**:  
La **Sala de Juegos** es una aplicación web interactiva que ofrece tres juegos clásicos para disfrutar en línea: **Adivina el Número**, **Piedra, Papel o Tijera** y **Matemáticas**. Los usuarios pueden jugar a través de una interfaz amigable y visualmente atractiva, diseñada para hacer la experiencia más divertida y dinámica. El proyecto incluye dos versiones: una inicial con funcionalidades básicas y una mejorada con importantes mejoras en la jugabilidad y el diseño.

## 🚀 Tecnologías utilizadas

- **HTML5**: Para la estructura del contenido.
- **CSS3** (con **Bootstrap**): Para el diseño y la disposición visual.
- **JavaScript**: Para la lógica de los juegos.
 
## Juegos disponibles

1. **Adivina el Número**:  
   El jugador debe adivinar un número entre 1 y 10 en un máximo de tres intentos. El sistema dará pistas si el número es más alto o más bajo.

2. **Piedra, Papel o Tijera**:  
   El jugador selecciona una de las tres opciones (Piedra, Papel o Tijera) para enfrentarse a la computadora. El resultado será determinado por las reglas clásicas del juego.

3. **Matemáticas**:  
   El jugador debe responder tres preguntas de matemáticas de dificultad básica (sumas, restas, multiplicaciones y divisiones). Si responde correctamente las tres preguntas, gana el juego.

## Versión 1: **Versión Básica**

### Características
- **Interfaz**: La versión original no contaba con una interfaz gráfica avanzada, los juegos se interactuaban a través de prompts y alertas emergentes.
- **Juegos**:
  - El juego **Adivina el Número** solicitaba un número a través de un prompt y daba pistas sobre si el número era mayor o menor.
  - **Piedra, Papel o Tijera** se jugaba mediante un prompt numérico donde el jugador ingresaba un número para elegir su jugada.
  - En **Matemáticas**, el usuario debía responder a una serie de operaciones simples de matemáticas que se presentaban de manera aleatoria.
- **Limitaciones**:
  - No había una interfaz gráfica amigable, todo se realizaba en una serie de mensajes emergentes.
  - La interacción con el usuario se limitaba solo a entradas de texto (sin botones o retroalimentación visual).

## Versión 2: **Versión Mejorada**

### Mejoras principales
La versión mejorada introduce una serie de mejoras tanto en el diseño como en la jugabilidad, ofreciendo una experiencia mucho más interactiva y divertida.

#### 1. **Interfaz gráfica mejorada**
- **Bootstrap** se utilizó para crear una interfaz moderna y adaptable a dispositivos móviles. Los juegos ahora tienen botones para interactuar en lugar de depender de los **prompts** y **alertas**.
- **Diseño atractivo**: Se añadieron imágenes representativas de cada juego, mejorando la experiencia visual.

#### 2. **Mejoras en la lógica de los juegos**
- **Adivina el Número**: Ahora el número se genera de manera aleatoria entre 1 y 10 y el jugador tiene 3 intentos para adivinarlo.
- **Piedra, Papel o Tijera**: Se mejoró la lógica de selección, mostrando opciones claras y con retroalimentación visual (usando emojis) de la elección de la IA.
- **Matemáticas**: El jugador tiene que resolver tres preguntas de matemáticas, y el juego termina si se comete un error en cualquier respuesta.

#### 3. **Interacción y retroalimentación**
- **Mensajes visuales**: En lugar de las alertas tradicionales, ahora se muestra la retroalimentación de manera más visual y amigable, usando **emojis** para representar las opciones y resultados.
- **Botones interactivos**: Los usuarios ahora pueden hacer clic en los botones de cada juego para iniciar la partida, lo que mejora la experiencia y elimina la dependencia de prompts.

#### 4. **Mejoras en la jugabilidad**
- **Adivina el Número**: El jugador recibe indicaciones sobre si el número que introdujo es mayor o menor que el número secreto. Además, tiene un máximo de tres intentos para adivinarlo.
- **Piedra, Papel o Tijera**: Se muestra la elección de la computadora con un texto claro (Piedra 🗿, Papel 📃, Tijera ✂) y el resultado se explica detalladamente con emojis.
- **Matemáticas**: Si el jugador responde incorrectamente en alguna de las tres preguntas, el juego termina, y se muestra un mensaje de "¡Incorrecto! ❌" con la respuesta correcta.
 