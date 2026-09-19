document.addEventListener(
    "DOMContentLoaded",
    async () => {

        const flag =
            document.getElementById(
                "language-flag"
            );

        const text =
            document.getElementById(
                "language-text"
            );

        const name =
            document.getElementById(
                "language-name"
            );

        const button =
            document.getElementById(
                "discover-language"
            );


        if (!button) return;


        let languages = [];


        /* =================================================
           CARGAR JSON
        ================================================== */

        try {

            const response =
                await fetch(
                    "data/messeges.json"
                );


            if (!response.ok) {

                throw new Error(
                    `HTTP ${response.status}`
                );

            }


            languages =
                await response.json();


        } catch (error) {

            console.error(
                "No se pudo cargar messeges.json",
                error
            );

            if (text) {
                text.textContent =
                    "Te amo";
            }

            if (name) {
                name.textContent =
                    "En todos los idiomas";
            }

            return;

        }


        if (
            !Array.isArray(languages) ||
            languages.length === 0
        ) {

            console.error(
                "messeges.json está vacío o tiene un formato incorrecto."
            );

            return;

        }


        /* =================================================
           ESTADO
        ================================================== */

        let currentIndex = 0;


        /* =================================================
           MOSTRAR FRASE O IDIOMA
        ================================================== */

        function showLanguage(index) {

            const item =
                languages[index];


            if (!item) return;


            // Si el JSON es una lista de textos (Strings)
            if (typeof item === "string") {

                if (flag) {
                    flag.textContent = "✨";
                }

                if (text) {
                    text.textContent = item;
                }

                if (name) {
                    name.textContent = `Mensaje ${index + 1} de ${languages.length}`;
                }

            } 
            // Si el JSON es una lista de objetos { flag, text, language }
            else if (typeof item === "object") {

                if (flag) {
                    flag.textContent = item.flag || "🌎";
                }

                if (text) {
                    text.textContent = item.text || item.frase || "Te amo";
                }

                if (name) {
                    name.textContent = item.language || item.idioma || "";
                }

            }

        }


        /* =================================================
           ANIMACIÓN
        ================================================== */

        function animateLanguage() {

            if (text) {

                text.style.opacity = "0";

                text.style.transform =
                    "translateY(10px)";

            }


            if (name) {

                name.style.opacity = "0";

            }


            setTimeout(() => {

                showLanguage(currentIndex);


                if (text) {

                    text.style.opacity = "1";

                    text.style.transform =
                        "translateY(0)";

                }


                if (name) {

                    name.style.opacity = "1";

                }

            }, 200);

        }


        /* =================================================
           PRIMERA FRASE
        ================================================== */

        showLanguage(currentIndex);


        /* =================================================
           BOTÓN
        ================================================== */

        button.addEventListener(
            "click",
            () => {

                currentIndex++;


                if (
                    currentIndex >=
                    languages.length
                ) {

                    currentIndex = 0;

                }


                animateLanguage();

            }
        );

    }
);