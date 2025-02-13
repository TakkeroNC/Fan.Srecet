// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Wait a minute, my girl", time: 0 },
  { text: "Wait a minute, my lover", time: 2 },
  { text: "Summer's up and i want you to know that i won't", time: 4 },
  { text: "Live a minute without ya", time: 7 },
  { text: "I've been waiting for a while", time: 11 },
  { text: "I always had you on my mind", time: 13 },
  { text: "Now you're here in flesh and bones", time: 16 },
  { text: "My heart beats so and it's scaring me to death", time: 18 },
  { text: "But I can't", time: 21 },
  { text: "Wait a minute, my girl", time: 22 },
  { text: "Wait a minute, my lover", time: 24 },
  { text: "Summer's up and I want you to know that I won't", time: 27 },
  { text: "Live a minute without ya", time: 29 },
  { text: "Wait a minute, my girl", time: 65 },
  { text: "Wait a minute, my lover", time: 67 },
  { text: "Summer's up and I want you to know that I won't", time: 70 },
  { text: "Live a minute without ya", time: 72 },
  { text: "There's a light and it's right there", time: 75},
  { text: "In front of me", time: 78 },
  { text: "And a voice that whispers family", time: 81 },
  { text: "Don't ignore the signs and", time: 86 },
  { text: "The symbols that are here", time: 89 },
  { text: "You might find the reason why you're here", time: 91 },
  { text: "I've been waiting for a wile", time: 96 },
  { text: "I always had you on my mind", time: 99 },
  { text: "Now you're here in flesh and bones", time: 102 },
  { text: "My heart beats so and it's scaring me to death", time: 104 },
  { text: "But I can't", time: 107 },
  { text: "Wait a minute, my girl", time: 108 },
  { text: "Wait a minute, my lover", time: 110 },
  { text: "Summer's up and I want you to know that I won't", time: 113 },
  { text: "Live a minute without ya", time: 115 },
  { text: "Try to say the right thing", time: 118 },
  { text: "My heart is beating like thunder", time: 120 },
  { text: "So wait a minute my", time: 123 },
  { text: "Wait a minute my", time: 125 },
  { text: "Wait a minute my", time: 126 },
  { text: "Wait a minute my", time: 127 },
  { text: "Wait a minute my", time: 128 },
  { text: "Wait a minute my", time: 130 },
  { text: "Wait a minute, my girl", time: 131}
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);