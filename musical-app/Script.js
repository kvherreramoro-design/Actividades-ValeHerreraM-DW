// 1. Lista de canciones con su nombre y archivo
const playlist = [
  { nombre: "💝take me home", archivo: "Olivia Rodrigo - take me home (4 christmas) (64k).mp3" },
  { nombre: "⛄is it new years yet", archivo: "Sabrina Carpenter - is it new years yet_ (Lyric Video) (64k).mp3"},
  { nombre: "🎄Christmas Tree Farm", archivo: "Taylor Swift - Christmas Tree Farm (64k).mp3" }
];


let indiceActual = 0;


// 2. Conectamos con los elementos del HTML
const audioPlayer = document.getElementById("audio-player");
const nombreCancion = document.getElementById("nombre-cancion");
const btnAnterior = document.getElementById("btn-anterior");
const btnSiguiente = document.getElementById("btn-siguiente");


// 3. Función para cargar y reproducir la canción elegida
function cargarCancion(indice) {
  nombreCancion.textContent = playlist[indice].nombre;
  audioPlayer.src = playlist[indice].archivo;
  audioPlayer.play();
}


// 4. Botón Siguiente (si llega al final, vuelve a la primera)
btnSiguiente.addEventListener("click", () => {
  indiceActual = (indiceActual + 1) % playlist.length;
  cargarCancion(indiceActual);
});


// 5. Botón Anterior (si está en la primera, va a la última)
btnAnterior.addEventListener("click", () => {
  indiceActual = (indiceActual - 1 + playlist.length) % playlist.length;
  cargarCancion(indiceActual);
});


// 6. Si la canción termina sola, pasa automáticamente a la siguiente
audioPlayer.addEventListener("ended", () => {
  indiceActual = (indiceActual + 1) % playlist.length;
  cargarCancion(indiceActual);
});