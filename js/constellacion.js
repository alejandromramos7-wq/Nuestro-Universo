document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("constellation-area");
    const messageBox = document.getElementById("constellation-message");

    if (!container || !messageBox) return;

    // Limpiar el contenedor y asegurar posición relativa
    container.innerHTML = "";
    container.style.position = "relative";

    // Frases para las estrellas
    const starMessages = [
        "Entre millones de estrellas, mis ojos siempre te buscarán a ti. ✨",
        "Tu sonrisa ilumina mi cielo en los días más oscuros. 🌙",
        "Cada momento a tu lado es un recuerdo brillante que guardo en mi corazón. 💖",
        "Eres el deseo que le pedí a una estrella fugaz y se hizo realidad. 🌠",
        "El universo es enorme, pero contigo a mi lado no necesito explorar nada más. 🌌",
        "Nuestra historia está escrita en el firmamento con luz propia. ✦",
        "Gracias por hacer que mi vida tenga tanta magia y luz. 🌟",
        "Contigo aprendí que las estrellas no solo están en el cielo, sino en tus ojos. 👀✨",
        "Siempre serás mi lugar favorito en este inmenso universo. ♡"
    ];

    // Coordenadas en porcentajes para las estrellas
    const positions = [
        { top: "20%", left: "15%" },
        { top: "35%", left: "30%" },
        { top: "15%", left: "50%" },
        { top: "40%", left: "65%" },
        { top: "25%", left: "85%" },
        { top: "65%", left: "20%" },
        { top: "75%", left: "45%" },
        { top: "60%", left: "70%" },
        { top: "80%", left: "85%" }
    ];

    /* =====================================================
       1. CREAR LÍNEAS DE LA CONSTELACIÓN (SVG)
    ====================================================== */
    const svgNamespace = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNamespace, "svg");
    svg.setAttribute("width", "100%");
    svg.setAttribute("height", "100%");
    svg.style.position = "absolute";
    svg.style.top = "0";
    svg.style.left = "0";
    svg.style.pointerEvents = "none"; // Evita bloquear los clics en las estrellas
    svg.style.zIndex = "1";

    container.appendChild(svg);

    // Unir cada estrella con la siguiente mediante una línea punteada
    for (let i = 0; i < positions.length - 1; i++) {
        const start = positions[i];
        const end = positions[i + 1];

        const line = document.createElementNS(svgNamespace, "line");
        line.setAttribute("x1", start.left);
        line.setAttribute("y1", start.top);
        line.setAttribute("x2", end.left);
        line.setAttribute("y2", end.top);
        
        // Estilo de la línea (punteada y suave)
        line.setAttribute("stroke", "rgba(255, 255, 255, 0.4)");
        line.setAttribute("stroke-width", "1.5");
        line.setAttribute("stroke-dasharray", "4 4");

        svg.appendChild(line);
    }

    /* =====================================================
       2. CREAR ESTRELLAS Y EVENTOS
    ====================================================== */
    starMessages.forEach((message, index) => {
        const star = document.createElement("div");
        star.classList.add("star-item");
        star.innerHTML = "✦";

        const pos = positions[index];
        star.style.top = pos.top;
        star.style.left = pos.left;
        star.style.position = "absolute";
        star.style.transform = "translate(-50%, -50%)"; // Centra exactamente la estrella en el punto de la línea
        star.style.cursor = "pointer";
        star.style.zIndex = "2"; // Por encima de las líneas

        star.addEventListener("click", () => {
            document.querySelectorAll(".star-item").forEach(s => s.classList.remove("active"));
            star.classList.add("active");

            messageBox.style.opacity = "0";
            messageBox.style.transform = "translateY(10px)";

            setTimeout(() => {
                messageBox.textContent = message;
                messageBox.style.opacity = "1";
                messageBox.style.transform = "translateY(0)";
            }, 200);
        });

        container.appendChild(star);
    });
});