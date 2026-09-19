document.addEventListener("DOMContentLoaded", () => {

    const openButton =
        document.getElementById(
            "open-letter"
        );

    const letterContent =
        document.getElementById(
            "letter-content"
        );


    if (
        !openButton ||
        !letterContent
    ) {
        return;
    }


    let isOpen = false;


    /* =====================================================
       ABRIR / CERRAR CARTA
    ====================================================== */

    openButton.addEventListener(
        "click",
        () => {

            isOpen =
                !isOpen;


            if (isOpen) {

                letterContent.classList.add(
                    "show"
                );


                openButton.textContent =
                    "Cerrar mi carta 💌";


                setTimeout(() => {

                    letterContent.scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    });

                }, 250);


            } else {

                letterContent.classList.remove(
                    "show"
                );


                openButton.textContent =
                    "Abrir mi carta 💌";

            }

        }
    );

});