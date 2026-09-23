document.addEventListener('DOMContentLoaded', () => {
  const emoticones = ['🌻', '🌼', '💛', '✨'];

  function crearFlorCaida() {
    const flor = document.createElement('div');
    
    // Elige un emoticón al azar
    flor.innerText = emoticones[Math.floor(Math.random() * emoticones.length)];
    
    // Estilos dinámicos para posición y tamaño aleatorio
    flor.style.position = 'fixed';
    flor.style.top = '-20px';
    flor.style.left = Math.random() * 100 + 'vw';
    flor.style.fontSize = (Math.random() * 20 + 15) + 'px';
    flor.style.pointerEvents = 'none';
    flor.style.zIndex = '9999';
    
    // Duración aleatoria de la caída entre 4 y 8 segundos
    const duracion = Math.random() * 4 + 4;
    flor.style.animation = `caidaFlores ${duracion}s linear forwards`;

    document.body.appendChild(flor);

    // Elimina el elemento cuando termina la animación
    setTimeout(() => {
      flor.remove();
    }, duracion * 1000);
  }

  // Genera una flor nueva cada 400 milisegundos
  setInterval(crearFlorCaida, 400);
});