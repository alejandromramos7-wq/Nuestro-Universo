document.addEventListener("DOMContentLoaded", () => {

    console.log("✨ Nuestro pequeño universo ha comenzado ✨");


    /* =====================================================
       BOTÓN PRINCIPAL
    ====================================================== */

    const startButton = document.getElementById("start-button");

    if (startButton) {

        startButton.addEventListener("click", () => {

            const constellation =
                document.getElementById("constellation");

            if (!constellation) return;

            constellation.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    }


    /* =====================================================
       LINKS INTERNOS
    ====================================================== */

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(link => {

            link.addEventListener("click", event => {

                const targetId =
                    link.getAttribute("href");

                const target =
                    document.querySelector(targetId);

                if (!target) return;

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            });

        });


    /* =====================================================
       OBSERVADOR DE SECCIONES
       Agrega una pequeña animación cuando aparecen.
    ====================================================== */

    const sections =
        document.querySelectorAll(".section");

    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                    }

                });

            },
            {
                threshold: 0.15
            }
        );


    sections.forEach(section => {
        observer.observe(section);
    });

});