document.addEventListener("DOMContentLoaded", () => {

    const container =
        document.getElementById("stars-container");


    if (!container) {
        console.warn("No existe #stars-container");
        return;
    }


    /* =====================================================
       CONFIGURACIÓN
    ====================================================== */

    const totalStars = 180;

    const specialStars = 8;


    /* =====================================================
       CREAR ESTRELLAS NORMALES
    ====================================================== */

    for (let i = 0; i < totalStars; i++) {

        const star =
            document.createElement("div");

        star.classList.add("star");


        /* Tamaño aleatorio */

        const randomSize =
            Math.random();


        if (randomSize < 0.65) {

            star.classList.add("small");

        } else if (randomSize > 0.92) {

            star.classList.add("big");

        }


        /* Posición */

        star.style.left =
            `${Math.random() * 100}%`;

        star.style.top =
            `${Math.random() * 100}%`;


        /* Velocidad de parpadeo */

        const duration =
            2 + Math.random() * 5;


        star.style.setProperty(
            "--duration",
            `${duration}s`
        );


        /* Opacidad */

        const minOpacity =
            0.2 + Math.random() * 0.4;


        star.style.setProperty(
            "--min-opacity",
            minOpacity
        );


        /* Delay */

        star.style.animationDelay =
            `${Math.random() * 5}s`;


        container.appendChild(star);

    }


    /* =====================================================
       ESTRELLAS ESPECIALES
    ====================================================== */

    for (let i = 0; i < specialStars; i++) {

        const star =
            document.createElement("div");

        star.classList.add(
            "star",
            "special"
        );


        star.style.left =
            `${Math.random() * 100}%`;

        star.style.top =
            `${Math.random() * 100}%`;


        star.style.animationDelay =
            `${Math.random() * 3}s`;


        container.appendChild(star);

    }

});