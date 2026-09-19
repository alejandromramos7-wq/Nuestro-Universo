document.addEventListener("DOMContentLoaded", () => {

    const menu =
        document.getElementById("menu");

    const menuButton =
        document.getElementById("menu-button");

    const menuClose =
        document.getElementById("menu-close");

    const menuItems =
        document.querySelectorAll(".menu-item");


    if (!menu || !menuButton) {
        console.warn("No se encontró el menú.");
        return;
    }


    /* =====================================================
       ABRIR MENÚ
    ====================================================== */

    function openMenu() {

        menu.classList.add("active");

        document.body.style.overflow = "hidden";

    }


    /* =====================================================
       CERRAR MENÚ
    ====================================================== */

    function closeMenu() {

        menu.classList.remove("active");

        document.body.style.overflow = "";

    }


    /* =====================================================
       BOTÓN ABRIR
    ====================================================== */

    menuButton.addEventListener("click", () => {

        openMenu();

    });


    /* =====================================================
       BOTÓN CERRAR
    ====================================================== */

    if (menuClose) {

        menuClose.addEventListener("click", () => {

            closeMenu();

        });

    }


    /* =====================================================
       CERRAR AL TOCAR EL FONDO
    ====================================================== */

    menu.addEventListener("click", event => {

        if (event.target === menu) {

            closeMenu();

        }

    });


    /* =====================================================
       OPCIONES DEL MENÚ
    ====================================================== */

    menuItems.forEach(item => {

        item.addEventListener("click", () => {

            const sectionId =
                item.getAttribute("data-section");

            const section =
                document.getElementById(sectionId);


            if (!section) {

                console.warn(
                    `No existe la sección: ${sectionId}`
                );

                return;
            }


            closeMenu();


            setTimeout(() => {

                section.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }, 200);

        });

    });


    /* =====================================================
       ESC PARA CERRAR
    ====================================================== */

    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {

            closeMenu();

        }

    });

});