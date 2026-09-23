document.addEventListener('DOMContentLoaded', () => {
  const gameArea = document.getElementById('game-area');
  const contador = document.getElementById('contador');
  const modal = document.getElementById('modal-victoria');
  const floresTipos = ['🌻', '🌼', '💛'];

  let puntos = 0;
  const meta = 10;
  let juegoActivo = true;

  function crearFlor() {
    if (!juegoActivo) return;

    const flor = document.createElement('div');
    flor.classList.add('flor-item');
    flor.innerText = floresTipos[Math.floor(Math.random() * floresTipos.length)];

    // Posición horizontal aleatoria
    const xPos = Math.random() * (window.innerWidth - 60);
    flor.style.left = `${xPos}px`;

    // Velocidad de caída aleatoria (entre 3 y 5 segundos)
    const duracion = Math.random() * 2 + 3;
    flor.style.animationDuration = `${duracion}s`;

    // Evento al tocar o hacer clic
    const atraparFlor = (e) => {
      e.stopPropagation();
      if (!juegoActivo) return;

      puntos++;
      contador.innerText = puntos;
      flor.remove();

      if (puntos >= meta) {
        ganarJuego();
      }
    };

    flor.addEventListener('click', atraparFlor);
    flor.addEventListener('touchstart', atraparFlor);

    // Si llega al suelo, se elimina para no saturar la pantalla
    flor.addEventListener('animationend', () => flor.remove());

    gameArea.appendChild(flor);
  }

  function ganarJuego() {
    juegoActivo = false;
    clearInterval(generadorFlores);
    gameArea.innerHTML = '';
    modal.classList.remove('oculto');
  }

  // Genera una flor nueva cada 500ms
  const generadorFlores = setInterval(crearFlor, 500);
});